
import MainLayout from 'src/layouts/main';
import { styled } from '@mui/material/styles';
import Page from 'src/components/Page';
import { Advertisement, DarkMode, Hero, HugePackElements, Minimal, ThemeColor } from 'src/components/landing';

const RootStyle = styled(Page)({
  height: '100%',
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function IndexPage() {
  return (
    <MainLayout>
      <RootStyle
        title='next project | 萤火虫'
      >
        <Hero />
        <ContentStyle>
        <Minimal />
        <HugePackElements />
        <DarkMode />
        <ThemeColor />
        <Advertisement />
        </ContentStyle>
      </RootStyle>
    </MainLayout>
  );
}
