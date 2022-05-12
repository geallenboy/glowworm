import { Grid, Typography } from '@mui/material';

import ComponentCard from './ComponentCard';
import { EXTRA_LIST } from './PathConfig';

export default function ComponentExtra() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h5" paragraph>
          额外组件
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          图表, 地图, 编辑…
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Grid container spacing={3}>
          {EXTRA_LIST.map((item: any) => (
            <ComponentCard key={item.name} item={item} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
