import { Box, Container, Grid, Typography } from '@mui/material';

import { MotionInView, varFadeInUp } from '@/components/animate';

export default function AboutVision() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <img src="/static/about/vision.jpg" alt="about-vision" />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              我们希望提供最佳产品
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
