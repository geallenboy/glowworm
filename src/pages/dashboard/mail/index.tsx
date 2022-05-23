import { Card, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import useSettings from '@/hooks/useSettings';
import { getLabels } from '@/redux/slices/mail';
import { useDispatch } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { MailCompose, MailDetails, MailList, MailSidebar } from './modules';

export default function Mail() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { mailId } = useParams();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openCompose, setOpenCompose] = useState(false);

  useEffect(() => {
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Page title="Mail | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Mail"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root
            },
            { name: 'Mail' }
          ]}
        />
        <Card sx={{ height: { md: '72vh' }, display: { md: 'flex' } }}>
          <MailSidebar
            isOpenSidebar={openSidebar}
            onCloseSidebar={() => setOpenSidebar(false)}
            onOpenCompose={() => setOpenCompose(true)}
          />
          {mailId ? <MailDetails /> : <MailList onOpenSidebar={() => setOpenSidebar(true)} />}
          <MailCompose isOpenCompose={openCompose} onCloseCompose={() => setOpenCompose(false)} />
        </Card>
      </Container>
    </Page>
  );
}
