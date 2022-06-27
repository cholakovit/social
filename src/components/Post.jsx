import { Box, CardHeader, IconButton, Divider, Typography, CardContent } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import { StyledCardActions, StyledAvatar, OrangeLike, ArrowIcon, StyledPost, TimePost, SeeMore, CountLikes, 
  OrangeLikeCountContainer, CardTypography, CardActionLabels } from './styles'
import TimeAgo from './TimeAgo'
import { useDispatch } from "react-redux";
import { updatePost } from "../blog/postsSlice";
import { useState } from 'react';

const Post = ({post, flag}) => {
  const dispatch = useDispatch()
  const [likesCount, setLikesCount] = useState(post?.reactions?.like)

  const onLike = () => {
    try {
      dispatch(updatePost({ id: post.id, body: post.body, userId: post.userId, date: new Date(), 
          reactions: { like: post.reactions.like + 1, share: post.reactions.share }}))
    } catch(err) {
      console.error('Failed to save the post', err)
    }

    setLikesCount(likesCount + 1)
  }

  const onShare = () => {

  }


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
              {post?.body}
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
            <Box onClick={onLike}>
              <IconButton aria-label="add to favorites"><ThumbUpOutlinedIcon /></IconButton>
              <CardActionLabels variant='p'>Like</CardActionLabels>
            </Box>
            <Box onClick={onShare}>
              <IconButton aria-label="share"><ArrowIcon /></IconButton>
              <CardActionLabels variant='p'>Share</CardActionLabels>
            </Box>
        </StyledCardActions>
    </StyledPost>
  )
}

export default Post