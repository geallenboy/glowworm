import { Container, Typography } from '@mui/material';
import DashboardLayout from 'src/layouts/dashboard';
import useSettings from 'src/hooks/useSettings';
import Page from 'src/components/Page';

export default function PageTwo() {
  const { themeStretch } = useSettings();

  return (
    <DashboardLayout>
      <Page title='页面2'>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant='h3' component='h1' paragraph>
          页面2
          </Typography>
          <Typography gutterBottom>
          美任在eShop上架《空洞骑士 丝之歌》页面,也许预示着官方近期会有些动作。 其实这个页面早在2月份就已经存在了,但根据我们查到的记录显示,在此前的几个月中该页面均为无法访问的状态,直到最近才能显示实际的内容。 此外,本月上旬,开...
          </Typography>
          <Typography>
          继续分享wordpress建站教程。之前悦然wordpress建站给大家分享了如何给网站登陆界面添加验证码，今天再给大家分享一下如何给注册页面添加验证码，进一步提升网站安全性能。话不多说，代...
          </Typography>
        </Container>
      </Page>
    </DashboardLayout>
  );
}
