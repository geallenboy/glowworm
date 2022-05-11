import { Divider } from '@mui/material';
import { styled } from '@mui/styles';

import {
  AboutHero,
  AboutTeam,
  AboutTestimonials,
  AboutVision,
  AboutWhat
} from '@/components/_external-pages/about';
import Page from '@/components/Page';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

export default function About() {
  return (
    <RootStyle title="About us | Minimal-UI">
      <AboutHero />
      <AboutWhat />
      <AboutVision />
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
      <AboutTeam />
      <AboutTestimonials />
    </RootStyle>
  );
}
