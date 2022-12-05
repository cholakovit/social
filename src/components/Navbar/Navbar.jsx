// Styles
import {
  StyledToolbar, UserBox, LogoBox, StyledAppBar,
} from './Navbar.styles';
import { StyledAvatar } from '../../assets/styles/main.styles';

// Images
import Logo from '../../assets/img/logo.svg';
import primaryUserPic from '../../assets/img/Ivaylo_Bachvarov_1.jpg';

function Navbar() {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <LogoBox variant="div" href="/">
          <img src={Logo} alt="Social logo" />
        </LogoBox>
        <UserBox>
          <StyledAvatar src={primaryUserPic} />
        </UserBox>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;
