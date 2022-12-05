// MUI Components
import { Typography } from '@mui/material';

// Styles
import { StyledFooter } from './Footer.styles';

function Footer() {
  return (
    <StyledFooter>
      <Typography variant="div">
        Copyright 2022 Social Ltd. All rights reserved. No part of this site may be
        reproduced without our written permission.
      </Typography>
    </StyledFooter>
  );
}

export default Footer;
