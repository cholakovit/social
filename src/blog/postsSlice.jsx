import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import axios from "axios";

const POSTS_URL = 'http://localhost:3500/posts'
const USERS_URL = 'http://localhost:3500/users'

//import zzz from '../../data/data.json'

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState({
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    posts: [],
    postStatus: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    count: 0
})

export const selectPostById = createAsyncThunk('posts/showPost', async (postId) => {
    const post = await axios.get(`${POSTS_URL}/${postId}`)
    const user = await axios.get(`${USERS_URL}/${post.data.userId}`)

    post.data.name = user.data.name
    post.data.position = user.data.position
    post.data.pic = user.data.pic

    return post.data
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (loadMore) => {
    const posts = await axios.get(POSTS_URL+`?_limit=${loadMore}&_sort=id&_order=desc`)
    const users = await axios.get(USERS_URL)

    // експоненциално изменение
    // users.data.map(user => {
    //     posts.data.map(post => {
    //         if(post.userId == user.id) { 
    //             post.name = user.name
    //             post.position = user.position
    //             post.pic = user.pic
    //         }
    //     })
    // })

    // линейно изменение
    const userArr = Object.fromEntries(users.data.map(
            (user) => ([user.id, user])
        )
    )

    posts.data.map(post => {
        post.name = userArr[post.userId].name
        post.position = userArr[post.userId].position
        post.pic = userArr[post.userId].pic
    })

    return posts.data
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (post) => {
    const response = await axios.post(POSTS_URL, post)
    const user = await axios.get(`${USERS_URL}/${response.data.userId}`)

    response.data.name = user.data.name
    response.data.position = user.data.position
    response.data.pic = user.data.pic

    return response.data
})

export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
    const { id } = post
    
    try {
        const response = await axios.put(`${POSTS_URL}/${id}`, post)
        return response.data
    } catch (err) {
        return err.message
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                action.payload.userId = Number(action.payload.userId)
                action.payload.date = new Date().toISOString();
                action.payload.reactions = {
                    likes: 0,
                    shares: 0
                }
                
                state.posts.unshift(action.payload)
            })
            .addCase(selectPostById.fulfilled, (state, action) => {
                state.post = action.payload
                state.postStatus = 'succeeded'
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Update could not complete')
                    console.log(action.payload)
                    return;
                }
                //state.posts[action.payload.id].reactions['like']++
            })
    }
})

export const getPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error

export const getPostById = (state) => state.posts.post
export const getPostStatus = (state) => state.posts.postStatus

export default postsSlice.reducer