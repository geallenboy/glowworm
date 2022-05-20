import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { Icon } from '@iconify/react';
import { Button, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { fCurrency } from '@/utils/formatNumber';
import { fDate } from '@/utils/formatTime';

export default function AccountBillingInvoiceHistory({ invoices }: any) {
  return (
    <Stack spacing={3} alignItems="flex-end">
      <Typography variant="subtitle1" sx={{ width: 1 }}>
        发票历史记录
      </Typography>

      <Stack spacing={2} sx={{ width: 1 }}>
        {invoices.map((invoice: any) => (
          <Stack key={invoice.id} direction="row" justifyContent="space-between" sx={{ width: 1 }}>
            <Typography variant="body2" sx={{ minWidth: 160 }}>
              {fDate(invoice.createdAt)}
            </Typography>
            <Typography variant="body2">{fCurrency(invoice.price)}</Typography>
            <Link component={RouterLink} to="#">
              PDF
            </Link>
          </Stack>
        ))}
      </Stack>

      <Button size="small" endIcon={<Icon icon={arrowIosForwardFill} />}>
        所有发票
      </Button>
    </Stack>
  );
}
