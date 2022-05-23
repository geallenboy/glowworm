import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { Icon } from '@iconify/react';
import { Divider, IconButton, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import ChatRoomAttachment from './ChatRoomAttachment';
import ChatRoomGroupParticipant from './ChatRoomGroupParticipant';
import ChatRoomOneParticipant from './ChatRoomOneParticipant';

const RootStyle = styled('div')(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  borderLeft: `solid 1px ${theme.palette.divider}`,
  transition: theme.transitions.create('width')
}));

const ToggleButtonStyle = styled('div')(({ theme }) => ({
  borderRight: 0,
  display: 'flex',
  overflow: 'hidden',
  position: 'absolute',
  alignItems: 'center',
  top: theme.spacing(1),
  left: theme.spacing(-4),
  width: theme.spacing(4),
  height: theme.spacing(4),
  justifyContent: 'center',
  boxShadow: theme.customShadows.z8,
  border: `solid 1px ${theme.palette.divider}`,
  borderTopLeftRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  borderBottomLeftRadius: theme.shape.borderRadius
}));

export default function ChatRoom({ conversation, participants, ...other }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [openSidebar, setOpenSidebar] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [selectUser, setSelectUser] = useState(null);
  const [showAttachment, setShowAttachment] = useState(true);
  const [showParticipants, setShowParticipants] = useState(true);
  const isGroup = participants.length > 1;

  useEffect(() => {
    if (isMobile) {
      return setOpenSidebar(false);
    }
    return setOpenSidebar(true);
  }, [isMobile]);

  return (
    <RootStyle
      sx={{
        ...(!openSidebar && {
          width: 0,
          '& > *': { overflow: 'hidden' }
        })
      }}
      {...other}
    >
      <ToggleButtonStyle>
        <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
          <Icon
            width={16}
            height={16}
            icon={openSidebar ? arrowIosForwardFill : arrowIosBackFill}
          />
        </IconButton>
      </ToggleButtonStyle>

      {isGroup ? (
        <ChatRoomGroupParticipant
          selectUserId={selectUser}
          participants={participants}
          isCollapse={showParticipants}
          onShowPopupUserInfo={(participantId) => setSelectUser(participantId)}
          onCollapse={() => setShowParticipants((prev) => !prev)}
        />
      ) : (
        <ChatRoomOneParticipant
          participants={participants}
          isCollapse={showInfo}
          onCollapse={() => setShowInfo((prev) => !prev)}
        />
      )}
      <Divider />

      <ChatRoomAttachment
        conversation={conversation}
        isCollapse={showAttachment}
        onCollapse={() => setShowAttachment((prev) => !prev)}
      />
    </RootStyle>
  );
}
