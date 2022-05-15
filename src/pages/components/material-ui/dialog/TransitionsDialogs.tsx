import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@mui/material';
import { forwardRef, useState } from 'react';

const Transition: any = forwardRef((props: any, ref: any) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function TransitionsDialogs() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="success" onClick={handleClickOpen}>
        Transitions Dialogs
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Use Google location service</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Disagree
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
