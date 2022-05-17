import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick';

import { CarouselControlsPaging1 } from '@/components/carousel';
import mockData from '@/utils/mock-data';
const NAMES = [
  'Nike Air Max 97',
  'Nike Zoom Gravity',
  'Nike DBreak-Type',
  'Kyrie Flytrap 3 EP Basketball Shoe',
  'Nike Air Max Fusion Men'
];

const PRODUCTS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: NAMES[index],
  image: mockData.image.product(index)
}));

const CarouselImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  objectFit: 'cover',
  [theme.breakpoints.up('xl')]: {
    height: 320
  }
}));

function CarouselItem({ item }) {
  const { image, name } = item;

  return (
    <Box sx={{ position: 'relative' }}>
      <CarouselImgStyle alt={name} src={image} />
      <Box
        sx={{
          top: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
        }}
      />
      <CardContent
        sx={{
          left: 0,
          bottom: 0,
          maxWidth: '80%',
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white'
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          新
        </Typography>
        <Typography noWrap variant="h5" sx={{ mt: 1, mb: 3 }}>
          {name}
        </Typography>
        <Button to="#" variant="contained" component={RouterLink}>
          现在买
        </Button>
      </CardContent>
    </Box>
  );
}

export default function NewProducts() {
  const theme = useTheme();

  const settings = {
    speed: 1000,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselControlsPaging1({ color: 'primary.main' })
  };

  return (
    <Card>
      <Slider {...settings}>
        {PRODUCTS.map((item) => (
          <CarouselItem key={item.name} item={item} />
        ))}
      </Slider>
    </Card>
  );
}
