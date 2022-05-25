import edit2Fill from '@iconify/icons-eva/edit-2-fill';
import { Icon } from '@iconify/react';
import { Button, Grid, LinearProgress, Rating, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sumBy } from 'lodash';
import { Link as ScrollLink } from 'react-scroll';

import { fShortenNumber } from '@/utils/formatNumber';

const RatingStyle = styled(Rating)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:nth-of-type(2)': {
    [theme.breakpoints.up('md')]: {
      borderLeft: `solid 1px ${theme.palette.divider}`,
      borderRight: `solid 1px ${theme.palette.divider}`
    }
  }
}));

function ProgressItem({ star, total }) {
  const { name, starCount, reviewCount } = star;
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <Typography variant="subtitle2">{name}</Typography>
      <LinearProgress
        variant="determinate"
        value={(starCount / total) * 100}
        sx={{
          mx: 2,
          flexGrow: 1,
          bgcolor: 'divider'
        }}
      />
      <Typography
        variant="body2"
        sx={{ color: 'text.secondary', minWidth: 64, textAlign: 'right' }}
      >
        {fShortenNumber(reviewCount)}
      </Typography>
    </Stack>
  );
}

export default function DetailsReviewOverview({ product, onOpen }) {
  const { totalRating, totalReview, ratings } = product;

  const total = sumBy(ratings, (star) => star.starCount);

  return (
    <Grid container>
      <GridStyle item xs={12} md={4}>
        <Typography variant="subtitle1" gutterBottom>
          评价等级
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ color: 'error.main' }}>
          {totalRating}/5
        </Typography>
        <RatingStyle readOnly value={totalRating} precision={0.1} />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          ({fShortenNumber(totalReview)}
          &nbsp;评价)
        </Typography>
      </GridStyle>

      <GridStyle item xs={12} md={4}>
        <Stack spacing={1.5} sx={{ width: 1 }}>
          {ratings
            .slice(0)
            .reverse()
            .map((rating) => (
              <ProgressItem key={rating.name} star={rating} total={total} />
            ))}
        </Stack>
      </GridStyle>

      <GridStyle item xs={12} md={4}>
        <ScrollLink to="move_add_review" spy smooth offset={-200}>
          <Button
            size="large"
            onClick={onOpen}
            variant="outlined"
            startIcon={<Icon icon={edit2Fill} />}
          >
            写你的评论
          </Button>
        </ScrollLink>
      </GridStyle>
    </Grid>
  );
}
