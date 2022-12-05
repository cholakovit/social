import {
  styled, Divider, Card, CardActions, Typography, Box, Avatar, CardHeader,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const SideBarBox = styled(Box)(({ theme }) => ({
  width: '246px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const SideBarCard = styled(Card)(({ theme }) => ({
  position: 'sticky',
  top: '110px',
  width: 246,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const SideBarCardHeader = styled(CardHeader)({
  fontSize: '16px',
});

export const SideBarAvatar = styled(Avatar)({
  width: '50px',
  height: '50px',
});

export const StyledEditIcon = styled(EditIcon)({
  fontSize: '14px',
  fill: '#9b9b9b',
  ':hover': {
    fill: '#262F56',
    cursor: 'pointer',
  },
});

export const TitleSideBarTypo = styled(Typography)({
  fontSize: '16px',
});

export const SubTitleSideBarTypo = styled(Typography)({
  fontSize: '14px',
});

export const SideBarStyledCardActions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
});

export const SideBarStats = styled(Typography)({
  textAlign: 'center',
  'div:first-of-type': {
    color: '#000',
    margin: '10px 0 0 0',
  },
  'div:nth-of-type(2)': {
    color: '#65676B',
    margin: '0 0 10px 0',
  },
});

export const SideBarVerticalDivider = styled(Divider)({
  margin: '0 35px',
});
