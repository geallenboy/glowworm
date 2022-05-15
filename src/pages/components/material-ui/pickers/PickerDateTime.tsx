import { DateTimePicker, DesktopDateTimePicker, MobileDateTimePicker } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';

import { Block } from '../../Block';

export default function PickerDateTime() {
  const [value, setValue] = useState(new Date());
  const [valueResponsive, setValueResponsive] = useState(new Date('2018-01-01T00:00:00.000Z'));

  return (
    <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
      <Block title="Basic">
        <DateTimePicker
          renderInput={(props: any) => <TextField {...props} fullWidth />}
          label="DateTimePicker"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
        />
      </Block>

      <Block title="Responsiveness">
        <MobileDateTimePicker
          value={valueResponsive}
          onChange={(newValue: any) => {
            setValueResponsive(newValue);
          }}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
        <DesktopDateTimePicker
          value={valueResponsive}
          onChange={(newValue: any) => {
            setValueResponsive(newValue);
          }}
          renderInput={(params) => <TextField {...params} margin="normal" fullWidth />}
        />
        <DateTimePicker
          value={valueResponsive}
          onChange={(newValue: any) => {
            setValueResponsive(newValue);
          }}
          renderInput={(params) => <TextField {...params} margin="normal" fullWidth />}
        />
      </Block>
    </Stack>
  );
}
