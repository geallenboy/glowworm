import attach2Fill from '@iconify/icons-eva/attach-2-fill';
import roundAddPhotoAlternate from '@iconify/icons-ic/round-add-photo-alternate';
import { Icon } from '@iconify/react';
import { Button, OutlinedInput, Paper, Stack, Tooltip } from '@mui/material';

import { MIconButton } from '@/components/@material-extend';
import MyAvatar from '@/components/MyAvatar';

export default function KanbanTaskCommentInput() {
  return (
    <Stack direction="row" spacing={2} sx={{ py: 3, px: 2.5 }}>
      <MyAvatar />

      <Paper variant="outlined" sx={{ p: 1, flexGrow: 1 }}>
        <OutlinedInput
          fullWidth
          multiline
          // row={2}
          placeholder="键入消息"
          sx={{ '& fieldset': { display: 'none' } }}
        />

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={0.5}>
            <Tooltip title="添加照片">
              <MIconButton size="small">
                <Icon icon={roundAddPhotoAlternate} width={20} height={20} />
              </MIconButton>
            </Tooltip>
            <Tooltip title="附件">
              <MIconButton size="small">
                <Icon icon={attach2Fill} width={20} height={20} />
              </MIconButton>
            </Tooltip>
          </Stack>

          <Button variant="contained">评论</Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
