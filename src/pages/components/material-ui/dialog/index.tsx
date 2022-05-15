import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../../Block';
import AlertDialog from './AlertDialog';
import FormDialogs from './FormDialogs';
import FullScreenDialogs from './FullScreenDialogs';
import MaxWidthDialog from './MaxWidthDialog';
import ScrollDialog from './ScrollDialog';
import SimpleDialogs from './SimpleDialogs';
import TransitionsDialogs from './TransitionsDialogs';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function DialogComponent() {
  return (
    <RootStyle title={`组件: Dialog${title_main}`}>
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Dialog"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Dialog' }]}
            moreLink="https://mui.com/zh/material-ui/react-dialog/"
          />
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Block title="Simple" sx={style}>
              <SimpleDialogs />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Alerts" sx={style}>
              <AlertDialog />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Transitions" sx={style}>
              <TransitionsDialogs />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Form" sx={style}>
              <FormDialogs />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Full Screen" sx={style}>
              <FullScreenDialogs />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Max Width Dialog" sx={style}>
              <MaxWidthDialog />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Scrolling Content Dialogs" sx={style}>
              <ScrollDialog />
            </Block>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
