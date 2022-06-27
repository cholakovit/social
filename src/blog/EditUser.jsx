import { Divider, TextField, Box } from "@mui/material"
import { StyledButton, PostFormPaper, PostFormButtonBox } from '../components/styles'
import { useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectUserById, getUserById, updateUser } from "./postsSlice"
import { useEffect } from "react"

const EditUser = () => {
    const dispatch = useDispatch()
    const { userId } = useParams()
    const [name, setName] = useState()
    const [position, setPosition] = useState()

    useEffect(() => {
        dispatch(selectUserById(Number(userId)))
    }, []);

    const user = useSelector(getUserById)

    useEffect(() => {
        setName(user?.name)
        setPosition(user?.position)
    }, [user]);

    const onSubmit = () => {
        try {
            dispatch(updateUser({ id: user.id, name: name, position: position, pic: user.pic, 
                reactions: { likes: user.reactions.likes, shares: user.reactions.shares }}))
          } catch(err) {
            console.error('Failed to save the post', err)
          }
    }

    return (
        <PostFormPaper sx={{ width: '100%' }}>
            <Box component="form" noValidate autoComplete="off">

                <Box>
                    <TextField id="standard-basic" label="Name" value={name}
                        variant="standard" sx={{ width: '100%' }} onChange={ (e) => setName(e.target.value) } />

                    <Divider />

                    <TextField id="standard-basic" label="Position" value={position}
                        variant="standard" sx={{ width: '100%' }} onChange={ (e) => setPosition(e.target.value) } />
                </Box>

                <PostFormButtonBox>
                    <StyledButton variant="contained" onClick={onSubmit}>Submit</StyledButton>
                </PostFormButtonBox>
            </Box>
        </PostFormPaper>
    )
}

export default EditUser


