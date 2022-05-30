import { DateRangePicker, DesktopDateRangePicker, StaticDateRangePicker } from '@mui/lab';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro';
import { useState } from 'react';

import { Block } from '../../Block';

export default function PickerDateRange() {
  const [value, setValue] = useState([null, null]);

  return (
    <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
      <Stack spacing={3} sx={{ width: 1 }}>
        <Block title="Basic">
          <DateRangePicker
            startText="Check-in"
            endText="Check-out"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}>to</Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </Block>

        <Block title="Responsiveness">
          <MobileDateRangePicker
            startText="Mobile start"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </>
            )}
          />
          <br />

          <DesktopDateRangePicker
            startText="Desktop start"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </Block>

        <Block title="Different number of months">
          <Typography gutterBottom> 1 calendar </Typography>
          <DateRangePicker
            calendars={1}
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}>to</Box>
                <TextField {...endProps} />
              </>
            )}
          />

          <br />

          <Typography gutterBottom> 2 calendars</Typography>
          <DateRangePicker
            calendars={2}
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}>to</Box>
                <TextField {...endProps} />
              </>
            )}
          />

          <br />

          <Typography gutterBottom> 3 calendars</Typography>
          <DateRangePicker
            calendars={3}
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}>to</Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </Block>
      </Stack>

      <Block title="Static mode">
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
          renderInput={(startProps: any, endProps: any) => (
            <>
              <TextField {...startProps} variant="standard" />
              <Box sx={{ mx: 2 }}>to</Box>
              <TextField {...endProps} variant="standard" />
            </>
          )}
        />
      </Block>
    </Stack>
  );
}
