import refreshFill from '@iconify/icons-eva/refresh-fill';
import { Icon } from '@iconify/react';
import { Paper } from '@mui/material';

import { MIconButton } from '@/components/@material-extend';

export default function Toolbar({ onRefresh, sx, ...other }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...sx
      }}
      {...other}
    >
      <MIconButton onClick={onRefresh}>
        <Icon icon={refreshFill} width={20} height={20} />
      </MIconButton>
    </Paper>
  );
}
