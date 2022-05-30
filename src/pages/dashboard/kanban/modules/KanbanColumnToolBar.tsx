import editFill from '@iconify/icons-eva/edit-fill';
import moreHorizontalFill from '@iconify/icons-eva/more-horizontal-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import { Icon } from '@iconify/react';
import { Box, MenuItem, OutlinedInput, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { MIconButton } from '@/components/@material-extend';
import MenuPopover from '@/components/MenuPopover';

export default function KanbanColumnToolBar({ columnName, onDelete, onUpdate }: any) {
  const anchorRef: any = useRef(null);
  const renameRef: any = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(columnName);

  useEffect(() => {
    if (open) {
      if (renameRef !== null) {
        renameRef.current.focus();
      }
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickRename = () => {
    handleClose();
  };

  const handleChangeColumnName = (event: any) => {
    setValue(event.target.value);
  };

  const handleUpdateColumn = (event: any) => {
    if (event.key === 'Enter') {
      renameRef.current.blur();
      onUpdate(event.target.value);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        sx={{ pt: 3 }}
      >
        <OutlinedInput
          inputRef={renameRef}
          size="small"
          placeholder="节点名称"
          value={value}
          onChange={handleChangeColumnName}
          onKeyUp={handleUpdateColumn}
          sx={{
            typography: 'h6',
            fontWeight: 'fontWeightBold',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            }
          }}
        />

        <MIconButton
          ref={anchorRef}
          size="small"
          onClick={handleOpen}
          color={open ? 'inherit' : 'default'}
        >
          <Icon icon={moreHorizontalFill} width={20} height={20} />
        </MIconButton>
      </Stack>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ py: 1, width: 'auto' }}
      >
        <MenuItem onClick={handleClickRename} sx={{ py: 0.75, px: 1.5 }}>
          <Box
            component={Icon}
            icon={editFill}
            sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }}
          />
          <Typography variant="body2">重命名节点</Typography>
        </MenuItem>
        <MenuItem onClick={onDelete} sx={{ py: 0.75, px: 1.5 }}>
          <Box
            component={Icon}
            icon={trash2Outline}
            sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }}
          />
          <Typography variant="body2">删除节点</Typography>
        </MenuItem>
      </MenuPopover>
    </>
  );
}
