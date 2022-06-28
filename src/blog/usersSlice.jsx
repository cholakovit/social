import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'http://localhost:3500/users'

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState({
    user: null,
    userStatus: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    userMessage: '',
    error: null,
})

export const selectUserById = createAsyncThunk('posts/showUser', async (userId) => {
    const user = await axios.get(`${USERS_URL}/${userId}`)
    return user.data
})

export const updateUser = createAsyncThunk('posts/updateUser', async (user) => {
    const { id } = user;
    try {
        const response = await axios.put(`${USERS_URL}/${id}`, user)
        return response.data
    } catch (err) {
        return err.message
    }
})

export const updateUserReactions = createAsyncThunk('posts/updateUserReaction', async (user) => {
    const { userId, reaction } = user

    const selectedUser = await axios.get(`${USERS_URL}/${userId}`)
    
    selectedUser.data.reactions[reaction] = selectedUser.data.reactions[reaction] + 1

    try {
        const response = await axios.put(`${USERS_URL}/${selectedUser.data.id}`, selectedUser.data)
        return response.data
    } catch (err) {
        return err.message
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(selectUserById.fulfilled, (state, action) => {
            state.user = action.payload
            state.userStatus = 'succeeded'
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            if (!action.payload?.id) {
                console.log('Update could not complete')
                console.log(action.payload)
                return;
            }
            state.userMessage = 'User updated Successfully'
            action.payload.date = new Date().toISOString()
        })
        .addCase(updateUserReactions.fulfilled, (state, action) => {
            if (!action.payload?.id) {
                console.log('Update could not complete')
                console.log(action.payload)
                return;
            }
            state.user = action.payload
        })
    }
})

export const getUserById = (state) => state.users.user
export const getUserStatus = (state) => state.users.userStatus
export const getUserMessages = (state) => state.users.userMessage

export default usersSlice.reducer