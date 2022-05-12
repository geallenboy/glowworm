import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import homeFill from '@iconify/icons-eva/home-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import { Icon } from '@iconify/react';

import { PATH_AUTH, PATH_DASHBOARD, PATH_GITHUB, PATH_PAGE } from '@/routes/paths';

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: '首页',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: '组件',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.components
  },
  {
    title: '页面',
    path: '/pages',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: '其它',
        items: [
          { title: '关于我们', path: PATH_PAGE.about },
          { title: '联系我们', path: PATH_PAGE.contact },
          { title: '常见问题', path: PATH_PAGE.faqs }
        ]
      },
      {
        subheader: '认证',
        items: [
          { title: '登陆', path: PATH_AUTH.loginUnprotected },
          { title: '注册', path: PATH_AUTH.registerUnprotected },
          { title: '重置密码', path: PATH_AUTH.resetPassword },
          { title: '验证码', path: PATH_AUTH.verify }
        ]
      },
      {
        subheader: '错误',
        items: [
          { title: '页面404', path: PATH_PAGE.page404 },
          { title: '页面500', path: PATH_PAGE.page500 }
        ]
      },
      {
        subheader: '仪表盘',
        items: [{ title: '仪表盘', path: PATH_DASHBOARD.root }]
      }
    ]
  },
  {
    title: 'github',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_GITHUB
  }
];

export default menuConfig;
