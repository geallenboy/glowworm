import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, DialogActions, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { isString } from 'lodash';

import { DialogAnimate } from '@/components/animate';
import EmptyContent from '@/components/EmptyContent';
import Markdown from '@/components/Markdown';
import Scrollbar from '@/components/Scrollbar';

const HeroStyle = styled('div')(({ theme }) => ({
  paddingTop: '56%',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  '&:before': {
    top: 0,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.72)
  }
}));

function PreviewHero({ title, cover }) {
  return (
    <HeroStyle sx={{ backgroundImage: `url(${cover})` }}>
      <Container
        sx={{
          top: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          position: 'absolute',
          pt: { xs: 3, lg: 10 },
          color: 'common.white'
        }}
      >
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </Container>
    </HeroStyle>
  );
}

export default function NewPostPreview({ formik, openPreview, onClosePreview }) {
  const { values, handleSubmit, isSubmitting, isValid } = formik;
  const { title, description, content } = values;
  const cover = isString(values.cover) ? values.cover : values.cover?.preview;
  const hasContent = title || description || content || cover;
  const hasHero = title || cover;

  return (
    <DialogAnimate fullScreen open={openPreview} onClose={onClosePreview}>
      <DialogActions sx={{ py: 2, px: 3 }}>
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          预览
        </Typography>
        <Button onClick={onClosePreview}>取消</Button>
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={!isValid}
          loading={isSubmitting}
          onClick={handleSubmit}
        >
          确定
        </LoadingButton>
      </DialogActions>

      {hasContent ? (
        <Scrollbar>
          {hasHero && <PreviewHero title={title} cover={cover} />}
          <Container>
            <Box sx={{ mt: 5, mb: 10 }}>
              <Typography variant="h6" sx={{ mb: 5 }}>
                {description}
              </Typography>
              <Markdown children={content} />
            </Box>
          </Container>
        </Scrollbar>
      ) : (
        <EmptyContent title="内容为空" />
      )}
    </DialogAnimate>
  );
}
