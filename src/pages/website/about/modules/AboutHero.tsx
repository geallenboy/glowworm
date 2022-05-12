import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { motion } from 'framer-motion';

import { TextAnimate, varFadeInRight, varWrapEnter } from '@/components/animate';

const RootStyle = styled(motion.div)(({ theme }: any) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/about/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }: any) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10)
  }
}));

export default function AboutHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="我们" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="是" sx={{ mr: 2 }} />
            <TextAnimate text="谁?" />
          </Box>

          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium'
              }}
            >
              我们携手合作 <br />
              轻松打造一个很棒的网站
            </Typography>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
