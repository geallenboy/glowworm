import { Card, Container } from '@mui/material';
import { useEffect } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';
import { getContacts, getConversations } from '@/redux/slices/chat';
import { useDispatch } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { ChatSidebar, ChatWindow } from './modules';

export default function Chat() {
  const { themeStretch } = useSettings();
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page title={`聊天 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="聊天"
          links={[{ name: 'APP', href: PATH_DASHBOARD.root }, { name: '聊天' }]}
        />
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      </Container>
    </Page>
  );
}
