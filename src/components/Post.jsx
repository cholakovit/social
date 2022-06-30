import { CardHeader, IconButton, Divider, CardContent } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import { StyledCardActions, StyledAvatar, OrangeLike, ArrowIcon, StyledPost, TimePost, SeeMore, CountLikes, CardTypography,
  OrangeLikeCountContainer, CardActionLabels, StyledCardActionsButton, StyledCardActionsButtonDisabled } from './styles'
import TimeAgo from './TimeAgo'
import { useDispatch, useSelector } from "react-redux"
import { updatePost } from "../blog/postsSlice"
import { updateUserReactions, getUserById } from '../blog/usersSlice'
import { useState, useEffect } from 'react'

const Post = ({post, flag}) => {
  const dispatch = useDispatch()
  const user = useSelector(getUserById)
  const [likeClicked, setLikeClicked] = useState(0)
  const [likesCount, setLikesCount] = useState(post?.reactions.likes)
  const [likedThisPost, setLikedThisPost] = useState(user?.likedPosts?.some(userLikedPost => userLikedPost === post?.id))

  useEffect(() => {

    if(likeClicked == 0) return;

    try {
      dispatch(updatePost({ id: post.id, body: post.body, userId: post.userId, date: new Date(), 
          reactions: { likes: likesCount }}))

      dispatch(updateUserReactions({ userId: post.userId, reaction: 'likes', postId: post.id }))

    } catch(err) {
      console.error('Failed to save the post', err)
    }

    if(likedThisPost == true) setLikedThisPost(false)
    if(likedThisPost == false) setLikedThisPost(true)

  },[likeClicked])

  return (
    <StyledPost>
        <CardHeader
            avatar={<StyledAvatar src={`/img/${post?.pic}`} alt={post?.name} />}
            action={<TimePost variant='span'>{post?.date ? <TimeAgo timestamp={post?.date} /> : ''}</TimePost>}
            title={post?.name}
            subheader={post?.position}
        />
        <CardContent>
            <CardTypography variant="body2">
              {flag ? post?.body : post?.body.substring(0, 100) + '...' }
            </CardTypography>
            {!flag && <SeeMore href={`${post.id}`}>... see more</SeeMore>}
        </CardContent>
        {likesCount > 0 &&
        <OrangeLikeCountContainer>
          <OrangeLike />          
          <CountLikes>{likesCount}</CountLikes>
        </OrangeLikeCountContainer>
        }
        <Divider /> 
        <StyledCardActions>
            {((likeClicked !== 1) && Boolean(likedThisPost)) ? 
              <StyledCardActionsButtonDisabled onClick={ () => { setLikeClicked(1), setLikesCount(likesCount - 1) } }>
                <IconButton aria-label="like"><ThumbUpOutlinedIcon /></IconButton>
                <CardActionLabels variant='p'>Liked</CardActionLabels>
              </StyledCardActionsButtonDisabled>
              : 
              <StyledCardActionsButton onClick={ () => { setLikeClicked(2), setLikesCount(likesCount + 1) } }>
                <IconButton aria-label="like"><ThumbUpOutlinedIcon /></IconButton>
                <CardActionLabels variant='p'>Like</CardActionLabels>
              </StyledCardActionsButton>
            }
            <StyledCardActionsButton>
              <IconButton aria-label="share"><ArrowIcon /></IconButton>
              <CardActionLabels variant='p'>Share</CardActionLabels>
            </StyledCardActionsButton>
        </StyledCardActions>
    </StyledPost>
  )
}

export default Post