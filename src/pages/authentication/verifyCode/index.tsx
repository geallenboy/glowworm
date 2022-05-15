import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import { Icon } from '@iconify/react';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import Page from '@/components/Page';
import { title_main } from '@/config';
import LogoOnlyLayout from '@/layouts/LogoOnlyLayout';
import { PATH_AUTH } from '@/routes/paths';

import { VerifyCodeForm } from './modules';

const RootStyle = styled(Page)(({ theme }: any) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  padding: theme.spacing(12, 0)
}));

export default function VerifyCode() {
  return (
    <RootStyle title={`验证码${title_main}`}>
      <LogoOnlyLayout />

      <Container>
        <Box sx={{ maxWidth: 480, mx: 'auto' }}>
          <Button
            size="small"
            component={RouterLink}
            to={PATH_AUTH.login}
            startIcon={<Icon icon={arrowIosBackFill} width={20} height={20} />}
            sx={{ mb: 3 }}
          >
            返回
          </Button>

          <Typography variant="h3" paragraph>
            请查看您的电子邮件!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            我们已通过电子邮件向acb@domain，输入下面代码框。来验证您的电子邮件。
          </Typography>

          <Box sx={{ mt: 5, mb: 3 }}>
            <VerifyCodeForm />
          </Box>

          <Typography variant="body2" align="center">
            没有收到验证码? &nbsp;
            <Link variant="subtitle2" underline="none" onClick={() => {}}>
              重发验证码
            </Link>
          </Typography>
        </Box>
      </Container>
    </RootStyle>
  );
}
