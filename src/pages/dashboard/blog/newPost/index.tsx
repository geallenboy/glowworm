import { Container } from '@mui/material';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';
import { PATH_DASHBOARD } from '@/routes/paths';

import NewPostForm from './modules/NewPostForm';

export default function BlogNewPost() {
  const { themeStretch } = useSettings();

  return (
    <Page title={`博客-新建文章 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="创建新文章"
          links={[
            { name: '管理', href: PATH_DASHBOARD.root },
            { name: '博客', href: PATH_DASHBOARD.blog.root },
            { name: '新建文章' }
          ]}
        />

        <NewPostForm />
      </Container>
    </Page>
  );
}
