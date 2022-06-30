import { styled, Toolbar, Box, AppBar, CardActions, Avatar, Button, CardHeader, Card, Typography, 
    Divider, Stack, Paper, Link } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import SvgIcon from '@mui/material/SvgIcon'
import EditIcon from '@mui/icons-material/Edit'

export const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

export const UserBox = styled(Box)({
    display: 'flex',
    gap: '10px',
    justifyContent: 'right'
})

export const LogoBox = styled(Link)({
    margin: '10px 30px',
    '& img': {
        width: '248px',
        height: '64px'
    }
})

export const StyledAppBar = styled(AppBar)({
    height: '70px', 
    position: 'fixed', 
    wdith: '100%', 
    top: '0', 
    left: '0', 
    backgroundColor: '#fff'
})

export const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export const StyledCardActions = styled(CardActions)({
    display: 'flex',
    justifyContent: 'space-between'
})

export const StyledCardActionsButton = styled(Box)({
    '&:hover span, &:hover button, &:hover svg': {
        color: '#FD7500',
        fill: '#FD7500',
        filter: 'invert(59%) sepia(89%) saturate(4230%) hue-rotate(3deg) brightness(104%) contrast(104%)'
    }
})

export const StyledCardActionsButtonDisabled = styled(Box)({
    '&:hover span, &:hover button, &:hover svg': {
        color: '#3e3e3e',
        fill: '#3e3e3e',
        filter: 'invert(23%) sepia(0%) saturate(3589%) hue-rotate(210deg) brightness(88%) contrast(86%)',
        cursor: 'not-allowed'
    }
})

export const StyledAvatar = styled(Avatar)({
    width: '36px', 
    height: '36px'
})

export function ArrowIcon() {
    return (
      <SvgIcon width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2412 0.575706L20.846 8.03323C21.1911 8.33229 21.1911 8.86771 20.846 9.16677L12.2412 16.6243C11.7555 17.0452 11 
            16.7002 11 16.0575V12.15C11 11.7358 10.6638 11.399 10.2496 11.4078C4.39732 11.5334 2.98456 13.1506 1.733 15.1185C1.34622 
            15.7267 0.540724 15.4703 0.624151 14.7543C1.15924 10.1626 3.55254 6.09601 10.2497 5.81543C10.6636 5.79809 11 5.46421 11 
            5.05V1.14247C11 0.499778 11.7555 0.154786 12.2412 0.575706Z" fill="#65676B"/>
      </SvgIcon>
    );
}

export const StyledButton = styled(Button)({
    backgroundColor: '#FD7500',
    marginRight: '20px',
    '&:hover': {
        backgroundColor: '#e36a00',
        color: '#fff',
    }
})

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

export const SideBarBox = styled(Box)(({ theme }) => ({
    width: '246px', 
    position: 'relative',
    [theme.breakpoints.down("sm")]: {
        width: '100%',
    }
}))

export const FeedBox = styled(Box)(({ theme }) => ({
    width: '602px', 
    marginBottom: '20px',
    [theme.breakpoints.down("sm")]: {
        width: '100%'
    }
}))

export const SideBarCard = styled(Card)(({ theme }) => ({
    position: 'sticky', 
    top: '110px', 
    width: 246,
    [theme.breakpoints.down("sm")]: {
        width: '100%'
    }
}))

export const SideBarCardHeader = styled(CardHeader)({
    fontSize: '16px'
})

export const StyledEditIcon = styled(EditIcon)({
    fontSize: '14px',
    fill: '#9b9b9b',
    ':hover': {
        fill: '#262F56',
        cursor: 'pointer'
    }
})

export const SideBarAvatar = styled(Avatar)({
    width: '50px', 
    height: '50px'
})

export const TitleSideBarTypo = styled(Typography)({
    fontSize: '16px'
})

export const SubTitleSideBarTypo = styled(Typography)({
    fontSize: '14px'
})

export const SideBarStyledCardActions = styled(CardActions)({
    display: 'flex',
    justifyContent: 'space-between',
    justifyContent: 'center',
    padding: '0'
})

export const SideBarStats = styled(Typography)({
    textAlign: 'center',
    'div:first-child': {
        color: '#000',
        margin: '10px 0 0 0'
    },
    'div:nth-child(2)': {
        color: '#65676B',
        margin: '0 0 10px 0'
    }
})

export const SideBarVerticalDivider = styled(Divider)({
    margin: '0 35px',
})

export const MainBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#F6F7F9',
    backgroundImage:'url(../img/hack_soft_orange_asset_1.svg), url(../img/hack_soft_gray_asset_1.svg)',
    backgroundPosition: 'top right, bottom left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50% auto, 75% auto',
    paddingTop: '70px',
    [theme.breakpoints.down("sm")]: {
        backgroundSize: '100% auto, 250% auto',
        backgroundPosition: 'top center, bottom center',
    }
}))

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

export const PostFormButtonBox = styled(Box)({
    display: "flex", 
    justifyContent: "flex-end", 
    alignItems: "flex-end",
    'button': {
        margin: '10px 10px 10px 0',

    }
})

export const StyledPost = styled(Card)({
    margin: '0 0 20px 0',
})

export const CardTypography = styled(Typography)({
    color: '#212529',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '22px'
})

export const TimePost = styled(Typography)({
    color: '#65676B'
})

export const SeeMore = styled(Link)({
    color: '#65676B',
    display: 'flex',
    justifyContent: 'right',
    textDecoration: 'none',
    ':hover': {
        color: '#212529'
    }
})

export const OrangeLikeCountContainer = styled(Box)({
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left'
})

export const OrangeLike = styled(ThumbUpOutlinedIcon)({
    backgroundColor: '#FD7500', 
    borderRadius: '15px',
    color: '#fff',
    fontSize: '13px',
    padding: '7px',
    margin: '10px',
})

export const CountLikes = styled(Typography)({
    color: '#65676B',
    width: '30px',
    margin: '13px 0 20px 5px',
})

export const CardActionLabels = styled(Typography)({
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '21px',
    color: '#65676B',
    cursor: 'pointer'
})

export const StackWrapper  = styled(Stack)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
})

export const StyledFooter  = styled(Paper)({
    padding: '60px'
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