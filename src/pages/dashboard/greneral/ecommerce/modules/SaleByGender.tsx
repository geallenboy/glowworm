import { Card, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';

const CHART_HEIGHT = 392;

const ChartWrapperStyle = styled('div')(() => ({
  height: CHART_HEIGHT
}));

export default function SaleByGender() {
  return (
    <Card>
      <CardHeader title="按性别销售" />
      <ChartWrapperStyle dir="ltr"></ChartWrapperStyle>
    </Card>
  );
}
