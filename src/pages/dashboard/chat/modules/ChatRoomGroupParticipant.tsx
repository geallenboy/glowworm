import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { Icon } from '@iconify/react';
import {
  Avatar,
  Box,
  Button,
  Collapse,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';

import BadgeStatus from '@/components/BadgeStatus';
import Scrollbar from '@/components/Scrollbar';

import ChatRoomPopup from './ChatRoomPopup';

const HEIGHT = 64;

const CollapseButtonStyle = styled(Button)(({ theme }) => ({
  ...theme.typography.overline,
  height: 40,
  borderRadius: 0,
  padding: theme.spacing(1, 2),
  justifyContent: 'space-between',
  color: theme.palette.text.disabled
}));

function Participant({ participant, isOpen, onClosePopup, onShowPopup }) {
  const { name, avatar, status, position } = participant;

  return (
    <>
      <ListItemButton disableGutters onClick={onShowPopup} sx={{ height: HEIGHT, px: 2.5 }}>
        <ListItemAvatar>
          <Box sx={{ position: 'relative', width: 40, height: 40 }}>
            <Avatar alt={name} src={avatar} />
            <BadgeStatus status={status} sx={{ right: 0, bottom: 0, position: 'absolute' }} />
          </Box>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={position}
          primaryTypographyProps={{ variant: 'subtitle2', noWrap: true }}
          secondaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ChatRoomPopup participant={participant} isOpen={isOpen} onClose={onClosePopup} />
    </>
  );
}

export default function ChatRoomGroupParticipant({
  participants,
  selectUserId,
  onShowPopupUserInfo,
  isCollapse,
  onCollapse,
  ...other
}) {
  return (
    <Box {...other}>
      <CollapseButtonStyle
        fullWidth
        disableRipple
        color="inherit"
        onClick={onCollapse}
        endIcon={
          <Icon
            icon={isCollapse ? arrowIosDownwardFill : arrowIosForwardFill}
            width={16}
            height={16}
          />
        }
      >
        In room ({participants.length})
      </CollapseButtonStyle>

      <Box sx={{ height: isCollapse ? HEIGHT * 4 : 0 }}>
        <Scrollbar>
          <Collapse in={isCollapse}>
            <List disablePadding>
              {participants.map((participant) => (
                <Participant
                  key={participant.id}
                  participant={participant}
                  isOpen={selectUserId === participant.id}
                  onShowPopup={() => onShowPopupUserInfo(participant.id)}
                  onClosePopup={() => onShowPopupUserInfo(null)}
                />
              ))}
            </List>
          </Collapse>
        </Scrollbar>
      </Box>
    </Box>
  );
}
