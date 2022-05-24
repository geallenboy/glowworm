import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';
import { getUserList } from '@/redux/slices/user';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import NewForm from './modules/NewForm';

const _name = '不知火舞';

export default function UserCreate() {
  const { themeStretch } = useSettings();
  const dispatch: any = useDispatch();
  const { pathname } = useLocation();
  // const { name } = useParams();
  const { userList } = useSelector((state: any) => state.user);
  const isEdit = pathname.includes('edit');
  const currentUser = userList.find((user: any) => user.name === _name);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <Page title={`创建新用户 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? '创建新用户' : '编辑用户'}
          links={[
            { name: '管理', href: PATH_DASHBOARD.root },
            { name: '用户', href: PATH_DASHBOARD.user.root },
            { name: !isEdit ? '新用户' : _name }
          ]}
        />

        <NewForm isEdit={isEdit} currentUser={currentUser} />
      </Container>
    </Page>
  );
}
