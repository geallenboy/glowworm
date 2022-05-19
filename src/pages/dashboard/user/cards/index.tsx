import { Container, Grid, Skeleton } from '@mui/material';
import { useEffect } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';
import { getUsers } from '@/redux/slices/user';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { Card } from './modules';

const SkeletonLoad = (
  <>
    {[...Array(8)].map((_, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

export default function UserCards() {
  const { themeStretch } = useSettings();
  const dispatch: any = useDispatch();
  const { users } = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Page title={`用户卡 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="用户卡"
          links={[
            { name: '管理', href: PATH_DASHBOARD.root },
            { name: '用户', href: PATH_DASHBOARD.user.root },
            { name: '卡片' }
          ]}
        />
        <Grid container spacing={3}>
          {users.map((user: any) => (
            <Grid key={user.id} item xs={12} sm={6} md={4}>
              <Card user={user} />
            </Grid>
          ))}

          {!users.length && SkeletonLoad}
        </Grid>
      </Container>
    </Page>
  );
}
