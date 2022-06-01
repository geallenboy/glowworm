import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import { PATH_DASHBOARD,PATH_GITHUB } from 'src/routes/paths';

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig:any = [
  {
    title: '首页',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  { title: '管理页', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> },
  {
    title: 'github',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_GITHUB
  }
];

export default menuConfig;
