import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../../Block';
import EnhancedTransferList from './EnhancedTransferList';
import SimpleTransferList from './SimpleTransferList';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function TransferListComponent() {
  return (
    <RootStyle title={`组件: Transfer List${title_main}`}>
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
            heading="Transfer List"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Transfer List' }]}
            moreLink="https://mui.com/zh/material-ui/react-transfer-list/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Block title="Simple" sx={style}>
            <SimpleTransferList />
          </Block>

          <Block title="Enhanced" sx={style}>
            <EnhancedTransferList />
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}
