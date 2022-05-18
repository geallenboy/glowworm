import { Box, Container, Grid, Typography } from '@mui/material';

import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';

import {
  BugReports,
  ConversionRates,
  CurrentSubject,
  CurrentVisits,
  ItemOrders,
  NewsUpdate,
  NewUsers,
  OrderTimeline,
  Tasks,
  TrafficBySite,
  WebsiteVisits,
  WeeklySales
} from './modules';

export default function Analytics() {
  const { themeStretch } = useSettings();

  return (
    <Page title={`网站统计 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">嗨, 欢迎回来</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <WeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <WebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <ConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <NewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <OrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Tasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
