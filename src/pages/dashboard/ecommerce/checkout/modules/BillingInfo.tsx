import editFill from '@iconify/icons-eva/edit-fill';
import { Icon } from '@iconify/react';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';

import { useSelector } from '@/redux/store';

export default function BillingInfo({ onBackStep }: any) {
  const { checkout } = useSelector((state: any) => state.product);
  const { billing } = checkout;

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        title="帐单地址"
        action={
          <Button
            size="small"
            type="button"
            startIcon={<Icon icon={editFill} />}
            onClick={onBackStep}
          >
            编辑
          </Button>
        }
      />
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          {billing?.receiver}&nbsp;
          <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
            ({billing?.addressType})
          </Typography>
        </Typography>

        <Typography variant="body2" gutterBottom>
          {billing?.fullAddress}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {billing?.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
