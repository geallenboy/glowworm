import { LoadingButton } from '@mui/lab';
import { Card, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import { useSelector } from '@/redux/store';
import fakeRequest from '@/utils/fakeRequest';

const ACTIVITY_OPTIONS = [
  {
    value: 'activityComments',
    label: '有人对我的文章发表评论时给我发电子邮件'
  },
  {
    value: 'activityAnswers',
    label: '当有人在我的表格上回答时，给我发电子邮件'
  },
  { value: 'activityFollows', label: '当有人跟踪我时给我发电子邮件' }
];

const APPLICATION_OPTIONS = [
  { value: 'applicationNews', label: '新闻和公告' },
  { value: 'applicationProduct', label: '每周产品更新' },
  { value: 'applicationBlog', label: '每周博客摘要' }
];

export default function AccountNotifications() {
  const { enqueueSnackbar } = useSnackbar();
  const { notifications } = useSelector((state: any) => state.user);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      activityComments: notifications.activityComments,
      activityAnswers: notifications.activityAnswers,
      activityFollows: notifications.activityFollows,
      applicationNews: notifications.applicationNews,
      applicationProduct: notifications.applicationProduct,
      applicationBlog: notifications.applicationBlog
    },
    onSubmit: async (values, { setSubmitting }) => {
      await fakeRequest(500);
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar('保存成功', { variant: 'success' });
    }
  });

  const { values, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <Card sx={{ p: 3 }}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="flex-end">
            <Stack spacing={2} sx={{ width: 1 }}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                活动
              </Typography>
              <Stack spacing={1} alignItems="flex-start">
                {ACTIVITY_OPTIONS.map((activity: any) => (
                  <FormControlLabel
                    key={activity.value}
                    control={
                      <Switch {...getFieldProps(activity.value)} checked={values[activity.value]} />
                    }
                    label={activity.label}
                    sx={{ mx: 0 }}
                  />
                ))}
              </Stack>
            </Stack>

            <Stack spacing={2} sx={{ width: 1 }}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                应用
              </Typography>
              <Stack spacing={1} alignItems="flex-start">
                {APPLICATION_OPTIONS.map((item: any) => (
                  <FormControlLabel
                    key={item.value}
                    control={<Switch {...getFieldProps(item.value)} checked={values[item.value]} />}
                    label={item.label}
                    sx={{ mx: 0 }}
                  />
                ))}
              </Stack>
            </Stack>

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              保存修改
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
}
