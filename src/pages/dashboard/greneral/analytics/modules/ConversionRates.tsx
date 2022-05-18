import { Box, Card, CardHeader } from '@mui/material';
// import { fNumber } from '@/utils/formatNumber';

// const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];

export default function ConversionRates() {
  return (
    <Card>
      <CardHeader title="转换率" subheader="(+43%) 比去年" />
      <Box sx={{ mx: 3 }} dir="ltr"></Box>
    </Card>
  );
}
