import { Avatar, Box, Stack, Typography } from '@mui/material';
import { findIndex } from 'lodash';
import { useState } from 'react';

import LightboxModal from '@/components/LightboxModal';
import { fToNow } from '@/utils/formatTime';

export default function KanbanTaskCommentList({ comments }: any) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const imagesLightbox = comments
    .filter((comment: any) => comment.messageType === 'image')
    .map((item: any) => item.message);

  const handleOpenLightbox = (url: string) => {
    const selectedImage = findIndex(imagesLightbox, (index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <>
      <Stack spacing={3} sx={{ py: 3, px: 2.5, bgcolor: 'background.neutral' }}>
        {comments.map((comment: any) => (
          <Stack key={comment.id} direction="row" spacing={2}>
            <Avatar src={comment.avatar} sx={{ width: 32, height: 32 }} />
            <div>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle2"> {comment.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fToNow(comment.createdAt)}
                </Typography>
              </Stack>

              {comment.messageType === 'image' ? (
                <Box
                  component="img"
                  src={comment.message}
                  onClick={() => handleOpenLightbox(comment.message)}
                  sx={{ mt: 2, borderRadius: 1 }}
                />
              ) : (
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {comment.message}
                </Typography>
              )}
            </div>
          </Stack>
        ))}
      </Stack>

      <LightboxModal
        images={imagesLightbox}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onClose={() => setOpenLightbox(false)}
      />
    </>
  );
}
