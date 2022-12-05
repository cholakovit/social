// MUI Elements
import Alert from '@mui/material/Alert';

function AlertBox({ alert, type }) {
  return <Alert severity={type}>{alert}</Alert>;
}

export default AlertBox;
