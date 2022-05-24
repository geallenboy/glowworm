import { PieChart } from '@garron/react-chart';
import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const SOLD_OUT = 120;
const AVAILABLE = 66;

function Legend({ label, number }: any) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: 16,
            height: 16,
            bgcolor: 'grey.50016',
            borderRadius: 0.75,
            ...(label === 'Sold out' && {
              bgcolor: 'primary.main'
            })
          }}
        />
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
      </Stack>
      <Typography variant="subtitle1">{number} 房间</Typography>
    </Stack>
  );
}
const data = [
  { type: '售罄', value: 27 },
  { type: '剩余', value: 25 }
];
export default function RoomAvailable() {
  const theme = useTheme();
  const config: any = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.8,
    label: false,
    legend: false,
    pieStyle: {
      lineWidth: 0,
      stroke: theme.palette.background.paper
    },
    color: [theme.palette.primary.main, theme.palette.grey[500_16]],
    height: 240,
    statistic: {
      title: false,
      content: {
        content: ''
      }
    }
  };
  return (
    <Card>
      <CardHeader title="可用房间数" sx={{ mb: 8 }} />
      <PieChart {...config} />
      <Stack spacing={2} sx={{ p: 5 }}>
        <Legend label="售罄" number={SOLD_OUT} />
        <Legend label="剩余" number={AVAILABLE} />
      </Stack>
    </Card>
  );
}
