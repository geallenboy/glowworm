import { Box, Card, CardHeader, LinearProgress, Stack, Typography } from '@mui/material';

import { fShortenNumber } from '@/utils/formatNumber';
import mockData from '@/utils/mock-data';

const LABEL = ['待定', '取消', '完成'];

const MOCK_SALES = [...Array(3)].map((_, index) => ({
  status: LABEL[index],
  quantity: mockData.number.percent(index) * 1000,
  value: mockData.number.percent(index)
}));

export default function BookedRoom() {
  return (
    <Card>
      <CardHeader title="预订的房间" />
      <Stack spacing={3} sx={{ px: 3, my: 5 }}>
        {MOCK_SALES.map((progress) => (
          <LinearProgress
            variant="determinate"
            key={progress.status}
            value={progress.value}
            color={
              (progress.status === '待定' && 'warning') ||
              (progress.status === '取消' && 'error') ||
              'success'
            }
            sx={{ height: 8, bgcolor: 'grey.50016' }}
          />
        ))}
      </Stack>

      <Stack direction="row" justifyContent="space-between" sx={{ px: 3, pb: 3 }}>
        {MOCK_SALES.map((progress) => (
          <Stack key={progress.status} alignItems="center">
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: 0.5,
                  bgcolor: 'success.main',
                  ...(progress.status === '待定' && { bgcolor: 'warning.main' }),
                  ...(progress.status === '取消' && { bgcolor: 'error.main' })
                }}
              />
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {progress.status}
              </Typography>
            </Stack>

            <Typography variant="h6">{fShortenNumber(progress.quantity)}</Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
