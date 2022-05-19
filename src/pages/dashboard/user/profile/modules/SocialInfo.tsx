import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import { Icon } from '@iconify/react';
import { Card, CardHeader, Link, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2)
}));

export default function SocialInfo({ profile }: any) {
  const { facebookLink, instagramLink, linkedinLink, twitterLink } = profile;

  const SOCIALS = [
    {
      name: 'Linkedin',
      icon: <IconStyle icon={linkedinFill} color="#006097" />,
      href: linkedinLink
    },
    {
      name: 'Twitter',
      icon: <IconStyle icon={twitterFill} color="#1C9CEA" />,
      href: twitterLink
    },
    {
      name: 'Instagram',
      icon: <IconStyle icon={instagramFilled} color="#D7336D" />,
      href: instagramLink
    },
    {
      name: 'Facebook',
      icon: <IconStyle icon={facebookFill} color="#1877F2" />,
      href: facebookLink
    }
  ];

  return (
    <Card>
      <CardHeader title="其它" />
      <Stack spacing={2} sx={{ p: 3 }}>
        {SOCIALS.map((link) => (
          <Stack key={link.name} direction="row" alignItems="center">
            {link.icon}
            <Link component="span" variant="body2" color="text.primary" noWrap>
              {link.href}
            </Link>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
