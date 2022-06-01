import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { MotionInView, varFadeInDown, varFadeInUp } from 'src/components/animate';

const ContentStyle = styled('div')(({ theme }:any) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadius,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 0,
    alignItems: 'center'
  }
}));

export default function Advertisement() {
  return (
    <Container maxWidth="lg">
      <ContentStyle>
        <MotionInView
          variants={varFadeInUp}
          sx={{
            mb: { xs: 3, md: 0 }
          }}
        >
          <motion.div animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }}>
            <Box
              component="img"
              alt="rocket"
              src="/static/home/rocket.png"
              sx={{ maxWidth: 460, width: 1 }}
            />
          </motion.div>
        </MotionInView>

        <Box
          sx={{
            pl: { md: 10 },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 5 }}>
            <Typography variant="h2">开始使用</Typography>
          </MotionInView>
        </Box>
      </ContentStyle>
    </Container>
  );
}
