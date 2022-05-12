import { styled } from '@mui/material/styles';

import Page from '@/components/Page';

import {
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingDarkMode,
  LandingHero,
  LandingHugePackElements,
  LandingMinimal,
  LandingThemeColor
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
    <RootStyle title="Minimalist | home" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingMinimal />
        <LandingHugePackElements />
        <LandingDarkMode />
        <LandingThemeColor />
        <LandingCleanInterfaces />
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
}
