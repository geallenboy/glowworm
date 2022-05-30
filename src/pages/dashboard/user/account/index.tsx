import bellFill from '@iconify/icons-eva/bell-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import roundAccountBox from '@iconify/icons-ic/round-account-box';
import roundReceipt from '@iconify/icons-ic/round-receipt';
import roundVpnKey from '@iconify/icons-ic/round-vpn-key';
import { Icon } from '@iconify/react';
import { Box, Container, Stack, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';
import {
  getAddressBook,
  getCards,
  getInvoices,
  getNotifications,
  getProfile
} from '@/redux/slices/user';
import { useDispatch } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { Billing, ChangePassword, General, Notifications, SocialLinks } from './modules';

export default function Account() {
  const { themeStretch } = useSettings();
  const [currentTab, setCurrentTab] = useState('整体');
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getAddressBook());
    dispatch(getInvoices());
    dispatch(getNotifications());
    dispatch(getProfile());
  }, [dispatch]);

  const ACCOUNT_TABS = [
    {
      value: '整体',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <General />
    },
    {
      value: '账单',
      icon: <Icon icon={roundReceipt} width={20} height={20} />,
      component: <Billing />
    },
    {
      value: '通知',
      icon: <Icon icon={bellFill} width={20} height={20} />,
      component: <Notifications />
    },
    {
      value: '社交链接',
      icon: <Icon icon={shareFill} width={20} height={20} />,
      component: <SocialLinks />
    },
    {
      value: '更改密码',
      icon: <Icon icon={roundVpnKey} width={20} height={20} />,
      component: <ChangePassword />
    }
  ];

  const handleChangeTab = (event: any, newValue: any) => {
    setCurrentTab(newValue);
  };

  return (
    <Page title={`账户设置 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="账户设置"
          links={[
            { name: '管理', href: PATH_DASHBOARD.root },
            { name: '用户', href: PATH_DASHBOARD.user.root },
            { name: '账户设置' }
          ]}
        />

        <Stack spacing={5}>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChangeTab}
          >
            {ACCOUNT_TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                label={tab.value}
                icon={tab.icon}
                value={tab.value}
              />
            ))}
          </Tabs>

          {ACCOUNT_TABS.map((tab) => {
            const isMatched = tab.value === currentTab;
            return isMatched && <Box key={tab.value}>{tab.component}</Box>;
          })}
        </Stack>
      </Container>
    </Page>
  );
}
