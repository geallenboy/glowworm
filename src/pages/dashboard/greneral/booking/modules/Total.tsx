import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { BookingIllustration } from '@/assets/svg';
import { fShortenNumber } from '@/utils/formatNumber';

const RootStyle = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 2, 2, 3)
}));

const TOTAL = 714000;

export default function Total() {
  return (
    <RootStyle>
      <div>
        <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          总预订量
        </Typography>
      </div>
      <Box
        sx={{
          width: 120,
          height: 120,
          lineHeight: 0,
          borderRadius: '50%',
          bgcolor: 'background.neutral'
        }}
      >
        <BookingIllustration />
      </Box>
    </RootStyle>
  );
}
