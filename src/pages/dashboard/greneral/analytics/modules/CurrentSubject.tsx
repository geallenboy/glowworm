import { Card, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';

const CHART_HEIGHT = 392;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2)
}));

export default function CurrentSubject() {
  return (
    <Card>
      <CardHeader title="当前主题" />
      <ChartWrapperStyle dir="ltr"></ChartWrapperStyle>
    </Card>
  );
}
