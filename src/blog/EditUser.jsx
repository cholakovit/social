import { Divider, TextField, Box } from "@mui/material"
import { StyledButton, EditFormUserPaper, PostFormButtonBox } from '../components/styles'
import { useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectUserById, getUserById, updateUser, getUserMessages } from "./usersSlice"
import { useEffect } from "react"
import Messages from '../components/Messages'

const EditUser = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { userId } = useParams()
    const [name, setName] = useState()
    const [position, setPosition] = useState()
    const messages = useSelector(getUserMessages)
    const canSave = [name, position].every(Boolean)
    useEffect(() => {
        dispatch(selectUserById(Number(userId)))
    }, [])

    const user = useSelector(getUserById)

    useEffect(() => {
        setName(user?.name)
        setPosition(user?.position)
    }, [user])

    const onSubmit = () => {
        if (canSave) {
            try {
                dispatch(updateUser({ id: user.id, name: name, position: position, pic: user.pic, 
                    reactions: { likes: user.reactions.likes, posts: user.reactions.posts }}))
            } catch(err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    return (
        <EditFormUserPaper sx={{ width: '100%' }}>
            <Box component="form" noValidate autoComplete="off">

                <Box>
                    <TextField id="standard-basic" label="Name" value={name}
                        variant="standard" sx={{ width: '100%' }} onChange={ (e) => setName(e.target.value) } />

                    <Divider />

                    <TextField id="standard-basic" label="Position" value={position}
                        variant="standard" sx={{ width: '100%' }} onChange={ (e) => setPosition(e.target.value) } />
                </Box>

                <PostFormButtonBox>
                    <StyledButton variant="contained" onClick={ () => navigate(-1) }>Back</StyledButton>
                    <StyledButton variant="contained" onClick={onSubmit} disabled={!canSave}>Submit</StyledButton>
                </PostFormButtonBox>
                <Messages msg={messages} />
            </Box>
        </EditFormUserPaper>
    )
}

export default EditUser


