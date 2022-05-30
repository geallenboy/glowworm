import { RingProgressChart } from '@garron/react-chart';
import { Card, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { fNumber } from '@/utils/formatNumber';

const TOTAL_CHECK_IN = 38566;
const TOTAL_CHECK_OUT = 18472;

export default function CheckInWidgets() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const config1 = {
    height: 106,
    width: 106,
    autoFit: false,
    percent: 0.7,
    color: [theme.palette.primary.main, theme.palette.grey[500_16]]
  };
  const config2 = {
    height: 106,
    width: 106,
    autoFit: false,
    percent: 0.7,
    color: [theme.palette.chart.yellow[0], theme.palette.grey[500_16]]
  };
  return (
    <Card>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem />}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
          sx={{ width: 1, py: 5 }}
        >
          <RingProgressChart {...config1} />
          <div>
            <Typography variant="h4" sx={{ mb: 0.5 }}>
              {fNumber(TOTAL_CHECK_IN)}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.72 }}>
              登记入住
            </Typography>
          </div>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
          sx={{ width: 1, py: 5 }}
        >
          <RingProgressChart {...config2} />
          <div>
            <Typography variant="h4" sx={{ mb: 0.5 }}>
              {fNumber(TOTAL_CHECK_OUT)}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.72 }}>
              退房
            </Typography>
          </div>
        </Stack>
      </Stack>
    </Card>
  );
}
