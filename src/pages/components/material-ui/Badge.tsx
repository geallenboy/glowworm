import { Mail } from '@mui/icons-material';
import { Badge, Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function BadgeComponent() {
  return (
    <RootStyle title={`组件: Badge${title_main}`}>
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
            heading="Badge"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Badge' }]}
            moreLink="https://mui.com/zh/material-ui/react-badge/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Block
              title="Basic"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > *': { mx: 1 }
              }}
            >
              <Badge badgeContent={4}>
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="primary">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="info">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="success">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="warning">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block
              title="Maximum value"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > *': { mx: 1 }
              }}
            >
              <Badge badgeContent={99} color="error" children={<Mail />} />
              <Badge badgeContent={100} color="error" children={<Mail />} />
              <Badge badgeContent={1000} max={999} color="error" children={<Mail />} />
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block
              title="Dot badge"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > *': { mx: 1 }
              }}
            >
              <Badge color="info" variant="dot">
                <Mail />
              </Badge>
              <Badge color="info" variant="dot">
                <Typography>Typography</Typography>
              </Badge>
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block
              title="Badge overlap"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > *': { mx: 1 }
              }}
            >
              <Badge color="info" badgeContent=" ">
                <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main' }} />
              </Badge>
              <Badge color="info" badgeContent=" " variant="dot">
                <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main' }} />
              </Badge>
              <Badge color="info" overlap="circular" badgeContent=" ">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'warning.main'
                  }}
                />
              </Badge>
              <Badge color="info" overlap="circular" badgeContent=" " variant="dot">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'warning.main'
                  }}
                />
              </Badge>
            </Block>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
