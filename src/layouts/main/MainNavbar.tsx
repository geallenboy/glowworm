
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';
import useOffSetTop from 'src/hooks/useOffSetTop';
import Logo from 'src/components/Logo';
import Label from 'src/components/Label';
import { MHidden } from 'src/components/@material-extend';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }:any) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }:any) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));


export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 },
          }),
        }}
      >
        <Container
          maxWidth='lg'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <NextLink href='/'>
            <Logo />
          </NextLink>
          <Label color='info' sx={{ ml: 1 }}>
            Next Js 2.5.0
          </Label>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width='mdDown'>
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>

          <Button
            variant='contained'
            target='_blank'
            href='https://material-ui.com/store/items/minimal-dashboard/'
          >
            Purchase Now
          </Button>

          <MHidden width='mdUp'>
            <MenuMobile
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
