import { PieChart } from '@garron/react-chart';
import { Card, CardHeader } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { fNumber } from '@/utils/formatNumber';

const CHART_HEIGHT = 425;
const ChartWrapperStyle = styled('div')(() => ({
  height: CHART_HEIGHT
}));

const data = [
  { type: 'Mac', value: 12244 },
  { type: 'Window', value: 53345 },
  { type: 'iOS', value: 44313 },
  { type: 'Android', value: 78343 }
];
export default function AppCurrentDownload() {
  const theme = useTheme();

  const config: any = {
    color: [
      theme.palette.primary.light,
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.primary.dark
    ],
    angleField: 'value',
    colorField: 'type',
    pieStyle: {
      lineWidth: 0,
      stroke: theme.palette.background.paper
    },
    innerRadius: 0.9,
    statistic: {
      title: {
        style: {
          color: theme.palette.text.primary
        },
        customHtml: () => {
          return '总计';
        }
      },
      content: {
        style: {
          color: theme.palette.text.primary,
          fontSize: '32px'
        },
        customHtml: (container: any, view: any, datum: any, data: any[]) => {
          return `¥ ${fNumber(data.reduce((r: any, d: { value: any }) => r + d.value, 0))}`;
        }
      }
    },
    label: false,
    padding: [0, 20, 0, 20],
    legend: {
      position: 'bottom',
      offsetY: -10
    },
    data
  };
  return (
    <Card>
      <CardHeader title="当前下载" />
      <ChartWrapperStyle dir="ltr">
        <PieChart {...config} />
      </ChartWrapperStyle>
    </Card>
  );
}
