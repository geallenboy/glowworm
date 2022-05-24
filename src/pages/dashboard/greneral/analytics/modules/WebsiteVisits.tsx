import { AreaChart } from '@garron/react-chart';
import { Box, Card, CardHeader } from '@mui/material';
const CHART_DATA = [
  {
    year: 2019,
    data: [
      { year: '2019-1-1', name: '北京', value: 100 },
      { year: '2019-2-2', name: '北京', value: 200 },
      { year: '2019-3-1', name: '北京', value: 300 },
      { year: '2019-4-1', name: '北京', value: 400 },
      { year: '2019-5-1', name: '北京', value: 500 },
      { year: '2019-6-1', name: '北京', value: 600 },
      { year: '2019-7-1', name: '北京', value: 700 },
      { year: '2019-8-1', name: '北京', value: 800 },
      { year: '2019-9-1', name: '北京', value: 900 },
      { year: '2019-10-1', name: '北京', value: 1000 },
      { year: '2019-11-1', name: '北京', value: 1110 },
      { year: '2019-12-1', name: '北京', value: 1200 },
      { year: '2019-1-1', name: '南京', value: 110 },
      { year: '2019-2-2', name: '南京', value: 400 },
      { year: '2019-3-1', name: '南京', value: 300 },
      { year: '2019-4-1', name: '南京', value: 200 },
      { year: '2019-5-1', name: '南京', value: 900 },
      { year: '2019-6-1', name: '南京', value: 2200 },
      { year: '2019-7-1', name: '南京', value: 700 },
      { year: '2019-8-1', name: '南京', value: 1800 },
      { year: '2019-9-1', name: '南京', value: 1900 },
      { year: '2019-10-1', name: '南京', value: 1050 },
      { year: '2019-11-1', name: '南京', value: 110 },
      { year: '2019-12-1', name: '南京', value: 120 }
    ]
  }
];
export default function WebsiteVisits() {
  const config = {
    padding: [40, 30, 40, 40],
    data: CHART_DATA[0].data,
    xField: 'year',
    yField: 'value',
    seriesField: 'name',
    smooth: true,
    xAxis: {
      type: 'time'
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v: string) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)
      }
    }
  };
  return (
    <Card>
      <CardHeader title="网站访问" subheader="(+43%) 比去年" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <AreaChart {...config} />
      </Box>
    </Card>
  );
}
