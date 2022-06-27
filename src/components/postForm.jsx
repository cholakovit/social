import { Box, TextField } from "@mui/material"
import { StyledButton, PostFormPaper, PostFormButtonBox } from './styles'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewPost } from "../blog/postsSlice"

const PostForm = () => {
    const dispatch = useDispatch()
    const [postContent, setpostContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
  
    let userId = 1
  
    const onSubmit = async () => {
      console.log('onSubmit', postContent)

      try {
        setAddRequestStatus('pending')
        dispatch(addNewPost({ userId, body: postContent, date: new Date(), reactions: { likes: 0, shares: 0 } }))

        setpostContent('')

      } catch (err) {
          console.error('Failed to save the post', err)
      } finally {
          setAddRequestStatus('idle')
      }

    }
  
    return (
      <PostFormPaper>
          <Box component="form" noValidate autoComplete="off">
  
              <Box>
                <TextField id="standard-basic" label="Share something to the community..." 
                  variant="standard" sx={{ width: '100%' }} onChange={ (e) => { setpostContent(e.target.value) } } />
              </Box>
  
              <PostFormButtonBox>
                  <StyledButton variant="contained" onClick={onSubmit}>Post</StyledButton>
              </PostFormButtonBox>
          </Box>
      </PostFormPaper>
    )
  }
  
  export default PostForm