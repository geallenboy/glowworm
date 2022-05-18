import flashFill from '@iconify/icons-eva/flash-fill';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import { Avatar, Box, Button, Card, CardHeader, Stack, Tooltip, Typography } from '@mui/material';

import { MIconButton } from '@/components/@material-extend';
import mockData from '@/utils/mock-data';

const MOCK_CONTACTS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  email: mockData.email(index),
  avatar: mockData.image.avatar(index + 4)
}));

export default function Contacts() {
  return (
    <Card>
      <CardHeader
        title="联系人"
        subheader="你有122联系人"
        action={
          <Tooltip title="添加联系人">
            <MIconButton color="primary" size="large">
              <Icon icon={plusFill} width={20} height={20} />
            </MIconButton>
          </Tooltip>
        }
      />
      <Stack spacing={3} sx={{ p: 3 }}>
        {MOCK_CONTACTS.map((contact) => (
          <Stack direction="row" alignItems="center" key={contact.id}>
            <Avatar src={contact.avatar} sx={{ width: 48, height: 48 }} />
            <Box sx={{ flexGrow: 1, ml: 2, minWidth: 100 }}>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }} noWrap>
                {contact.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                {contact.email}
              </Typography>
            </Box>

            <Tooltip title="快速转移">
              <MIconButton size="small">
                <Icon icon={flashFill} width={22} height={22} />
              </MIconButton>
            </Tooltip>
          </Stack>
        ))}

        <Button variant="outlined" size="large" color="inherit">
          显示所有
        </Button>
      </Stack>
    </Card>
  );
}
