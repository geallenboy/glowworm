import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';

const SOLD_OUT = 120;
const AVAILABLE = 66;

function Legend({ label, number }: any) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: 16,
            height: 16,
            bgcolor: 'grey.50016',
            borderRadius: 0.75,
            ...(label === 'Sold out' && {
              bgcolor: 'primary.main'
            })
          }}
        />
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
      </Stack>
      <Typography variant="subtitle1">{number} 房间</Typography>
    </Stack>
  );
}

export default function RoomAvailable() {
  // const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Room Available" sx={{ mb: 8 }} />

      <Stack spacing={2} sx={{ p: 5 }}>
        <Legend label="Sold out" number={SOLD_OUT} />
        <Legend label="Available" number={AVAILABLE} />
      </Stack>
    </Card>
  );
}
