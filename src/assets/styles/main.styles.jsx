import { styled, Box, Avatar, Button, CardHeader, Stack, Paper, Link } from '@mui/material'

export const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export const StyledStack = styled(Stack)(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: '20px', 
    width: '100%', 
    maxWidth: '838px', 
    margin: '70px auto',
    [theme.breakpoints.down("sm")]: {
            padding: '0 10px',
            boxSize: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
    }
}))

export const FeedBox = styled(Box)(({ theme }) => ({
    width: '602px', 
    marginBottom: '20px',
    [theme.breakpoints.down("sm")]: {
        width: '100%'
    }
}))

export const MainBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#F6F7F9',
    backgroundImage:'url(./src/assets/img/hack_soft_orange_asset_1.svg), url(./src/assets/img/hack_soft_gray_asset_1.svg)',
    backgroundPosition: 'top right, bottom left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50% auto, 75% auto',
    paddingTop: '70px',
    [theme.breakpoints.down("sm")]: {
        backgroundSize: '100% auto, 250% auto',
        backgroundPosition: 'top center, bottom center',
    }
}))

export const StackWrapper  = styled(Stack)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
})

export const EditFormUserPaper = styled(Paper)({
    'form': {
        width: '93%',
        padding: '20px',
        margin: '0 0 20px 0'
    },
    'input': {
        padding: '20px 0px 10px 10px',
        width: '100%!important',
        margin: '10px 0 ',
        ':focus': {
            color: '#FD7500!important'
        }
    },
    'label': {
        fontWeight: 'bold',
        ':focus': {
            color: '#FD7500!important'
        }
    }

})

// Navbar, Post components
export const StyledAvatar = styled(Avatar)({
    width: '36px', 
    height: '36px'
})

// Post, Sidebar components
export const SeeMore = styled(Link)({
    color: '#65676B',
    display: 'flex',
    justifyContent: 'right',
    textDecoration: 'none',
    ':hover': {
        color: '#212529'
    }
})

// Post, Sidebar components
export const SideBarCardHeader = styled(CardHeader)({
    fontSize: '16px'
})

// PostForm, EditUser components
export const PostFormButtonBox = styled(Box)({
    display: "flex", 
    justifyContent: "flex-end", 
    alignItems: "flex-end",
    'button': {
        margin: '10px 10px 10px 0',

    }
})

// PostForm, EditUser components
export const StyledButton = styled(Button)({
    backgroundColor: '#FD7500',
    marginRight: '20px',
    '&:hover': {
        backgroundColor: '#e36a00',
        color: '#fff',
    }
})