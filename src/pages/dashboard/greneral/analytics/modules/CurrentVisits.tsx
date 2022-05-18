import { Card, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';

const CHART_HEIGHT = 372;
// const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5)
}));

// const CHART_DATA = [4344, 5435, 1443, 4443];

export default function CurrentVisits() {
  // const theme = useTheme();

  return (
    <Card>
      <CardHeader title="当前访问次数" />
      <ChartWrapperStyle dir="ltr"></ChartWrapperStyle>
    </Card>
  );
}
