import { Button, Stack, TextField, Typography } from '@mui/material';

import { MotionInView, varFadeInUp } from '@/components/animate';

export default function Form() {
  return (
    <Stack spacing={5}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3">
          请随时与我们联系
          <br />
          我们很高兴听到你的消息 朋友.
        </Typography>
      </MotionInView>

      <Stack spacing={3}>
        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="姓名" />
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="邮箱" />
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="工作" />
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="请在这里输入您的信息." multiline rows={4} />
        </MotionInView>
      </Stack>

      <MotionInView variants={varFadeInUp}>
        <Button size="large" variant="contained">
          提交
        </Button>
      </MotionInView>
    </Stack>
  );
}
