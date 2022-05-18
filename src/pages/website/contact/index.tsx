import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import Page from '@/components/Page';
import { title_main } from '@/config';

import { Form, Hero } from './modules';

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

export default function Contact() {
  return (
    <RootStyle title={`联系我们${title_main}`}>
      <Hero />

      <Container sx={{ my: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
