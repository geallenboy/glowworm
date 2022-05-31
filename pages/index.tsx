
import MainLayout from 'src/layouts/main';
import { styled } from '@mui/material/styles';
import Page from 'src/components/Page';

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
        title='The starting point for your next project | Minimal-UI'
        id='move_top'
      >
        {/* <LandingHero /> */}
        <ContentStyle>
          app
        </ContentStyle>
      </RootStyle>
    </MainLayout>
  );
}
