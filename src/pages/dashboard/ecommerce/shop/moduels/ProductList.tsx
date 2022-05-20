import { Grid, Skeleton } from '@mui/material';

import ProductCard from './ProductCard';

const SkeletonLoad = (
  <>
    {[...Array(12)].map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

export default function ProductList({ products, isLoad, ...other }: any) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product: any) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductCard product={product} />
        </Grid>
      ))}

      {isLoad && SkeletonLoad}
    </Grid>
  );
}
