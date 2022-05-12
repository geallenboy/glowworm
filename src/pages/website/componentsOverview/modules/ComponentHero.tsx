import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import { Icon } from '@iconify/react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/styles';
import { motion } from 'framer-motion';

import { MHidden } from '@/components/@material-extend';
import { varFadeInDown, varFadeInUp, varWrapEnter } from '@/components/animate';

const RootStyle = styled('div')(({ theme }: any) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
}));

export default function ComponentHero() {
  const theme: any = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <motion.div initial="initial" animate="animate" variants={varWrapEnter}>
        <Container
          maxWidth="lg"
          sx={{
            display: { md: 'flex' },
            justifyContent: { md: 'space-between' }
          }}
        >
          <div>
            <motion.div variants={varFadeInUp}>
              <Typography variant="h3" component="h1">
                组件
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography
                sx={{
                  mt: 3,
                  mb: 5,
                  color: isLight ? 'text.secondary' : 'common.white'
                }}
              >
                利用巨大的资源包进行部署简单且更有效地扩展
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Link href="https://www.sketch.com" target="_blank">
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ display: 'inline-flex' }}
                >
                  <Typography variant="button">快速预览</Typography>
                  <Icon icon={roundArrowRightAlt} width={20} height={20} />
                </Stack>
              </Link>
            </motion.div>
          </div>

          <MHidden width="mdDown">
            <motion.div variants={varFadeInDown}>
              <Box
                component="img"
                src="/static/illustrations/illustration_components.png"
                sx={{ maxHeight: 320 }}
              />
            </motion.div>
          </MHidden>
        </Container>
      </motion.div>
    </RootStyle>
  );
}
