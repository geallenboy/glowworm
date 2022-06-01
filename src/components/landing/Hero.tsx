import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import {
  Box,
  Link,
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { PATH_DASHBOARD } from 'src/routes/paths';
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
} from 'src/components/animate';

const RootStyle = styled(motion.div)(({ theme }:any) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props:any) => <Stack spacing={5} {...props} />)(
  ({ theme }:any) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'left',
    },
  })
);

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

export default function Hero() {
  return (
    <>
      <RootStyle initial='initial' animate='animate' variants={varWrapEnter}>
        <HeroOverlayStyle
          alt='overlay'
          src='/static/overlay.svg'
          variants={varFadeIn}
        />

        <HeroImgStyle
          alt='hero'
          src='/static/home/hero.png'
          variants={varFadeInUp}
        />

        <Container maxWidth='lg'>
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant='h1' sx={{ color: 'common.white' }}>
                <br />
                开始一个新项目
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>
                基于 Material-UI 帮助你更快更好的构建应用
              </Typography>
            </motion.div>

            

            <motion.div variants={varFadeInRight}>
              <NextLink href={PATH_DASHBOARD.root}>
                <Button
                  size='large'
                  variant='contained'
                  startIcon={<Icon icon={flashFill} width={20} height={20} />}
                >
                  预览
                </Button>
              </NextLink>
            </motion.div>

            <Stack
              direction='row'
              spacing={1.5}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
               <motion.img variants={varFadeInRight} src="/static/home/ic_material.svg" />
              <motion.img variants={varFadeInRight} src="/static/home/ic_react.svg" />
              <motion.img variants={varFadeInRight} src="/static/home/ic_ts.svg" />
              <motion.img variants={varFadeInRight} src="/static/home/ic_vite.svg" />
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
