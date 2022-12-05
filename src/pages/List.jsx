/* eslint-disable no-sequences */
// Styles
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  StackWrapper,
  FeedBox,
  StyledButton,
} from '../assets/styles/main.styles';

// Components
import PostForm from '../components/PostForm/PostForm';
import Post from '../components/Post/Post';
import AlertBox from '../components/Alert/AlertBox';

// Redux
import {
  getPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from '../store/postsSlice';

// Hooks

// Dependencies

// Custom Hooks
import { useEffectFetchingData } from '../hooks/hooks';

// Constants
import * as Constants from '../constants';
import Loading from '../components/Loading/Loading';

function List() {
  const error = useSelector(getPostsError);
  const [loadMore, setLoadMore] = useState(Constants.ROWS_PER_PAGE);
  const [status, setStatus] = useState(useSelector(getPostsStatus));

  const posts = useSelector(getPosts);

  useEffectFetchingData(fetchPosts, status, loadMore);

  return (
    <FeedBox>
      <PostForm />
      {error ? (
        <AlertBox alert={error} type={Constants.ERROR} />
      ) : !posts || status === Constants.LOADING ? (
        <Loading />
      ) : (
        posts?.map((post, index) => (
          <ErrorBoundary
            FallbackComponent={() => (
              <AlertBox
                alert={Constants.POST_PROBLEM_MSG}
                type={Constants.ERROR}
              />
            )}
            key={index}
          >
            <Post post={post} key={post.id} />
          </ErrorBoundary>
        ))
      )}

      <StackWrapper>
        <StyledButton
          variant="contained"
          onClick={() => {
            setLoadMore((loadMore) => (loadMore + 3)),
            setStatus(Constants.IDLE);
          }}
        >
          {Constants.LOADING_MORE_MSG}
        </StyledButton>
      </StackWrapper>
    </FeedBox>
  );
}

export default List;
