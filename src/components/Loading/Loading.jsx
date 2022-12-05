// MUI Components
import { Box } from '@mui/material';

// Images
import LoadingImg from '../../assets/img/loading.gif';

function Loading() {
  return (
    <Box><img src={LoadingImg} alt="loading" /></Box>
  );
}

export default Loading;
