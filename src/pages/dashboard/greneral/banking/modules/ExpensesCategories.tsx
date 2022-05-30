import { RoseChart } from '@garron/react-chart';
import { Box, Card, CardHeader, Divider, Stack, Typography, useMediaQuery } from '@mui/material/';
import { styled, useTheme } from '@mui/material/styles';

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
const data = [
  { type: '费用一', value: 27 },
  { type: '费用二', value: 25 },
  { type: '费用三', value: 18 },
  { type: '费用四', value: 15 },
  { type: '费用五', value: 10 },
  { type: '其他', value: 5 }
];
export default function ExpensesCategories() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) ? 360 : 240;
  const config = {
    data,
    xField: 'type',
    height: isMobile,
    yField: 'value',
    seriesField: 'type',
    radius: 1,
    pieStyle: {
      lineWidth: 0,
      stroke: theme.palette.background.paper
    },
    label: {
      offset: -15
    }
  };
  return (
    <RootStyle>
      <CardHeader title="费用类别" />

      <Box sx={{ my: 5 }} dir="ltr">
        <RoseChart {...config} />
      </Box>

      <Divider />

      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>类别</Typography>
          <Typography sx={{ typography: 'h4' }}>9</Typography>
        </Box>

        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>类别</Typography>
          <Typography sx={{ typography: 'h4' }}>18,765</Typography>
        </Box>
      </Stack>
    </RootStyle>
  );
}
