import { Button, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import { SeoIllustration } from '@/assets/svg';

const RootStyle = styled(Card)(({ theme }: any) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));
export default function AppWelcome({ displayName }: { displayName: string }) {
  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: 'grey.800'
        }}
      >
        <Typography>
          欢迎回来,
          <br /> {!displayName ? '...' : displayName}!
        </Typography>
        <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
          论潜力，不算天才，可玄功武技，皆可无师自通。 论实力，任凭你有万千至宝，但定不敌
        </Typography>

        <Button variant="contained" to="#" component={RouterLink}>
          点击
        </Button>
      </CardContent>
      <SeoIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: 'auto', md: 'inherit' }
        }}
      />
    </RootStyle>
  );
}
