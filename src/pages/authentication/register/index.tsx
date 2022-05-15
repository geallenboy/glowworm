import { Box, Card, Container, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import { MHidden } from '@/components/@material-extend';
import Page from '@/components/Page';
import { title_main } from '@/config';
import useAuth from '@/hooks/useAuth';
import AuthLayout from '@/layouts/AuthLayout';
import { PATH_AUTH } from '@/routes/paths';

import AuthFirebaseSocials from '../AuthFirebaseSocial';
import { RegisterForm } from './modules';

const RootStyle = styled(Page)(({ theme }: any) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }: any) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }: any) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

export default function Register() {
  const { method } = useAuth();

  return (
    <RootStyle title={`注册${title_main}`}>
      <AuthLayout>
        已经有账户了? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
          登录
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            最少的成本更有效地管理工作
          </Typography>
          <img alt="register" src="/static/illustrations/illustration_register.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                现在开始.
              </Typography>
            </Box>
          </Box>

          {method === 'firebase' && <AuthFirebaseSocials />}

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            我同意&nbsp;
            <Link underline="always" color="text.primary" href="#">
              服务条款
            </Link>
            &nbsp;和&nbsp;
            <Link underline="always" color="text.primary" href="#">
              隐私政策
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              已经有账户了?&nbsp;
              <Link to={PATH_AUTH.login} component={RouterLink}>
                登录
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
