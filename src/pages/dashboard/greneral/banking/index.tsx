import { Container, Grid, Stack } from '@mui/material';

import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';

import {
  BalanceStatistics,
  Contacts,
  CurrentBalance,
  Expenses,
  ExpensesCategories,
  Income,
  InviteFriends,
  QuickTransfer,
  RecentTransitions
} from './modules';

export default function General() {
  const { themeStretch } = useSettings();

  return (
    <Page title={`银行 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Income />
              <Expenses />
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <CurrentBalance />
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <BalanceStatistics />
              <ExpensesCategories />
              <RecentTransitions />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <QuickTransfer />
              <Contacts />
              <InviteFriends />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
