import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import BackgroundView from './background';
import DialogView from './dialog';
import Inview from './inview';
import OtherView from './other';
import ScrollView from './scroll';

const TAB_LIST = [
  { label: 'In View', component: <Inview /> },
  { label: 'Scroll', component: <ScrollView /> },
  { label: 'Dialog', component: <DialogView /> },
  { label: 'Background', component: <BackgroundView /> },
  { label: 'Other', component: <OtherView /> }
];

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function Animate() {
  const [value, setValue] = useState('In View');

  const handleChangeTab = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <RootStyle title={`组件: Animate${title_main}`}>
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme: any) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Animate"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Animate' }]}
            moreLink="https://www.framer.com/api/motion"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <TabContext value={value}>
          <Box sx={{ mb: 5 }}>
            <TabList onChange={handleChangeTab}>
              {TAB_LIST.map((tab: any) => (
                <Tab key={tab.label} label={tab.label} value={tab.label} disableRipple />
              ))}
            </TabList>
          </Box>
          {TAB_LIST.map((tab: any) => (
            <TabPanel key={tab.label} value={tab.label}>
              {tab.component}
            </TabPanel>
          ))}
        </TabContext>
      </Container>
    </RootStyle>
  );
}
