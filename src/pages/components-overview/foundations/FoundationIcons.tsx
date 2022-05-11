import alertCircleFill from '@iconify/icons-eva/alert-circle-fill';
import arrowCircleDownFill from '@iconify/icons-eva/arrow-circle-down-fill';
import chargingFill from '@iconify/icons-eva/charging-fill';
import clockFill from '@iconify/icons-eva/clock-fill';
import colorPaletteFill from '@iconify/icons-eva/color-palette-fill';
import { Icon } from '@iconify/react';
import { AccountCircle, Adb, Add, AirplanemodeActive, Apple } from '@mui/icons-material';
import { Box, Container, Stack, SvgIcon } from '@mui/material';
import { styled } from '@mui/styles';

import CodeSnippets from '@/components/CodeSnippets';
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import SvgIconStyle from '@/components/SvgIconStyle';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';
import { iconify, local, material } from './data';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

// ----------------------------------------------------------------------

export default function FoundationIcons() {
  return (
    <RootStyle title="Foundations: Icons | Minimal-UI">
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme: any) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Icons"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Icons' }]}
            moreLink={[
              'https://material-ui.com/components/material-icons',
              'https://iconify.design/icon-sets'
            ]}
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Box sx={{ position: 'relative' }}>
            <Block title="Material Icons" sx={style}>
              <CodeSnippets source={material} />
              <Adb color="action" />
              <Add color="disabled" />
              <AccountCircle color="error" />
              <AirplanemodeActive color="inherit" />
              <Apple color="primary" />
              <Apple color="secondary" />
            </Block>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Block title="Iconify Icons" sx={style}>
              <CodeSnippets source={iconify} />
              <SvgIcon color="action">
                <Icon icon={alertCircleFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="disabled">
                <Icon icon={chargingFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="error">
                <Icon icon={arrowCircleDownFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="inherit">
                <Icon icon={clockFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="primary">
                <Icon icon={colorPaletteFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="secondary">
                <Icon icon={colorPaletteFill} width={24} height={24} />
              </SvgIcon>
            </Block>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Block title="Local Icons" sx={style}>
              <CodeSnippets source={local} />
              <SvgIconStyle src="/static/icons/browser-edge.svg" />
              <SvgIconStyle src="/static/icons/browser-edge.svg" color="action" />
              <SvgIconStyle src="/static/icons/browser-edge.svg" color="disabled" />
              <SvgIconStyle src="/static/icons/browser-edge.svg" color="primary" />
              <SvgIconStyle src="/static/icons/browser-edge.svg" color="secondary" />
              <SvgIconStyle src="/static/icons/elephant.svg" color="info" />
              <SvgIconStyle src="/static/icons/json-logo.svg" color="success" />
              <SvgIconStyle src="/static/icons/love-camera.svg" color="warning" />
              <SvgIconStyle src="/static/icons/shield.svg" color="error" />
            </Block>
          </Box>
        </Stack>
      </Container>
    </RootStyle>
  );
}
