import { Card, CardHeader, LinearProgress, Stack, Typography } from '@mui/material';

import { fCurrency, fPercent } from '@/utils/formatNumber';
import mockData from '@/utils/mock-data';
const LABELS = ['利润总额', '总收入', '总费用'];

const MOCK_SALES = [...Array(3)].map((_, index) => ({
  label: LABELS[index],
  amount: mockData.number.price(index) * 100,
  value: mockData.number.percent(index)
}));

function ProgressItem({ progress }: any) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
          {progress.label}
        </Typography>
        <Typography variant="subtitle2">{fCurrency(progress.amount)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp;({fPercent(progress.value)})
        </Typography>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={progress.value}
        color={
          (progress.label === '总收入' && 'info') ||
          (progress.label === '总费用' && 'warning') ||
          'primary'
        }
      />
    </Stack>
  );
}

export default function SalesOverview() {
  return (
    <Card>
      <CardHeader title="销售概述" />
      <Stack spacing={4} sx={{ p: 3 }}>
        {MOCK_SALES.map((progress) => (
          <ProgressItem key={progress.label} progress={progress} />
        ))}
      </Stack>
    </Card>
  );
}
