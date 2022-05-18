import { Box, Card, CardHeader, Divider, Stack, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';

const RootStyle = styled(Card)(({ theme }) => ({
  '& .apexcharts-legend': {
    width: 240,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
      height: 160,
      width: '50%'
    }
  },
  '& .apexcharts-datalabels-group': {
    display: 'none'
  }
}));

export default function ExpensesCategories() {
  return (
    <RootStyle>
      <CardHeader title="费用类别" />

      <Box sx={{ my: 5 }} dir="ltr"></Box>

      <Divider />

      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>类别</Typography>
          <Typography sx={{ typography: 'h4' }}>9</Typography>
        </Box>

        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>类别</Typography>
          <Typography sx={{ typography: 'h4' }}>$18,765</Typography>
        </Box>
      </Stack>
    </RootStyle>
  );
}
