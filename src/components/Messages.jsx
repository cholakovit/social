import { Alert } from '@mui/material'

const Messages = ({msg}) => {
    return (
        <>
            {msg.length > 0 && <Alert severity="success">{msg}</Alert> }
        </>
    )
}

export default Messages