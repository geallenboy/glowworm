import { DesktopTimePicker, MobileTimePicker, StaticTimePicker, TimePicker } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';

import { Block } from '../../Block';

export default function PickerTime() {
  const [value, setValue] = useState(new Date());

  return (
    <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
      <Stack spacing={3} sx={{ width: 1 }}>
        <Block title="Basic">
          <TimePicker
            label="12 hours"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField fullWidth {...params} margin="normal" />}
          />
          <TimePicker
            ampm={false}
            label="24 hours"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField fullWidth {...params} margin="normal" />}
          />
        </Block>

        <Block title="Responsiveness">
          <MobileTimePicker
            orientation="portrait"
            label="For mobile"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
          />
          <DesktopTimePicker
            label="For desktop"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} margin="normal" fullWidth />}
          />
          <TimePicker
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} margin="normal" fullWidth />}
          />
        </Block>
      </Stack>

      <Block title="Static mode">
        <Stack spacing={3}>
          <StaticTimePicker
            orientation="portrait"
            displayStaticWrapperAs="mobile"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />

          <StaticTimePicker
            ampm
            orientation="landscape"
            openTo="minutes"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </Block>
    </Stack>
  );
}
