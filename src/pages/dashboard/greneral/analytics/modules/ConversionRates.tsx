import { BarChart } from '@garron/react-chart';
import { Box, Card, CardHeader } from '@mui/material';

const data = [
  { year: '1951 年', value: 38 },
  { year: '1952 年', value: 52 },
  { year: '1956 年', value: 61 },
  { year: '1957 年', value: 145 },
  { year: '1958 年', value: 48 }
];
export default function ConversionRates() {
  const config: any = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left'
    }
  };
  return (
    <Card>
      <CardHeader title="转换率" subheader="(+43%) 比去年" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <BarChart {...config} />
      </Box>
    </Card>
  );
}
