// Styles
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FeedBox,
  StackWrapper,
  StyledButton,
} from '../assets/styles/main.styles';

// Components
import Post from '../components/Post/Post';

// Redux
import { selectPostById, getPostById } from '../store/postsSlice';

// Dependencies

// Custom Hook
import { useEffectFetchById } from '../hooks/hooks';

function ShowPost() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const flag = true;

  useEffectFetchById(selectPostById, postId);

  const post = useSelector(getPostById);

  return (
    <FeedBox>
      {post && <Post post={post} flag={flag} />}

      <StackWrapper>
        <StyledButton variant="contained" onClick={() => navigate(-1)}>
          Back
        </StyledButton>
      </StackWrapper>
    </FeedBox>
  );
}

export default ShowPost;
