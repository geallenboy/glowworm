import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Page from '@/components/Page';
import { title_main } from '@/config';

import { Category, Form, Hero, List } from './modules';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

export default function Faqs() {
  return (
    <RootStyle title={`常见问题${title_main}`}>
      <Hero />

      <Container sx={{ mt: 15, mb: 10 }}>
        <Category />

        <Typography variant="h3" sx={{ mb: 5 }}>
          常见问题
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <List />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
