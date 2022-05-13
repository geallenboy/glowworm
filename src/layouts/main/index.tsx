import { Box, Container, Typography } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Logo from '@/components/Logo';

import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default'
          }}
        >
          <Container maxWidth="lg">
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
            </ScrollLink>

            <Typography variant="caption" component="p">
              © All rights garron
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
}
