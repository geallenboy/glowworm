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

export default function ContainerView({ isOpen, onOpen, onClose, selectVariant, ...other }) {
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
        点我!
      </Button>
      <DialogAnimate open={isOpen} onClose={onClose} animate={getVariant(selectVariant)}>
        <DialogTitle>使用Googlelocation服务</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            让谷歌帮助应用程序确定位置。这意味着将匿名位置数据发送到 谷歌，即使没有应用程序在运行。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onClose}>
            不同意
          </Button>
          <Button onClick={onClose} autoFocus>
            同意
          </Button>
        </DialogActions>
      </DialogAnimate>
    </Paper>
  );
}
