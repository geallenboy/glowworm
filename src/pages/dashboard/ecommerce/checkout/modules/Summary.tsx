import editFill from '@iconify/icons-eva/edit-fill';
import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from '@mui/material';

import { fCurrency } from '@/utils/formatNumber';

export default function Summary({
  total,
  onEdit,
  discount,
  subtotal,
  shipping = null,
  onApplyDiscount,
  enableEdit = false,
  enableDiscount = false
}: any) {
  const displayShipping = shipping !== null ? '免费' : '-';

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        title="订单汇总"
        action={
          enableEdit && (
            <Button
              size="small"
              type="button"
              onClick={onEdit}
              startIcon={<Icon icon={editFill} />}
            >
              编辑
            </Button>
          )
        }
      />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              小计
            </Typography>
            <Typography variant="subtitle2">{fCurrency(subtotal)}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              折扣
            </Typography>
            <Typography variant="subtitle2">{discount ? fCurrency(-discount) : '-'}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              运输
            </Typography>
            <Typography variant="subtitle2">
              {shipping ? fCurrency(shipping) : displayShipping}
            </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">总计</Typography>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                {fCurrency(total)}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                (含增值税（如适用）)
              </Typography>
            </Box>
          </Stack>

          {enableDiscount && (
            <TextField
              fullWidth
              placeholder="折扣码"
              value="DISCOUNT5"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button type="button" onClick={() => onApplyDiscount(5)} sx={{ mr: -0.5 }}>
                      申请
                    </Button>
                  </InputAdornment>
                )
              }}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
