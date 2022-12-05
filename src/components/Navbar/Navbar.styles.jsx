import {
  styled, AppBar, Toolbar, Link, Box,
} from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  height: '70px',
  position: 'fixed',
  wdith: '100%',
  top: '0',
  left: '0',
  backgroundColor: '#fff',
});

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const LogoBox = styled(Link)({
  margin: '10px 30px',
  '& img': {
    width: '248px',
    height: '64px',
  },
});

export const UserBox = styled(Box)({
  display: 'flex',
  gap: '10px',
  justifyContent: 'right',
});
