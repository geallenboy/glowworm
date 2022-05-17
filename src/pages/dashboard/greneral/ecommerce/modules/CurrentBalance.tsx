import { Button, Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { fCurrency } from '@/utils/formatNumber';

const RowStyle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
});

export default function CurrentBalance() {
  const currentBalance = 187650;
  const sentAmount = 25500;
  const totalAmount = currentBalance - sentAmount;

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="subtitle2" gutterBottom>
        你目前的余额
      </Typography>

      <Stack spacing={2}>
        <Typography variant="h3">{fCurrency(totalAmount)}</Typography>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            你目前的余额
          </Typography>
          <Typography variant="body2">{fCurrency(currentBalance)}</Typography>
        </RowStyle>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            发送金额
          </Typography>
          <Typography variant="body2">- {fCurrency(sentAmount)}</Typography>
        </RowStyle>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            总金额
          </Typography>
          <Typography variant="subtitle1">{fCurrency(totalAmount)}</Typography>
        </RowStyle>

        <Stack direction="row" spacing={1.5}>
          <Button fullWidth variant="contained" color="warning">
            转移
          </Button>
          <Button fullWidth variant="contained">
            接收
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
