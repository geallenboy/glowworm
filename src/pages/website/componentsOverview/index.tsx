import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import Page from '@/components/Page';

import { ComponentFoundation, ComponentHero, ComponentMaterialUI, ComponentOther } from './modules';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

export default function ComponentsOverview() {
  return (
    <RootStyle title="组件">
      <ComponentHero />
      <Container maxWidth="lg">
        <ComponentFoundation />
        <ComponentMaterialUI />
        <ComponentOther />
      </Container>
    </RootStyle>
  );
}
