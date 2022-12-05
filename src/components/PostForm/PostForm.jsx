// MUI Components
import { Box, TextField } from '@mui/material';

// Styles
import { useState } from 'react';
import { PostFormPaper } from './PostForm.styles';
import {
  PostFormButtonBox,
  StyledButton,
} from '../../assets/styles/main.styles';

// Components

// Redux
import { addNewPost } from '../../store/postsSlice';
import { updateUserReactions } from '../../store/usersSlice';

// Custom Hooks
import { useOnSubmit } from '../../hooks/hooks';

// Constants
import * as Constants from '../../constants';

function PostForm() {
  const [postContent, setpostContent] = useState('');
  const canSave = [postContent].every(Boolean);
  const userId = 1;

  const { onSubmit } = useOnSubmit(
    addNewPost,
    userId,
    postContent,
    updateUserReactions,
    canSave,
    setpostContent,
  );

  return (
    <PostFormPaper>
      <Box component="form" noValidate autoComplete="off">
        <Box>
          <TextField
            id="standard-basic"
            label={Constants.SHARE_SOMETHING_MSG}
            value={postContent}
            variant="standard"
            sx={{ width: '100%' }}
            onChange={(e) => {
              setpostContent(() => e.target.value);
            }}
          />
        </Box>

        <PostFormButtonBox>
          <StyledButton
            variant="contained"
            onClick={onSubmit}
            disabled={!canSave}
          >
            {Constants.POST}
          </StyledButton>
        </PostFormButtonBox>
      </Box>
    </PostFormPaper>
  );
}

export default PostForm;
