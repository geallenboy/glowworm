import attach2Fill from '@iconify/icons-eva/attach-2-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import collapseFill from '@iconify/icons-eva/collapse-fill';
import expandFill from '@iconify/icons-eva/expand-fill';
import roundAddPhotoAlternate from '@iconify/icons-ic/round-add-photo-alternate';
import { Icon } from '@iconify/react';
import {
  Backdrop,
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Portal,
  Typography,
  useMediaQuery
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';

import { QuillEditor } from '@/components/editor';

const RootStyle = styled('div')(({ theme }: any) => ({
  right: 0,
  bottom: 0,
  zIndex: 1999,
  minHeight: 440,
  outline: 'none',
  display: 'flex',
  position: 'fixed',
  overflow: 'hidden',
  flexDirection: 'column',
  margin: theme.spacing(3),
  boxShadow: theme.customShadows.z20,
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor: theme.palette.background.paper
}));

const InputStyle = styled(Input)(({ theme }) => ({
  padding: theme.spacing(0.5, 3),
  borderBottom: `solid 1px ${theme.palette.divider}`
}));

export default function MailCompose({ isOpenCompose, onCloseCompose }: any) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [fullScreen, setFullScreen] = useState(false);
  const [message, setMessage] = useState<string>('');

  const handleChangeMessage = (value: string) => {
    setMessage(value);
  };

  const handleExitFullScreen = () => {
    setFullScreen(false);
  };

  const handleEnterFullScreen = () => {
    setFullScreen(true);
  };

  const handleClose = () => {
    onCloseCompose();
    setFullScreen(false);
  };

  if (!isOpenCompose) {
    return null;
  }

  return (
    <Portal>
      <Backdrop open={fullScreen || isMobile} sx={{ zIndex: 1998 }} />
      <RootStyle
        sx={{
          ...(fullScreen && {
            top: 0,
            left: 0,
            zIndex: 1999,
            margin: 'auto',
            width: {
              xs: `calc(100% - 24px)`,
              md: `calc(100% - 80px)`
            },
            height: {
              xs: `calc(100% - 24px)`,
              md: `calc(100% - 80px)`
            }
          })
        }}
      >
        <Box
          sx={{
            pl: 3,
            pr: 1,
            height: 60,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6">新建消息</Typography>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton onClick={fullScreen ? handleExitFullScreen : handleEnterFullScreen}>
            <Icon icon={fullScreen ? collapseFill : expandFill} width={20} height={20} />
          </IconButton>

          <IconButton onClick={handleClose}>
            <Icon icon={closeFill} width={20} height={20} />
          </IconButton>
        </Box>

        <Divider />

        <InputStyle disableUnderline placeholder="To" />

        <InputStyle disableUnderline placeholder="Subject" />

        <QuillEditor
          simple
          id="compose-mail"
          value={message}
          onChange={handleChangeMessage}
          placeholder="Type a message"
          sx={{
            borderColor: 'transparent',
            flexGrow: 1
          }}
        />

        <Divider />

        <Box sx={{ py: 2, px: 3, display: 'flex', alignItems: 'center' }}>
          <Button variant="contained">发送</Button>

          <IconButton size="small" sx={{ ml: 2, mr: 1 }}>
            <Icon icon={roundAddPhotoAlternate} width={24} height={24} />
          </IconButton>

          <IconButton size="small">
            <Icon icon={attach2Fill} width={24} height={24} />
          </IconButton>
        </Box>
      </RootStyle>
    </Portal>
  );
}
