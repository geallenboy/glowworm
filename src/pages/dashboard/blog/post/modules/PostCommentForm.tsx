import { LoadingButton } from '@mui/lab';
import { Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';

import fakeRequest from '@/utils/fakeRequest';

const RootStyles = styled('div')(({ theme }: any) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor: theme.palette.background.neutral
}));

export default function PostCommentForm() {
  const { enqueueSnackbar } = useSnackbar();

  const CommentSchema = Yup.object().shape({
    comment: Yup.string().required('评论不能为空'),
    name: Yup.string().required('姓名不能为空'),
    email: Yup.string().email('邮箱地址格式不正确').required('邮箱不能为空')
  });

  const formik: any = useFormik({
    initialValues: {
      comment: '',
      name: '',
      email: ''
    },
    validationSchema: CommentSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        await fakeRequest(500);
        resetForm();
        setSubmitting(false);
        enqueueSnackbar('成', { variant: 'success' });
      } catch (error: any) {
        console.error(error);
        setSubmitting(false);
        setErrors({ afterSubmit: error.code } as any);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <RootStyles>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        添加评论
      </Typography>

      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="flex-end">
            <TextField
              fullWidth
              multiline
              minRows={3}
              maxRows={5}
              label="评论内容 *"
              {...getFieldProps('comment')}
              error={Boolean(touched.comment && errors.comment)}
              helperText={touched.comment && errors.comment}
            />

            <TextField
              fullWidth
              label="姓名 *"
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              label="邮箱 *"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              发表评论
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </RootStyles>
  );
}
