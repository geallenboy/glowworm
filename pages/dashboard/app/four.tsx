import { Container, Typography } from '@mui/material';
import DashboardLayout from 'src/layouts/dashboard';
import useSettings from 'src/hooks/useSettings';
import Page from 'src/components/Page';


export default function PageFour() {
  const { themeStretch } = useSettings();

  return (
    <DashboardLayout>
      <Page title='页面4'>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant='h3' component='h1' paragraph>
          页面4
          </Typography>
          <Typography gutterBottom>
          白金工作室上线了一个神秘的新页面,整个页面只有一个数字“4”,让人摸不着头脑,或者是一个倒计时,或者是其他什么东西,等官方正式消息吧! 点击前往“神秘页面” 在这个新页...
          </Typography>
          <Typography>
          《狙击精英5》取得了本周销量冠军,本作首发实体版销量比2017年2月的《狙击精英4》低64%,不过由于2017年以来数字版游戏销售显著加速,而该榜单不统计数字版销量,因此这并不是本作的整体销量表现。此外,由于本作首发加入XGP,因此只有8%...
          </Typography>
        </Container>
      </Page>
    </DashboardLayout>
  );
}
