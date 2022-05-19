import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';
import { getUserList } from '@/redux/slices/user';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import NewForm from './modules/NewForm';

export default function UserCreate() {
  const { themeStretch } = useSettings();
  const dispatch: any = useDispatch();
  const { pathname } = useLocation();
  const { name } = useParams();
  const { userList } = useSelector((state: any) => state.user);
  const isEdit = pathname.includes('edit');
  const currentUser = userList.find((user: any) => user.name === name);

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
            { name: !isEdit ? '新用户' : name }
          ]}
        />

        <NewForm isEdit={isEdit} currentUser={currentUser} />
      </Container>
    </Page>
  );
}
