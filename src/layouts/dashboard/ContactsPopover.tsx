import peopleFill from '@iconify/icons-eva/people-fill';
import { Icon } from '@iconify/react';
import { Avatar, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
// material
import { alpha } from '@mui/material/styles';
import { useCallback, useEffect, useRef, useState } from 'react';

import { MIconButton } from '@/components/@material-extend';
import BadgeStatus from '@/components/BadgeStatus';
import MenuPopover from '@/components/MenuPopover';
// components
import Scrollbar from '@/components/Scrollbar';
// hooks
import useIsMountedRef from '@/hooks/useIsMountedRef';
// utils
import axios from '@/utils/axios';
import { fToNow } from '@/utils/formatTime';

// ----------------------------------------------------------------------

const ITEM_HEIGHT = 64;
const PADDING_ITEM = 2.5;

export default function ContactsPopover() {
  const anchorRef = useRef(null);
  const isMountedRef = useIsMountedRef();
  const [open, setOpen] = useState(false);
  const [contacts, setContacts] = useState([]);

  const getContacts = useCallback(async () => {
    try {
      const response = await axios.get('/api/chat/contacts');
      console.log(response, 4444);
      if (isMountedRef.current) {
        setContacts(response.data.data.contacts);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const _sx: any = { position: 'absolute', right: 1, bottom: 1 };
  return (
    <>
      <MIconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme: any) =>
              alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <Icon icon={peopleFill} width={20} height={20} />
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <Typography variant="h6" sx={{ p: PADDING_ITEM }}>
          Contacts <Typography component="span">({contacts.length})</Typography>
        </Typography>

        <Scrollbar sx={{ height: ITEM_HEIGHT * 8 }}>
          {contacts.map((contact) => {
            const { id, name, avatar, status, lastActivity } = contact;

            return (
              <ListItemButton
                disableGutters
                key={id}
                sx={{ px: PADDING_ITEM, height: ITEM_HEIGHT }}
              >
                <ListItemAvatar sx={{ position: 'relative' }}>
                  <Avatar src={avatar} />
                  <BadgeStatus status={status} sx={_sx} />
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ typography: 'subtitle2', mb: 0.25 }}
                  secondaryTypographyProps={{ typography: 'caption' }}
                  primary={name}
                  secondary={status === 'offline' && fToNow(lastActivity)}
                />
              </ListItemButton>
            );
          })}
        </Scrollbar>
      </MenuPopover>
    </>
  );
}
