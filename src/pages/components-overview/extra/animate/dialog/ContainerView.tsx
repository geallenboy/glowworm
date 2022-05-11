import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper
} from '@mui/material';

import { DialogAnimate } from '@/components/animate';

import getVariant from '../getVariant';

export default function ContainerView({ isOpen, onOpen, onClose, selectVariant, ...other }: any) {
  return (
    <Paper
      sx={{
        height: 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.neutral'
      }}
      {...other}
    >
      <Button variant="contained" onClick={onOpen}>
        Click Me!
      </Button>
      <DialogAnimate open={isOpen} onClose={onClose} animate={getVariant(selectVariant)}>
        <DialogTitle>Use Googlelocation service</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onClose}>
            Disagree
          </Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </DialogAnimate>
    </Paper>
  );
}
