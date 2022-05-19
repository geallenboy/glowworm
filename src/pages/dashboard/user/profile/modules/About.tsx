import emailFill from '@iconify/icons-eva/email-fill';
import pinFill from '@iconify/icons-eva/pin-fill';
import roundBusinessCenter from '@iconify/icons-ic/round-business-center';
import { Icon } from '@iconify/react';
import { Card, CardHeader, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2)
}));

export default function About({ profile }: any) {
  const { quote, country, email, role, company, school } = profile;

  return (
    <Card>
      <CardHeader title="关于" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="body2">{quote}</Typography>

        <Stack direction="row">
          <IconStyle icon={pinFill} />
          <Typography variant="body2">
            住在 &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {country}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={emailFill} />
          <Typography variant="body2">{email}</Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={roundBusinessCenter} />
          <Typography variant="body2">
            {role} 在 &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {company}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={roundBusinessCenter} />
          <Typography variant="body2">
            学习地点 &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {school}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
