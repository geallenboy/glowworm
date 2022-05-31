import { Container, Typography } from '@mui/material';
import DashboardLayout from 'src/layouts/dashboard';
import useSettings from 'src/hooks/useSettings';
import Page from 'src/components/Page';


export default function PageFive() {
  const { themeStretch } = useSettings();

  return (
    <DashboardLayout>
      <Page title='页面5'>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant='h3' component='h1' paragraph>
          页面5
          </Typography>
          <Typography gutterBottom>
          二色幽紫蝶开发发现的东方题材多人对战竞技游戏《东方妖精武踏会》上线Steam页面,游戏发售时间待定,感兴趣的玩家可以点击此处进入商店页面。 游戏介绍: 多人共斗或多人对战的竞技游戏!你将扮演贪玩又个性十足的妖精,在强...
          </Typography>
          <Typography>
          分红设置,用于股东分红或合伙人分红,开启后相应等级的所有会员平均分摊设置的分红金额或比例。 自定义商品展示详情。 注:配送模板选择在线卡密, 请保存商品信息后在商品列表中上传卡...
          </Typography>
        </Container>
      </Page>
    </DashboardLayout>
  );
}
