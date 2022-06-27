import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"

import Post from '../components/Post'
import Loading from '../components/Loading'
import { FeedBox } from '../components/styles'
import { selectPostById, getPostById } from './postsSlice'

const ShowPost = () => {
    const dispatch = useDispatch()
    const { postId } = useParams()
    let flag = true

    useEffect(() => {
      dispatch(selectPostById(Number(postId)))
    }, [])

    const post = useSelector(getPostById)

    return (
      <FeedBox><Post post={post} flag={flag} /></FeedBox>
    )
}

export default ShowPost