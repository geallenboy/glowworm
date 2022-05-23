import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import roundViewAgenda from '@iconify/icons-ic/round-view-agenda';
import roundViewDay from '@iconify/icons-ic/round-view-day';
import roundViewModule from '@iconify/icons-ic/round-view-module';
import roundViewWeek from '@iconify/icons-ic/round-view-week';
import { Icon } from '@iconify/react';
import { Box, Button, IconButton, Stack, ToggleButton, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { MHidden } from '@/components/@material-extend';
import { fDate } from '@/utils/formatTime';

const VIEW_OPTIONS = [
  { value: 'dayGridMonth', label: 'Month', icon: roundViewModule },
  { value: 'timeGridWeek', label: 'Week', icon: roundViewWeek },
  { value: 'timeGridDay', label: 'Day', icon: roundViewDay },
  { value: 'listWeek', label: 'Agenda', icon: roundViewAgenda }
];

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3, 0),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: theme.spacing(1.75, 3),
    justifyContent: 'space-between'
  }
}));

export default function CalendarToolbar({
  date,
  view,
  onNextDate,
  onPrevDate,
  onToday,
  onChangeView,
  ...other
}) {
  return (
    <RootStyle {...other}>
      <MHidden width="smDown">
        <Stack direction="row" spacing={1.5}>
          {VIEW_OPTIONS.map((viewOption) => (
            <Tooltip key={viewOption.value} title={viewOption.label}>
              <ToggleButton
                value={view}
                selected={viewOption.value === view}
                onChange={() => onChangeView(viewOption.value)}
                sx={{ width: 32, height: 32, padding: 0 }}
              >
                <Icon icon={viewOption.icon} width={20} height={20} />
              </ToggleButton>
            </Tooltip>
          ))}
        </Stack>
      </MHidden>

      <Typography variant="h5" sx={{ my: { xs: 1, sm: 0 } }}>
        {fDate(date)}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={onPrevDate}>
          <Icon icon={arrowIosBackFill} width={18} height={18} />
        </IconButton>

        <Button size="small" color="error" variant="contained" onClick={onToday} sx={{ mx: 0.5 }}>
          Today
        </Button>

        <IconButton onClick={onNextDate}>
          <Icon icon={arrowIosForwardFill} width={18} height={18} />
        </IconButton>
      </Box>
    </RootStyle>
  );
}
