import refreshFill from '@iconify/icons-eva/refresh-fill';
import { Icon } from '@iconify/react';
import { FormControlLabel, Stack, Switch } from '@mui/material';

import { MIconButton } from '@/components/@material-extend';

export default function Toolbar({
  isText,
  isMulti,
  onChangeText,
  onChangeMulti,
  onRefresh,
  ...other
}: any) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" {...other}>
      <FormControlLabel
        control={<Switch checked={isText} onChange={onChangeText} />}
        label="Text Object"
      />

      <Stack direction="row" alignItems="center">
        {!isText && (
          <FormControlLabel
            control={<Switch checked={isMulti} onChange={onChangeMulti} />}
            label="Multi Item"
          />
        )}
        <MIconButton onClick={onRefresh}>
          <Icon icon={refreshFill} width={20} height={20} />
        </MIconButton>
      </Stack>
    </Stack>
  );
}
