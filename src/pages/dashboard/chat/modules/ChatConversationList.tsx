import { List } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { PATH_DASHBOARD } from '@/routes/paths';

import ChatConversationItem from './ChatConversationItem';

export default function ChatConversationList({
  conversations,
  isOpenSidebar,
  activeConversationId,
  ...other
}: any) {
  const navigate = useNavigate();

  const handleSelectConversation = (conversationId: any) => {
    let conversationKey = '';
    const conversation = conversations.byId[conversationId];
    if (conversation.type === 'GROUP') {
      conversationKey = conversation.id;
    } else {
      const otherParticipant = conversation.participants.find(
        (participant: any) => participant.id !== '8864c717-587d-472a-929a-8e5f298024da-0'
      );
      conversationKey = otherParticipant.username;
    }
    navigate(`${PATH_DASHBOARD.chat.root}/${conversationKey}`);
  };

  return (
    <List disablePadding {...other}>
      {conversations.allIds.map((conversationId: any) => (
        <ChatConversationItem
          key={conversationId}
          isOpenSidebar={isOpenSidebar}
          conversation={conversations.byId[conversationId]}
          isSelected={activeConversationId === conversationId}
          onSelectConversation={() => handleSelectConversation(conversationId)}
        />
      ))}
    </List>
  );
}
