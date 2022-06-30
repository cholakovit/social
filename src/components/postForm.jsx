import { Box, TextField } from "@mui/material"
import { StyledButton, PostFormPaper, PostFormButtonBox } from './styles'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewPost } from "../blog/postsSlice"
import { updateUserReactions } from '../blog/usersSlice'

const PostForm = () => {
    const dispatch = useDispatch()
    const [postContent, setpostContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const canSave = [postContent].every(Boolean)
    let userId = 1
  
    const onSubmit = async () => {
      if (canSave) {
        try {
          setAddRequestStatus('pending')
          dispatch(addNewPost({ userId: userId, body: postContent, date: new Date(), reactions: { likes: 0 } }))

          dispatch(updateUserReactions({ userId: userId, reaction: 'posts' }))

          setpostContent('')

        } catch (err) {
            console.error('Failed to save the post', err)
        } finally {
            setAddRequestStatus('idle')
        }
      }
    }
  
    return (
      <PostFormPaper>
          <Box component="form" noValidate autoComplete="off">
              <Box>
                <TextField id="standard-basic" label="Share something to the community..." value={postContent}
                  variant="standard" sx={{ width: '100%' }} onChange={ (e) => { setpostContent(e.target.value) } } />
              </Box>
  
              <PostFormButtonBox>
                  <StyledButton variant="contained" onClick={onSubmit} disabled={!canSave}>Post</StyledButton>
              </PostFormButtonBox>
          </Box>
      </PostFormPaper>
    )
  }
  
  export default PostForm