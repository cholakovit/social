// MUI Components
import { Alert } from '@mui/material';

function Messages({ msg }) {
  return (
    <div>
      {msg.length > 0 && <Alert severity="success">{msg}</Alert> }
    </div>
  );
}

export default Messages;
