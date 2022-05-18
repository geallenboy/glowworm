import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { SentIcon } from '@/assets/svg';
import Page from '@/components/Page';
import { title_main } from '@/config';
import LogoOnlyLayout from '@/layouts/LogoOnlyLayout';
import { PATH_AUTH } from '@/routes/paths';

import { ResetPasswordForm } from './modules';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <RootStyle title={`重置密码${title_main}`}>
      <LogoOnlyLayout />

      <Container>
        <Box sx={{ maxWidth: 480, mx: 'auto' }}>
          {!sent ? (
            <>
              <Typography variant="h3" paragraph>
                忘记密码?
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                请输入您的帐户关联的电子邮件地址，我们将向您发送电子邮件链接以重置密码
              </Typography>

              <ResetPasswordForm
                onSent={() => setSent(true)}
                onGetEmail={(value) => setEmail(value)}
              />

              <Button
                fullWidth
                size="large"
                component={RouterLink}
                to={PATH_AUTH.login}
                sx={{ mt: 1 }}
              >
                返回
              </Button>
            </>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <SentIcon sx={{ mb: 5, mx: 'auto', height: 160 }} />

              <Typography variant="h3" gutterBottom>
                发送成功
              </Typography>
              <Typography>
                我们已向发送了确认电子邮件&nbsp;
                <strong>{email}</strong>
                <br />
                请查看您的电子邮件。
              </Typography>

              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_AUTH.login}
                sx={{ mt: 5 }}
              >
                Back
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </RootStyle>
  );
}
