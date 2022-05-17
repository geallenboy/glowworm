import { Container, Grid } from '@mui/material';

import Page from '@/components/Page';
import { title_admin } from '@/config';
import useAuth from '@/hooks/useAuth';
import useSettings from '@/hooks/useSettings';

import {
  BestSalesman,
  CurrentBalance,
  LatestProducts,
  NewProducts,
  ProductSold,
  SaleByGender,
  SalesOverview,
  SalesProfit,
  TotalBalance,
  Welcome,
  YearlySales
} from './modules';

export default function Ecommerce() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();
  return (
    <Page title={`ECommerce ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Welcome displayName={user?.displayName} />
          </Grid>

          <Grid item xs={12} md={4}>
            <NewProducts />
          </Grid>

          <Grid item xs={12} md={4}>
            <ProductSold />
          </Grid>
          <Grid item xs={12} md={4}>
            <TotalBalance />
          </Grid>
          <Grid item xs={12} md={4}>
            <SalesProfit />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <SaleByGender />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <YearlySales />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <SalesOverview />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CurrentBalance />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <BestSalesman />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <LatestProducts />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
