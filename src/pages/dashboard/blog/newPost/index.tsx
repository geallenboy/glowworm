import { Container } from '@mui/material';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import useSettings from '@/hooks/useSettings';
import { PATH_DASHBOARD } from '@/routes/paths';

import NewPostForm from './modules/NewPostForm';

export default function BlogNewPost() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Blog: New Post | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new post"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Blog', href: PATH_DASHBOARD.blog.root },
            { name: 'New Post' }
          ]}
        />

        <NewPostForm />
      </Container>
    </Page>
  );
}
