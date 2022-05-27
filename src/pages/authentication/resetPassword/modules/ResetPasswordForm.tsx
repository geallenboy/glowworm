import { LoadingButton } from '@mui/lab';
import { Alert, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import useAuth from '@/hooks/useAuth';
import useIsMountedRef from '@/hooks/useIsMountedRef';

export default function ResetPasswordForm({ onSent, onGetEmail }: any) {
  const { resetPassword } = useAuth();
  const isMountedRef = useIsMountedRef();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('必须是有效的电子邮件').required('电子邮件是必须的')
  });

  const formik: any = useFormik({
    initialValues: {
      email: 'demo@163.com'
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values: any, { setErrors, setSubmitting }: any) => {
      try {
        await resetPassword(values.email);
        if (isMountedRef.current) {
          onSent();
          onGetEmail(formik.values.email);
          setSubmitting(false);
        }
      } catch (error: any) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <TextField
            fullWidth
            {...getFieldProps('email')}
            type="email"
            label="邮箱地址"
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            重置密码
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
