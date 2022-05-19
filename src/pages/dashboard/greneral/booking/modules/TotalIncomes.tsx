import trendingDownFill from '@iconify/icons-eva/trending-down-fill';
import trendingUpFill from '@iconify/icons-eva/trending-up-fill';
import { Icon } from '@iconify/react';
import { Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { fCurrency, fPercent } from '@/utils/formatNumber';

const RootStyle = styled(Card)(({ theme }: any) => ({
  boxShadow: 'none',
  padding: theme.spacing(3),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const TOTAL = 18765;
const PERCENT = 2.6;

export default function TotalIncomes() {
  return (
    <RootStyle>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
        <div>
          <Typography sx={{ mb: 2, typography: 'subtitle2' }}>总收入</Typography>
          <Typography sx={{ typography: 'h3' }}>{fCurrency(TOTAL)}</Typography>
        </div>

        <div>
          <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ mb: 0.6 }}>
            <Icon width={20} height={20} icon={PERCENT >= 0 ? trendingUpFill : trendingDownFill} />
            <Typography variant="subtitle2" component="span" sx={{ ml: 0.5 }}>
              {PERCENT > 0 && '+'}
              {fPercent(PERCENT)}
            </Typography>
          </Stack>
          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            &nbsp;比上月
          </Typography>
        </div>
      </Stack>
    </RootStyle>
  );
}
