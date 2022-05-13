import Label from '@/components/Label';
import SvgIconStyle from '@/components/SvgIconStyle';
import { PATH_DASHBOARD } from '@/routes/paths';

const getIcon = (name: string) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking')
};

const sidebarConfig = [
  {
    subheader: '全部',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard
      },
      { title: '电子商务', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      { title: '数据统计', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      { title: '银行', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
      { title: '预订', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking }
    ]
  },
  {
    subheader: '管理',
    items: [
      {
        title: '用户',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: '介绍', path: PATH_DASHBOARD.user.profile },
          { title: '卡片', path: PATH_DASHBOARD.user.cards },
          { title: '列表', path: PATH_DASHBOARD.user.list },
          { title: '创建', path: PATH_DASHBOARD.user.newUser },
          { title: '编辑', path: PATH_DASHBOARD.user.editById },
          { title: '账户', path: PATH_DASHBOARD.user.account }
        ]
      },
      {
        title: '电子商务',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: '购物', path: PATH_DASHBOARD.eCommerce.shop },
          { title: '详情', path: PATH_DASHBOARD.eCommerce.productById },
          { title: '列表', path: PATH_DASHBOARD.eCommerce.list },
          { title: '创建', path: PATH_DASHBOARD.eCommerce.newProduct },
          { title: '编辑', path: PATH_DASHBOARD.eCommerce.editById },
          { title: '结算', path: PATH_DASHBOARD.eCommerce.checkout },
          { title: '发票', path: PATH_DASHBOARD.eCommerce.invoice }
        ]
      },
      {
        title: '博客',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [
          { title: '列表', path: PATH_DASHBOARD.blog.posts },
          { title: '详情', path: PATH_DASHBOARD.blog.postById },
          { title: '创建', path: PATH_DASHBOARD.blog.newPost }
        ]
      }
    ]
  },
  {
    subheader: 'app',
    items: [
      {
        title: '邮箱',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.mail,
        info: <Label color="error">2</Label>
      },
      { title: '图表', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
      { title: '日历', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
      {
        title: '看板',
        path: PATH_DASHBOARD.kanban,
        icon: ICONS.kanban
      }
    ]
  }
];

export default sidebarConfig;
