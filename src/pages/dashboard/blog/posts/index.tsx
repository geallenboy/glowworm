import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import { Box, Button, Container, Grid, Skeleton, Stack } from '@mui/material';
import { orderBy } from 'lodash';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link as RouterLink } from 'react-router-dom';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import useSettings from '@/hooks/useSettings';
import { getMorePosts, getPostsInitial } from '@/redux/slices/blog';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { PostCard, PostsSearch, PostsSort } from './modules';

const SORT_OPTIONS = [
  { value: 'latest', label: '最近' },
  { value: 'popular', label: '受欢迎' },
  { value: 'oldest', label: '旧的' }
];

const applySort = (posts: any, sortBy: string): any => {
  if (sortBy === 'latest') {
    return orderBy(posts, ['createdAt'], ['desc']);
  }
  if (sortBy === 'oldest') {
    return orderBy(posts, ['createdAt'], ['asc']);
  }
  if (sortBy === 'popular') {
    return orderBy(posts, ['view'], ['desc']);
  }
  return posts;
};

const SkeletonLoad = (
  <Grid container spacing={3} sx={{ mt: 2 }}>
    {[...Array(4)].map((_, index) => (
      <Grid item xs={12} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2 }} />
        <Box sx={{ display: 'flex', mt: 1.5 }}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton variant="text" sx={{ mx: 1, flexGrow: 1 }} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default function BlogPosts() {
  const { themeStretch } = useSettings();
  const dispatch: any = useDispatch();
  const [filters, setFilters] = useState('latest');
  const { posts, hasMore, index, step } = useSelector((state: any) => state.blog);
  const sortedPosts: any[] = applySort(posts, filters);
  const onScroll = useCallback(() => dispatch(getMorePosts()), [dispatch]);

  useEffect(() => {
    dispatch(getPostsInitial(index, step));
  }, [dispatch, index, step]);

  const handleChangeSort = (event: { target: { value: SetStateAction<string> } }) => {
    setFilters(event.target.value);
  };

  return (
    <Page title={`博客-文章 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="博客"
          links={[
            { name: '管理', href: PATH_DASHBOARD.root },
            { name: '博客', href: PATH_DASHBOARD.blog.root },
            { name: '文章' }
          ]}
          action={
            <Button
              variant="contained"
              component={RouterLink}
              to={PATH_DASHBOARD.blog.newPost}
              startIcon={<Icon icon={plusFill} />}
            >
              新建文章
            </Button>
          }
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <PostsSearch />
          <PostsSort query={filters} options={SORT_OPTIONS} onSort={handleChangeSort} />
        </Stack>

        <InfiniteScroll
          next={onScroll}
          hasMore={hasMore}
          loader={SkeletonLoad}
          dataLength={posts.length}
          style={{ overflow: 'inherit' }}
        >
          <Grid container spacing={3}>
            {sortedPosts.map((post: any, index: number) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
    </Page>
  );
}
