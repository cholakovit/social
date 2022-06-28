import { StyledToolbar, UserBox, LogoBox, StyledAppBar, StyledAvatar } from './styles'

const Navbar = () => {
  return (
    <StyledAppBar>
        <StyledToolbar>
            <LogoBox variant="div" href='/'>
                <img src="/img/logo.svg" alt='Hack Soft logo' />
            </LogoBox>
            <UserBox>
                <StyledAvatar src="/img/Ivaylo_Bachvarov_1.jpg" />             
            </UserBox>
        </StyledToolbar>
    </StyledAppBar>
  )
}

export default Navbar