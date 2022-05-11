import { Box, Card, Container, Link, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';

import { MHidden } from '@/components/@material-extend';
import AuthFirebaseSocials from '@/components/authentication/AuthFirebaseSocial';
import { RegisterForm } from '@/components/authentication/register';
import Page from '@/components/Page';
import useAuth from '@/hooks/useAuth';
import AuthLayout from '@/layouts/AuthLayout';
import { PATH_AUTH } from '@/routes/paths';

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
    <RootStyle title="Register | Minimal-UI">
      <AuthLayout>
        已经有账户了? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
          登录
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            以最少的成本更有效地管理工作
          </Typography>
          <img alt="register" src="/static/illustrations/illustration_register.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                完全免费开始.
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Free forever. No credit card needed.
              </Typography>
            </Box>
            <Tooltip title={capitalCase(method)}>
              <Box
                component="img"
                src={`/static/auth/ic_${method}.png`}
                sx={{ width: 32, height: 32 }}
              />
            </Tooltip>
          </Box>

          {method === 'firebase' && <AuthFirebaseSocials />}

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            通过注册, 我同意到 Minimal&nbsp;
            <Link underline="always" color="text.primary" href="#">
              服务条款
            </Link>
            &nbsp;and&nbsp;
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
