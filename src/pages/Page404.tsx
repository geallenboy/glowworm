import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

import { PageNotFoundIllustration } from '@/assets/svg';
import { MotionContainer, varBounceIn } from '@/components/animate';
import Page from '@/components/Page';

const RootStyle = styled(Page)(({ theme }: any) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

export default function Page404() {
  return (
    <RootStyle title="没找到页面">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                对不起, 页面没有发现!
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              抱歉，我们找不到您要查找的页面。也许你打错了网址？一定要检查你的拼写。
            </Typography>

            <motion.div variants={varBounceIn}>
              <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
            </motion.div>

            <Button to="/" size="large" variant="contained" component={RouterLink}>
              首页
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
