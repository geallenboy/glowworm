import { Container, Grid } from '@mui/material';

import Page from '@/components/Page';
import useAuth from '@/hooks/useAuth';
import useSettings from '@/hooks/useSettings';

import { AppFeatured, AppWelcome } from './modules';

export default function App() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();
  return (
    <Page title="App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome displayName={user.displayName} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
