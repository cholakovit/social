// MUI Components
import {
  CardHeader, IconButton, Divider, CardContent,
} from '@mui/material';

// Icons
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

// Styles
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  StyledCardActions,
  OrangeLike,
  ArrowIcon,
  StyledPost,
  TimePost,
  CountLikes,
  CardTypography,
  OrangeLikeCountContainer,
  CardActionLabels,
  StyledCardActionsButton,
  StyledCardActionsButtonDisabled,
} from './Post.styles';
import { SeeMore, StyledAvatar } from '../../assets/styles/main.styles';

// Components
import TimeAgo from '../TimeAgo/TimeAgo';

// Redux
import { updatePost } from '../../store/postsSlice';
import { updateUserReactions, getUserById } from '../../store/usersSlice';

// Custom Hooks
import { useEffectUpdate } from '../../hooks/hooks';

// Constants
import * as Constants from '../../constants';

function Post({ post, flag }) {
  const user = useSelector(getUserById);

  const [likeClicked, setLikeClicked] = useState(0);
  const [likesCount, setLikesCount] = useState(post?.reactions.likes);
  const [likedThisPost, setLikedThisPost] = useState(
    user?.likedPosts?.some((userLikedPost) => userLikedPost === post?.id),
  );

  useEffectUpdate(
    likeClicked,
    post.id,
    post.body,
    post.userId,
    likesCount,
    likedThisPost,
    setLikedThisPost,
    updatePost,
    updateUserReactions,
  );

  return (
    <StyledPost>
      <CardHeader
        avatar={(
          <StyledAvatar
            src={`${import.meta.env.VITE_SOCIAL_LOCAL}/src/assets/img/${
              post?.pic
            }`}
            alt={post?.name}
          />
        )}
        action={(
          <TimePost variant="span">
            {post?.date ? <TimeAgo timestamp={post?.date} /> : ''}
          </TimePost>
        )}
        title={post?.name}
        subheader={post?.position}
      />
      <CardContent>
        <CardTypography variant="body2">
          {flag ? post?.body : `${post?.body.substring(0, 100)}...`}
        </CardTypography>
        {!flag && (
        <SeeMore href={`${post.id}`}>
          ...
          {Constants.SEE_MORE}
        </SeeMore>
        )}
      </CardContent>
      {likesCount > 0 && (
        <OrangeLikeCountContainer>
          <OrangeLike />
          <CountLikes>{likesCount}</CountLikes>
        </OrangeLikeCountContainer>
      )}
      <Divider />
      <StyledCardActions>
        {likeClicked !== 1 && Boolean(likedThisPost) ? (
          <StyledCardActionsButtonDisabled
            onClick={() => {
              setLikeClicked(1), setLikesCount((likesCount) => (likesCount - 1));
            }}
          >
            <IconButton aria-label="like">
              <ThumbUpOutlinedIcon />
            </IconButton>
            <CardActionLabels variant="p">{Constants.LIKED}</CardActionLabels>
          </StyledCardActionsButtonDisabled>
        ) : (
          <StyledCardActionsButton
            onClick={() => {
              setLikeClicked(2), setLikesCount((likesCount) => (likesCount + 1));
            }}
          >
            <IconButton aria-label="like">
              <ThumbUpOutlinedIcon />
            </IconButton>
            <CardActionLabels variant="p">{Constants.LIKE}</CardActionLabels>
          </StyledCardActionsButton>
        )}
        <StyledCardActionsButton>
          <IconButton aria-label="share">
            <ArrowIcon />
          </IconButton>
          <CardActionLabels variant="p">{Constants.SHARE}</CardActionLabels>
        </StyledCardActionsButton>
      </StyledCardActions>
    </StyledPost>
  );
}

export default Post;
