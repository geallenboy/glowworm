import { RingProgressChart } from '@garron/react-chart';
import emailFill from '@iconify/icons-eva/email-fill';
import { Icon } from '@iconify/react';
import { Box, Card, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { fNumber, fPercent } from '@/utils/formatNumber';

const RootStyle = styled(Card)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.warning.darker
}));

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 120,
  height: 120,
  opacity: 0.12,
  position: 'absolute',
  right: theme.spacing(-3),
  color: theme.palette.common.white
}));

const TOTAL = 55566;

export default function AppWidgets2() {
  const theme = useTheme();
  const config = {
    height: 86,
    width: 86,
    autoFit: false,
    percent: 0.87,
    statistic: {
      content: {
        style: {
          color: theme.palette.text.primary,
          fontSize: '18px'
        },
        customHtml: (container: any, view: any, datum: any, data: any[]) => {
          return `${fPercent(data[0].percent * 100)}`;
        }
      }
    },
    color: [theme.palette.chart.yellow[0], theme.palette.primary.main]
  };
  return (
    <RootStyle>
      <RingProgressChart {...config} />
      <Box sx={{ ml: 3, color: 'common.white' }}>
        <Typography variant="h4"> {fNumber(TOTAL)}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.72 }}>
          转化
        </Typography>
      </Box>
      <IconStyle icon={emailFill} />
    </RootStyle>
  );
}
