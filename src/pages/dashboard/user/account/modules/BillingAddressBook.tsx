import editFill from '@iconify/icons-eva/edit-fill';
import plusFill from '@iconify/icons-eva/plus-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import { Icon } from '@iconify/react';
import { Box, Button, Card, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

export default function AccountBillingAddressBook({ addressBook }: any) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={3} alignItems="flex-start">
        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          账单信息
        </Typography>

        {addressBook.map((address: any) => (
          <Paper
            key={address.id}
            sx={{
              p: 3,
              width: 1,
              bgcolor: 'background.neutral'
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {address.name}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
                地址: &nbsp;
              </Typography>
              {`${address.street}, ${address.city}, ${address.state}, ${address.country} ${address.zipCode}`}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
                手机号码: &nbsp;
              </Typography>
              {address.phone}
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button
                color="error"
                size="small"
                startIcon={<Icon icon={trash2Fill} />}
                onClick={() => {}}
                sx={{ mr: 1 }}
              >
                删除
              </Button>
              <Button size="small" startIcon={<Icon icon={editFill} />} onClick={() => {}}>
                编辑
              </Button>
            </Box>
          </Paper>
        ))}

        <Button size="small" startIcon={<Icon icon={plusFill} />}>
          添加新地址
        </Button>
      </Stack>
    </Card>
  );
}
