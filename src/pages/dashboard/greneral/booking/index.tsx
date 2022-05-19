import { Container, Grid } from '@mui/material';

import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';

import {
  BookedRoom,
  CheckIn,
  CheckInWidgets,
  CheckOut,
  CustomerReviews,
  Details,
  Newest,
  ReservationStats,
  RoomAvailable,
  Total,
  TotalIncomes
} from './modules';

export default function Booking() {
  const { themeStretch } = useSettings();

  return (
    <Page title={`预定 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Total />
          </Grid>

          <Grid item xs={12} md={4}>
            <CheckIn />
          </Grid>

          <Grid item xs={12} md={4}>
            <CheckOut />
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TotalIncomes />
              </Grid>

              <Grid item xs={12} md={6}>
                <BookedRoom />
              </Grid>

              <Grid item xs={12} md={12}>
                <CheckInWidgets />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <RoomAvailable />
          </Grid>

          <Grid item xs={12} md={8}>
            <ReservationStats />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomerReviews />
          </Grid>

          <Grid item xs={12}>
            <Newest />
          </Grid>

          <Grid item xs={12}>
            <Details />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
