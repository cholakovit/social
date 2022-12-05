import { styled, Paper } from '@mui/material'


export const PostFormPaper = styled(Paper)({
    'form': {
        width: '100%',
        padding: '10px 0',
        margin: '0 0 20px 0'
    },
    'input': {
        padding: '20px 0px 10px 10px',
        width: '100%!important',
        ':focus': {
            color: '#FD7500!important'
        }
    },
    'label': {
        padding: '5px 40px',
        fontWeight: 'bold',
        ':focus': {
            color: '#FD7500!important'
        }
    }

})