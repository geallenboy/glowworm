import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';

import { MaintenanceIllustration } from '@/assets/svg';
import Page from '@/components/Page';

const RootStyle = styled(Page)(({ theme }: any) => ({
  minHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

export default function Maintenance() {
  return (
    <RootStyle title="维护">
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h3" paragraph>
          网站目前正在维护中
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>我们正在努力修复!</Typography>

        <MaintenanceIllustration sx={{ my: 10, height: 240 }} />

        <Button variant="contained" size="large" component={RouterLink} to="/">
          首页
        </Button>
      </Container>
    </RootStyle>
  );
}
