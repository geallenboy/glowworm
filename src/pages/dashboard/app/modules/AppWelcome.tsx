// import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { SeoIllustration } from '@/assets/svg';
const RootStyle = styled(Card)(({ theme }) => ({
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
          Welcome back,
          <br /> {!displayName ? '...' : displayName}!
        </Typography>
      </CardContent>
    </RootStyle>
  );
}
