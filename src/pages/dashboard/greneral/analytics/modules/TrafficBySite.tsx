import facebookFill from '@iconify/icons-eva/facebook-fill';
import googleFill from '@iconify/icons-eva/google-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import { Icon } from '@iconify/react';
import { Box, Card, CardContent, CardHeader, Grid, Paper, Typography } from '@mui/material';
import { random } from 'lodash';

import { fShortenNumber } from '@/utils/formatNumber';

const ICON_SIZE = {
  width: 32,
  height: 32
};

const MOCK_SOCIALS = [
  {
    name: 'FaceBook',
    value: random(9999, 99999),
    icon: <Icon icon={facebookFill} color="#1877F2" {...ICON_SIZE} />
  },
  {
    name: 'Google',
    value: random(9999, 99999),
    icon: <Icon icon={googleFill} color="#DF3E30" {...ICON_SIZE} />
  },
  {
    name: 'Linkedin',
    value: random(9999, 99999),
    icon: <Icon icon={linkedinFill} color="#006097" {...ICON_SIZE} />
  },
  {
    name: 'Twitter',
    value: random(9999, 99999),
    icon: <Icon icon={twitterFill} color="#1C9CEA" {...ICON_SIZE} />
  }
];

function SiteItem({ site }) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h6">{fShortenNumber(value)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function TrafficBySite() {
  return (
    <Card>
      <CardHeader title="网站流量" />
      <CardContent>
        <Grid container spacing={2}>
          {MOCK_SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
