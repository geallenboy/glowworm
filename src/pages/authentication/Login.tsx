import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Link,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import { styled } from '@mui/styles';
import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';

import { MHidden } from '@/components/@material-extend';
import AuthFirebaseSocials from '@/components/authentication/AuthFirebaseSocial';
import { LoginForm } from '@/components/authentication/login';
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

export default function Login() {
  const { method, login } = useAuth();

  const handleLoginAuth0 = async () => {
    try {
      await login();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootStyle title="登录 | 后台管理UI">
      <AuthLayout>
        没有账号? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
          开始
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            嗨, 欢迎回来
          </Typography>
          <img src="/static/illustrations/illustration_login.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                登录到后台管理
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>在下面输入您的详细信息.</Typography>
            </Box>

            <Tooltip title={capitalCase(method)}>
              <Box
                component="img"
                src={`/static/auth/ic_${method}.png`}
                sx={{ width: 32, height: 32 }}
              />
            </Tooltip>
          </Stack>

          {method === 'firebase' && <AuthFirebaseSocials />}

          <Alert severity="info" sx={{ mb: 3 }}>
            邮箱 : <strong>demo@minimals.cc</strong> / 密码 :<strong>&nbsp;demo1234</strong>
          </Alert>

          {method !== 'auth0' ? (
            <LoginForm />
          ) : (
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={handleLoginAuth0}
            >
              登录
            </Button>
          )}

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              没有账号?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                开始
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
