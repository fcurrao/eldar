import { useEffect, useState } from 'react'; 
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {NotificationAlertGeneralProps} from '../../Interfaces/NotificationType'

const NotificationAlertGeneral: React.FC<NotificationAlertGeneralProps> =  ({ condition, message, severity }) => { 
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (condition) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [condition]);

  const handleClose = (event?, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose} 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationAlertGeneral;
