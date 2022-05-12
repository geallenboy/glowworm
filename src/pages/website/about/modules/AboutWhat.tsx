import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import { Icon } from '@iconify/react';
import { alpha, Box, Button, Container, Grid, LinearProgress, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/styles';

import { MHidden } from '@/components/@material-extend';
import { MotionInView, varFadeInRight, varFadeInUp } from '@/components/animate';
import { fPercent } from '@/utils/formatNumber';
import mockData from '@/utils/mock-data';

const LABEL = ['开发', '设计', '营销'];

const MOCK_SKILLS = [...Array(3)].map((_, index) => ({
  label: LABEL[index],
  value: mockData.number.percent(index)
}));

const RootStyle = styled('div')(({ theme }: any) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  }
}));

function ProgressItem({ progress }: any) {
  const { label, value } = progress;
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' }
        }}
      />
    </Box>
  );
}

export default function AboutWhat() {
  const theme: any = useTheme();
  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <MHidden width="mdDown">
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/static/about/what-1.jpg"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow
                      }}
                    />
                  </MotionInView>
                </Grid>
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box component="img" src="/static/about/what-2.jpg" sx={{ borderRadius: 2 }} />
                  </MotionInView>
                </Grid>
              </Grid>
            </Grid>
          </MHidden>

          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                能做什么?
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography
                sx={{
                  color: (theme: any) =>
                    theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'
                }}
              >
                简单快速搭建应用程序
              </Typography>
            </MotionInView>

            <Box sx={{ my: 5 }}>
              {MOCK_SKILLS.map((progress: any) => (
                <MotionInView key={progress.label} variants={varFadeInRight}>
                  <ProgressItem progress={progress} />
                </MotionInView>
              ))}
            </Box>

            <MotionInView variants={varFadeInRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
              >
                开始工作
              </Button>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
