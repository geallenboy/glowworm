import { Grain, Home, Whatshot } from '@mui/icons-material';
import { Box, Breadcrumbs, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { MBreadcrumbs } from '@/components/@material-extend';
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function BreadcrumbComponent() {
  return (
    <RootStyle title={`组件: Breadcrumbs${title_main}`}>
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
            heading="Breadcrumbs"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Breadcrumbs' }]}
            moreLink="https://mui.com/zh/material-ui/react-breadcrumbs/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Block
              title="Text"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Breadcrumbs>
                <Link color="inherit" href="#">
                  Material-UI
                </Link>
                <Link color="inherit" href="#">
                  Core
                </Link>
                <Typography sx={{ color: 'text.primary' }}>Breadcrumb</Typography>
              </Breadcrumbs>
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block
              title="With Icon"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Breadcrumbs>
                <Link color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Home sx={{ mr: 0.5, width: 20, height: 20 }} />
                  Material-UI
                </Link>
                <Link color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Whatshot sx={{ mr: 0.5, width: 20, height: 20 }} />
                  Core
                </Link>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.primary'
                  }}
                >
                  <Grain sx={{ mr: 0.5, width: 20, height: 20 }} />
                  Breadcrumb
                </Typography>
              </Breadcrumbs>
            </Block>
          </Grid>

          <Grid item xs={12}>
            <Block
              title="Customized"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <MBreadcrumbs
                links={[
                  { name: 'Home', href: '#', icon: <Home /> },
                  { name: 'Link1', href: '#', icon: <Whatshot /> },
                  { name: 'Link2', href: '#', icon: <Whatshot /> },
                  { name: 'Link3', href: '#', icon: <Whatshot /> },
                  { name: 'Link4', href: '#', icon: <Whatshot /> },
                  { name: 'Link5', href: '#', icon: <Whatshot /> }
                ]}
              />
            </Block>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
