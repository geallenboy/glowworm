import { Container, Typography } from '@mui/material';
import DashboardLayout from 'src/layouts/dashboard';
import useSettings from 'src/hooks/useSettings';
import Page from 'src/components/Page';

export default function PageOne() {
  const { themeStretch } = useSettings();

  return (
    <DashboardLayout>
      <Page title='页面1'>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant='h3' component='h1' paragraph>
            页面1
          </Typography>
          <Typography gutterBottom>
          如果是线上交流的方式，也可以和公司用电话会议的方式深度谈一谈。”有业绩说明会页面一片空白公司称当天没有投资者来提问政策层面来看，监管部门在积极推动上市公司和投资者的沟通交流...
          </Typography>
          <Typography>
          据数据显示,卖家使用A+内容后,可以提升25%的转化率,那么A+页面有哪些优势呢? 1、塑造品牌形象 A+页面可以推展内容,给产品添加品牌故事,强化卖家在亚马逊市场上的品牌形象,取得客户的信..
          </Typography>
        </Container>
      </Page>
    </DashboardLayout>
  );
}
