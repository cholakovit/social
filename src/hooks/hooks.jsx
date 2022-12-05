import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Constants from '../constants';

const controller = new AbortController();
const { signal } = controller;

export function useOnSubmit(
  addNewPost = null,
  userId = null,
  postContent = null,
  updateUserReactions = null,
  canSave = null,
  setpostContent = null,
) {
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (canSave) {
      dispatch(
        addNewPost({
          userId,
          body: postContent,
          date: new Date(),
          reactions: { likes: 0 },
        }),
      );
      dispatch(updateUserReactions({ userId, reaction: 'posts' }));
    }
    setpostContent('');
  };

  return { onSubmit };
}

export function useEffectFetchingData(
  fetchPosts,
  status = null,
  loadMore = null,
) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts(loadMore, signal));
    }

    return () => {
      controller.abort();
    };
  }, [status, dispatch, loadMore]);
}

export function useEffectFetchById(selectById, postId = null) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectById(Number(postId), signal));

    return () => {
      controller.abort();
    };
  }, []);
}

export function useEffectUpdate(
  likeClicked = null,
  postId = null,
  postBody = null,
  postUserId = null,
  likesCount = null,
  likedThisPost = null,
  setLikedThisPost = null,
  updatePost = null,
  updateUserReactions = null,
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (likeClicked === 0) return;

    try {
      dispatch(
        updatePost({
          id: postId,
          body: postBody,
          userId: postUserId,
          date: new Date(),
          reactions: { likes: likesCount },
        }),
      );

      dispatch(
        updateUserReactions({
          userId: postUserId,
          reaction: 'likes',
          postId,
        }),
      );
    } catch (err) {
      console.error(Constants.FAILED_SAVE_POST_MSG, err);
    }

    if (likedThisPost === true) setLikedThisPost(false);
    if (likedThisPost === false) setLikedThisPost(true);
  }, [likeClicked]);
}
