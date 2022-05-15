import { Box, Card, CardHeader, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import BasicTable from './BasicTable';
import CollapsibleTable from './collapsible-table';
import GroupingFixedHeader from './GroupingFixedHeader';
import SortingSelecting from './sorting-selecting';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function TableComponent() {
  return (
    <RootStyle title={`组件: Table${title_main}`}>
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
            heading="Table"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Table' }]}
            moreLink="https://mui.com/zh/material-ui/react-table/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Basic Table" />
            <BasicTable />
          </Card>

          <Card>
            <SortingSelecting />
          </Card>

          <Card>
            <CardHeader title="Grouping & FixedHeader" />
            <GroupingFixedHeader />
          </Card>

          <Card>
            <CardHeader title="Collapsible Table" />
            <CollapsibleTable />
          </Card>
        </Stack>
      </Container>
    </RootStyle>
  );
}
