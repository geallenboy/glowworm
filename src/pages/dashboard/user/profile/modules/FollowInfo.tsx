import { Card, Divider, Stack, Typography } from '@mui/material';

import { fNumber } from '@/utils/formatNumber';

export default function FollowInfo({ profile }: any) {
  const { follower, following } = profile;

  return (
    <Card sx={{ py: 3 }}>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
        <Stack width={1} textAlign="center">
          <Typography variant="h4">{fNumber(follower)}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            关注者
          </Typography>
        </Stack>

        <Stack width={1} textAlign="center">
          <Typography variant="h4">{fNumber(following)}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            被关注
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
