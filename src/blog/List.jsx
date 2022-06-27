import { useSelector, useDispatch } from "react-redux"
import { getPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice"
import { useEffect, useState } from "react"
import { StackWrapper, FeedBox, StyledButton } from '../components/styles'
import PostForm from '../components/postForm'
import Post from '../components/Post'
const List = () => {

    const dispatch = useDispatch()
    //const status = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)
    const [loadMore, setLoadMore] = useState(3)
    const [status, setStatus] = useState(useSelector(getPostsStatus))

    const posts = useSelector(getPosts)

    useEffect(() => {
        console.log('status', status)
        if (status === 'idle') {
            dispatch(fetchPosts(loadMore))
            //return () => { ignore = true }
        }
  
    }, [status, dispatch, loadMore])

    //console.log('List', posts)

    return (
        <FeedBox>
            <PostForm />
            {error ? <p>{error}</p> : 
            status === 'loadling' ? 
                <Loading /> : 
                posts?.map(post => <Post post={post} key={post.id} />)
            }
    
            <StackWrapper>
            <StyledButton variant="contained" onClick={() => { setLoadMore(loadMore + 3), setStatus('idle') }}>Load more</StyledButton>
            </StackWrapper>
        </FeedBox>
    )
}

export default List