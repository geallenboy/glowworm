import { LoadingButton } from '@mui/lab';
import { Card, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';

import fakeRequest from '@/utils/fakeRequest';

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();

  const ChangePassWordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('需要旧密码'),
    newPassword: Yup.string().min(6, '密码必须至少为6个字符').required('需要新密码'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], '密码必须匹配')
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    validationSchema: ChangePassWordSchema,
    onSubmit: async (values, { setSubmitting }) => {
      await fakeRequest(500);
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar('保存成功', { variant: 'success' });
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <Card sx={{ p: 3 }}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="flex-end">
            <TextField
              {...getFieldProps('oldPassword')}
              fullWidth
              autoComplete="on"
              type="password"
              label="旧密码"
              error={Boolean(touched.oldPassword && errors.oldPassword)}
              helperText={touched.oldPassword && errors.oldPassword}
            />

            <TextField
              {...getFieldProps('newPassword')}
              fullWidth
              autoComplete="on"
              type="password"
              label="新密码"
              error={Boolean(touched.newPassword && errors.newPassword)}
              helperText={(touched.newPassword && errors.newPassword) || '密码必须至少为6+'}
            />

            <TextField
              {...getFieldProps('confirmNewPassword')}
              fullWidth
              autoComplete="on"
              type="password"
              label="确认新密码"
              error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)}
              helperText={touched.confirmNewPassword && errors.confirmNewPassword}
            />

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              保存修改
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
}
