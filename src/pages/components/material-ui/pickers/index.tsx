import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import PickerDate from './PickerDate';
import PickerDateRange from './PickerDateRange';
import PickerDateTime from './PickerDateTime';
import PickerTime from './PickerTime';

const PICKERS = [
  { name: 'Date', component: <PickerDate /> },
  { name: 'DateTime', component: <PickerDateTime /> },
  { name: 'DateRange', component: <PickerDateRange /> },
  { name: 'Time', component: <PickerTime /> }
];

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function PickersComponent() {
  const [value, setValue] = useState('1');

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <RootStyle title={`组件: Pickers${title_main}`}>
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
            heading="Date / Time pickers"
            links={[
              { name: 'Components', href: PATH_PAGE.components },
              { name: 'Date / Time pickers' }
            ]}
            moreLink="https://mui.com/zh/material-ui/lab-date-and-time-pickers/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {PICKERS.map((tab: any, index: number) => (
              <Tab disableRipple key={tab.name} label={tab.name} value={String(index + 1)} />
            ))}
          </TabList>

          {PICKERS.map((tab: any, index: number) => (
            <TabPanel key={tab.name} value={String(index + 1)} sx={{ mt: 5 }}>
              {tab.component}
            </TabPanel>
          ))}
        </TabContext>
      </Container>
    </RootStyle>
  );
}
