import { Container } from '@mui/material';
import { styled } from '@mui/styles';

import Page from '@/components/Page';

import {
  ComponentFoundation,
  ComponentHero,
  ComponentMaterialUI,
  ComponentOther
} from '../components/_external-pages/components-overview';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function ComponentsOverview() {
  return (
    <RootStyle title="Components Overview | Minimal-UI">
      <ComponentHero />
      <Container maxWidth="lg">
        <ComponentFoundation />
        <ComponentMaterialUI />
        <ComponentOther />
      </Container>
    </RootStyle>
  );
}
