import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { CheckOutIllustration } from '@/assets/svg';
import { fShortenNumber } from '@/utils/formatNumber';

const RootStyle = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 2, 2, 3)
}));

const TOTAL = 124000;

export default function CheckOut() {
  return (
    <RootStyle>
      <div>
        <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          退房
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
        <CheckOutIllustration />
      </Box>
    </RootStyle>
  );
}
