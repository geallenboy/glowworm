import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import { Card, InputAdornment, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import { useSelector } from '@/redux/store';
import fakeRequest from '@/utils/fakeRequest';

const SOCIAL_LINKS_OPTIONS = [
  {
    value: 'facebookLink',
    icon: <Icon icon={facebookFill} height={24} />
  },
  {
    value: 'instagramLink',
    icon: <Icon icon={instagramFilled} height={24} />
  },
  {
    value: 'linkedinLink',
    icon: <Icon icon={linkedinFill} height={24} />
  },
  {
    value: 'twitterLink',
    icon: <Icon icon={twitterFill} height={24} />
  }
];

export default function AccountSocialLinks() {
  const { enqueueSnackbar } = useSnackbar();
  const { myProfile } = useSelector((state: any) => state.user);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      facebookLink: myProfile.facebookLink,
      instagramLink: myProfile.instagramLink,
      linkedinLink: myProfile.linkedinLink,
      twitterLink: myProfile.twitterLink
    },
    onSubmit: async (values, { setSubmitting }) => {
      await fakeRequest(500);
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar('保存修改', { variant: 'success' });
    }
  });

  const { handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Card sx={{ p: 3 }}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="flex-end">
            {SOCIAL_LINKS_OPTIONS.map((link) => (
              <TextField
                key={link.value}
                fullWidth
                {...getFieldProps(link.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">{link.icon}</InputAdornment>
                }}
              />
            ))}

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              保存修改
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
}
