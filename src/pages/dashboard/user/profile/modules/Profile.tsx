import { Grid, Stack } from '@mui/material';

import About from './About';
import FollowInfo from './FollowInfo';
import PostCard from './PostCard';
import PostInput from './PostInput';
import SocialInfo from './SocialInfo';

export default function Profile({ myProfile, posts }: any) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <FollowInfo profile={myProfile} />
          <About profile={myProfile} />
          <SocialInfo profile={myProfile} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          <PostInput />
          {posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
