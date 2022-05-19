import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import { Icon } from '@iconify/react';
import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { findIndex } from 'lodash';
import { useState } from 'react';

import LightboxModal from '@/components/LightboxModal';
import { fDate } from '@/utils/formatTime';

const CaptionStyle = styled(CardContent)(({ theme }: any) => ({
  bottom: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)',
  justifyContent: 'space-between',
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.grey[900], 0.72),
  borderBottomLeftRadius: theme.shape.borderRadiusMd,
  borderBottomRightRadius: theme.shape.borderRadiusMd
}));

const GalleryImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

function GalleryItem({ image, onOpenLightbox }: any) {
  const { imageUrl, title, postAt } = image;
  return (
    <Card sx={{ pt: '100%', cursor: 'pointer', position: 'relative' }}>
      <GalleryImgStyle
        alt="gallery image"
        src={imageUrl}
        onClick={() => onOpenLightbox(imageUrl)}
      />

      <CaptionStyle>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            {fDate(postAt)}
          </Typography>
        </div>
        <IconButton color="inherit">
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </IconButton>
      </CaptionStyle>
    </Card>
  );
}

export default function Gallery({ gallery }: any) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const imagesLightbox = gallery.map((img: { imageUrl: any }) => img.imageUrl);

  const handleOpenLightbox = (url: unknown) => {
    const selectedImage = findIndex(imagesLightbox, (index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        相册
      </Typography>

      <Card sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {gallery.map((image: any) => (
            <Grid key={image.id} item xs={12} sm={6} md={4}>
              <GalleryItem image={image} onOpenLightbox={handleOpenLightbox} />
            </Grid>
          ))}
        </Grid>
        <LightboxModal
          images={imagesLightbox}
          photoIndex={selectedImage}
          setPhotoIndex={setSelectedImage}
          isOpen={openLightbox}
          onClose={() => setOpenLightbox(false)}
        />
      </Card>
    </Box>
  );
}
