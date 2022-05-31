
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
        title='next project | 萤火虫'
      >
        {/* <LandingHero /> */}
        <ContentStyle>
          app
        </ContentStyle>
      </RootStyle>
    </MainLayout>
  );
}
