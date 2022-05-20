import { LoadingButton } from '@mui/lab';
import {
  Button,
  Checkbox,
  DialogActions,
  DialogTitle,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import { DialogAnimate } from '@/components/animate';
import countries from '@/utils/mock-data/countries';

export default function CheckoutNewAddressForm({ open, onClose, onNextStep, onCreateBilling }) {
  const NewAddressSchema = Yup.object().shape({
    receiver: Yup.string().required('名称不能为空'),
    phone: Yup.string().required('手机号码不能为空'),
    address: Yup.string().required('地址不能为空'),
    city: Yup.string().required('城市不能为空'),
    state: Yup.string().required('省份不能为空'),
    country: Yup.string().required('国家不能为空')
  });

  const formik = useFormik({
    initialValues: {
      addressType: 'Home',
      receiver: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      country: countries[0].label,
      zipcode: '',
      isDefault: true
    },
    validationSchema: NewAddressSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        onNextStep();
        setSubmitting(true);
        onCreateBilling({
          receiver: values.receiver,
          phone: values.phone,
          fullAddress: `${values.address}, ${values.city}, ${values.state}, ${values.country}, ${values.zipcode}`,
          addressType: values.addressType,
          isDefault: values.isDefault
        });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    }
  });

  const { errors, values, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <DialogAnimate maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>添加新地址</DialogTitle>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={{ xs: 2, sm: 3 }} sx={{ p: 3 }}>
            <RadioGroup row {...getFieldProps('addressType')}>
              <FormControlLabel value="Home" control={<Radio />} label="Home" sx={{ mr: 2 }} />
              <FormControlLabel value="Office" control={<Radio />} label="Office" />
            </RadioGroup>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                label="名称"
                {...getFieldProps('receiver')}
                error={Boolean(touched.receiver && errors.receiver)}
                helperText={touched.receiver && errors.receiver}
              />
              <TextField
                fullWidth
                label="手机号码"
                {...getFieldProps('phone')}
                error={Boolean(touched.phone && errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Stack>

            <TextField
              fullWidth
              label="地址"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                label="城市"
                {...getFieldProps('city')}
                error={Boolean(touched.city && errors.city)}
                helperText={touched.city && errors.city}
              />

              <TextField
                fullWidth
                label="省份"
                {...getFieldProps('state')}
                error={Boolean(touched.state && errors.state)}
                helperText={touched.state && errors.state}
              />

              <TextField
                fullWidth
                label="邮政编码"
                {...getFieldProps('zipcode')}
                error={Boolean(touched.zipcode && errors.zipcode)}
                helperText={touched.zipcode && errors.zipcode}
              />
            </Stack>

            <TextField
              select
              fullWidth
              label="国家"
              placeholder="国家"
              {...getFieldProps('country')}
              SelectProps={{ native: true }}
              error={Boolean(touched.country && errors.country)}
              helperText={touched.country && errors.country}
            >
              {countries.map((option) => (
                <option key={option.code} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <FormControlLabel
              control={<Checkbox checked={values.isDefault} {...getFieldProps('isDefault')} />}
              label="使用此地址作为默认地址."
              sx={{ mt: 3 }}
            />
          </Stack>

          <Divider />

          <DialogActions>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              发送到此地址
            </LoadingButton>
            <Button type="button" color="inherit" variant="outlined" onClick={onClose}>
              取消
            </Button>
          </DialogActions>
        </Form>
      </FormikProvider>
    </DialogAnimate>
  );
}
