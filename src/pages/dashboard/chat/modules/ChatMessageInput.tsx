import attach2Fill from '@iconify/icons-eva/attach-2-fill';
import micFill from '@iconify/icons-eva/mic-fill';
import roundAddPhotoAlternate from '@iconify/icons-ic/round-add-photo-alternate';
import roundSend from '@iconify/icons-ic/round-send';
import { Icon } from '@iconify/react';
import { Divider, IconButton, Input, InputAdornment, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import EmojiPicker from '@/components/EmojiPicker';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: 56,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  paddingLeft: theme.spacing(2)
}));

export default function ChatMessageInput({ disabled, conversationId, onSend, ...other }: any) {
  const fileInputRef: any = useRef(null);
  const [message, setMessage] = useState('');

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleChangeMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const handleKeyUp = (event: any) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const handleSend = () => {
    if (!message) {
      return '';
    }
    if (onSend) {
      onSend({
        conversationId,
        messageId: uuidv4(),
        message,
        contentType: 'text',
        attachments: [],
        createdAt: new Date(),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      });
    }
    return setMessage('');
  };

  return (
    <RootStyle {...other}>
      <Input
        disabled={disabled}
        fullWidth
        value={message}
        disableUnderline
        onKeyUp={handleKeyUp}
        onChange={handleChangeMessage}
        placeholder="键入消息"
        startAdornment={
          <InputAdornment position="start">
            <EmojiPicker disabled={disabled} value={message} setValue={setMessage} />
          </InputAdornment>
        }
        endAdornment={
          <Stack direction="row" spacing={0.5} mr={1.5}>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <Icon icon={roundAddPhotoAlternate} width={24} height={24} />
            </IconButton>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <Icon icon={attach2Fill} width={24} height={24} />
            </IconButton>
            <IconButton disabled={disabled} size="small">
              <Icon icon={micFill} width={24} height={24} />
            </IconButton>
          </Stack>
        }
        sx={{ height: '100%' }}
      />

      <Divider orientation="vertical" flexItem />

      <IconButton color="primary" disabled={!message} onClick={handleSend} sx={{ mx: 1 }}>
        <Icon icon={roundSend} width={24} height={24} />
      </IconButton>

      <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
    </RootStyle>
  );
}
