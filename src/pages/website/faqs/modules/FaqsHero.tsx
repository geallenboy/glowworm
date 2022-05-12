import searchFill from '@iconify/icons-eva/search-fill';
import { Icon } from '@iconify/react';
import { alpha, Box, Container, InputAdornment, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import {
  MotionInView,
  TextAnimate,
  varFadeInRight,
  varFadeInUp,
  varWrapEnter
} from '@/components/animate';

const RootStyle = styled(motion.div)(({ theme }: any) => ({
  backgroundSize: 'cover',
  backgroundImage: 'url(/static/overlay.svg), url(/static/faqs/hero.jpg)',
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

const SearchStyle = styled(OutlinedInput)(({ theme }: any) => ({
  width: 320,
  color: theme.palette.common.white,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': {
    backgroundColor: alpha(theme.palette.common.white, 0.04),
    [theme.breakpoints.up('md')]: {
      width: 480
    }
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

export default function FaqsHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="我们" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="能" sx={{ mr: 2 }} />
            <TextAnimate text="帮您" sx={{ mr: 2 }} />
            <TextAnimate text="什么?" />
          </Box>

          <MotionInView variants={varFadeInUp} sx={{ mt: 5 }}>
            <SearchStyle
              placeholder="搜索支持"
              startAdornment={
                <InputAdornment position="start">
                  <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              }
            />
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
