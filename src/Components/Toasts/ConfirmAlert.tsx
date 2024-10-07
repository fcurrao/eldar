 
import {ConfirmAlert} from '../../Interfaces/ConfirmAlert'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';


const ConfirmDeleteDialog: React.FC<ConfirmAlert> = ({ open, onClose, onConfirm,titleToConf }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmar</DialogTitle>
      <DialogContent>
        <Typography>¿{titleToConf}?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
