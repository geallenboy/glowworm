import { Card, Container } from '@mui/material';
import { useEffect } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import useSettings from '@/hooks/useSettings';
import { getContacts, getConversations } from '@/redux/slices/chat';
import { useDispatch } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { ChatSidebar, ChatWindow } from './modules';

export default function Chat() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page title="Chat | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Chat"
          links={[{ name: 'Dashboard', href: PATH_DASHBOARD.root }, { name: 'Chat' }]}
        />
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      </Container>
    </Page>
  );
}
