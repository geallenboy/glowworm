import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';

import { SeverErrorIllustration } from '@/assets/svg';
import Page from '@/components/Page';

const RootStyle = styled(Page)(({ theme }: any) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

export default function Page500() {
  return (
    <RootStyle title="内部服务器错误">
      <Container>
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            内部服务器错误
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>出现错误，请稍后再试。</Typography>

          <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            首页
          </Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
