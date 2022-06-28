import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"

import Post from '../components/Post'
import { FeedBox, StackWrapper, StyledButton } from '../components/styles'
import { selectPostById, getPostById } from './postsSlice'

const ShowPost = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { postId } = useParams()
    let flag = true

    useEffect(() => {
      dispatch(selectPostById(Number(postId)))
    }, [])

    const post = useSelector(getPostById)

    return (
      <FeedBox>
        <Post post={post} flag={flag} />
        
        <StackWrapper>
            <StyledButton variant="contained" onClick={ () => navigate(-1) }>Back</StyledButton>
        </StackWrapper>
      </FeedBox>
    )
}

export default ShowPost