import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import Page from '@/components/Page';
import { title_main } from '@/config';

import { Hero, Vision, What } from './modules';

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

export default function About() {
  return (
    <RootStyle title={`关于我们${title_main}`}>
      <Hero />
      <What />
      <Vision />
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
    </RootStyle>
  );
}
