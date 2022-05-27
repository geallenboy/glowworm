import androidFilled from '@iconify/icons-ant-design/android-filled';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
import windowsFilled from '@iconify/icons-ant-design/windows-filled';
import { Icon } from '@iconify/react';
import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { random } from 'lodash';

import Scrollbar from '@/components/Scrollbar';
import { fShortenNumber } from '@/utils/formatNumber';
import mockData from '@/utils/mock-data';

const MOCK_INSTALLED = ['cn', 'en', 'fr', 'kr', 'us'].map((country, index) => ({
  id: mockData.id(index),
  name:
    (country === 'cn' && 'china') ||
    (country === 'en' && 'England') ||
    (country === 'fr' && 'France') ||
    (country === 'kr' && 'Korean') ||
    'USA',
  android: random(99999),
  windows: random(99999),
  apple: random(99999),
  flag: `/static/icons/ic_flag_${country}.svg`
}));

const ItemBlockStyle = styled((props) => <Stack direction="row" alignItems="center" {...props} />)({
  minWidth: 72,
  flex: '1 1'
});

const ItemIconStyle = styled(Icon)(({ theme }) => ({
  width: 16,
  height: 16,
  marginRight: theme.spacing(0.5),
  color: theme.palette.text.disabled
}));

function CountryItem({ country }: any) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <ItemBlockStyle sx={{ minWidth: 120 }}>
        <Box component="img" alt={country.name} src={country.flag} sx={{ height: 20, mr: 1 }} />
        <Typography variant="subtitle2">{country.name}</Typography>
      </ItemBlockStyle>
      <ItemBlockStyle>
        <ItemIconStyle icon={androidFilled} />
        <Typography variant="body2">{fShortenNumber(country.android)}</Typography>
      </ItemBlockStyle>
      <ItemBlockStyle>
        <ItemIconStyle icon={windowsFilled} />
        <Typography variant="body2">{fShortenNumber(country.windows)}</Typography>
      </ItemBlockStyle>
      <ItemBlockStyle sx={{ minWidth: 88 }}>
        <ItemIconStyle icon={appleFilled} />
        <Typography variant="body2">{fShortenNumber(country.windows)}</Typography>
      </ItemBlockStyle>
    </Stack>
  );
}

export default function AppTopInstalledCountries() {
  return (
    <Card>
      <CardHeader title="热门安装国家" />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3 }}>
          {MOCK_INSTALLED.map((country) => (
            <CountryItem key={country.id} country={country} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}
