import { PieChart } from '@garron/react-chart';
import { Card, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';
const CHART_HEIGHT = 372;
// const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5)
}));

const data = [
  { type: '上海', value: 27 },
  { type: '南京', value: 25 },
  { type: '北京', value: 18 },
  { type: '深圳', value: 15 },
  { type: '广州', value: 10 },
  { type: '重庆', value: 5 }
];
export default function CurrentVisits() {
  // const theme = useTheme();
  const config: any = {
    padding: [10, 10, 10, 20],
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    legend: {
      position: 'bottom',
      offsetY: '-10'
    },
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center'
      }
    }
  };
  return (
    <Card>
      <CardHeader title="当前访问次数" />
      <ChartWrapperStyle dir="ltr">
        <PieChart {...config} />
      </ChartWrapperStyle>
    </Card>
  );
}
