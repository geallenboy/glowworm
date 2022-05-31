import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Avatar,
  Drawer,
  Tooltip,
  Typography,
  CardActionArea,
} from '@mui/material';
import useCollapseDrawer from 'src/hooks/useCollapseDrawer';
import Logo from 'src/components/Logo';
import Scrollbar from 'src/components/Scrollbar';
import NavSection from 'src/components/NavSection';
import { MHidden } from 'src/components/@material-extend';
import sidebarConfig from './SidebarConfig';

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const RootStyle = styled('div')(({ theme }:any) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.complex,
    }),
  },
}));

const AccountStyle = styled('div')(({ theme }:any) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12],
}));


function IconCollapse({ onToggleCollapse, collapseClick }:any) {
  return (
    <Tooltip title='Mini Menu'>
      <CardActionArea
        onClick={onToggleCollapse}
        sx={{
          width: 18,
          height: 18,
          display: 'flex',
          cursor: 'pointer',
          borderRadius: '50%',
          alignItems: 'center',
          color: 'text.primary',
          justifyContent: 'center',
          border: 'solid 1px currentColor',
          ...(collapseClick && {
            borderWidth: 2,
          }),
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'currentColor',
            transition: (theme) => theme.transitions.create('all'),
            ...(collapseClick && {
              width: 0,
              height: 0,
            }),
          }}
        />
      </CardActionArea>
    </Tooltip>
  );
}

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }:any) {
  const { pathname } = useRouter();

  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          px: 2.5,
          pt: 3,
          pb: 2,
          ...(isCollapse && {
            alignItems: 'center',
          }),
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <NextLink href='/'>
            <Box sx={{ display: 'inline-flex' }}>
              <Logo />
            </Box>
          </NextLink>

          <MHidden width='lgDown'>
            {!isCollapse && (
              <IconCollapse
                onToggleCollapse={onToggleCollapse}
                collapseClick={collapseClick}
              />
            )}
          </MHidden>
        </Stack>

        {isCollapse ? (
          <Avatar
            alt='My Avatar'
            src='/static/mock-images/avatars/avatar_default.jpg'
            sx={{ mx: 'auto', mb: 2 }}
          />
        ) : (
          <NextLink href='#'>
            <AccountStyle>
              <Avatar
                alt='My Avatar'
                src='/static/mock-images/avatars/avatar_default.jpg'
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                  displayName
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  role
                </Typography>
              </Box>
            </AccountStyle>
          </NextLink>
        )}
      </Stack>

      <NavSection navConfig={sidebarConfig} isShow={!isCollapse} />
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      <MHidden width='lgUp'>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width='lgDown'>
        <Drawer
          open
          variant='persistent'
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              ...(isCollapse && {
                width: COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                borderRight: 0,
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
                boxShadow: (theme:any) => theme.customShadows.z20,
                bgcolor: (theme:any) =>
                  alpha(theme.palette.background.default, 0.88),
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
