import { styled } from '@mui/material/styles';

import Page from '@/components/Page';
import { title_main } from '@/config';

import {
  Advertisement,
  CleanInterfaces,
  DarkMode,
  Hero,
  HugePackElements,
  Minimal,
  ThemeColor
} from './modules';

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

export default function LandingPage() {
  return (
    <RootStyle title={`首页${title_main}`}>
      <Hero />
      <ContentStyle>
        <Minimal />
        <HugePackElements />
        <DarkMode />
        <ThemeColor />
        <CleanInterfaces />
        <Advertisement />
      </ContentStyle>
    </RootStyle>
  );
}
