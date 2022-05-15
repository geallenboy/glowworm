import arrowLeftFill from '@iconify/icons-eva/arrow-left-fill';
import arrowRightFill from '@iconify/icons-eva/arrow-right-fill';
import roundKeyboardArrowLeft from '@iconify/icons-ic/round-keyboard-arrow-left';
import roundKeyboardArrowRight from '@iconify/icons-ic/round-keyboard-arrow-right';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { MIconButton } from '@/components/@material-extend';

const ICON_SIZE = {
  width: 20,
  height: 20
};

const RootStyle = styled(Box)(({ theme }: any) => ({
  zIndex: 9,
  display: 'flex',
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2)
}));

const ArrowStyle = styled(MIconButton)(({ theme }: any) => ({
  padding: 6,
  opacity: 0.48,
  color: theme.palette.common.white,
  '&:hover': { opacity: 1 }
}));

export default function CarouselControlsArrowsBasic1({
  arrowLine,
  onNext,
  onPrevious,
  ...other
}: any) {
  const theme: any = useTheme();
  const isRTL = theme.direction === 'rtl';

  return (
    <RootStyle {...other}>
      <ArrowStyle size="small" onClick={onPrevious}>
        {arrowLine ? (
          <Icon icon={isRTL ? roundKeyboardArrowRight : roundKeyboardArrowLeft} {...ICON_SIZE} />
        ) : (
          <Icon icon={isRTL ? arrowRightFill : arrowLeftFill} {...ICON_SIZE} />
        )}
      </ArrowStyle>

      <ArrowStyle size="small" onClick={onNext}>
        {arrowLine ? (
          <Icon icon={isRTL ? roundKeyboardArrowLeft : roundKeyboardArrowRight} {...ICON_SIZE} />
        ) : (
          <Icon icon={isRTL ? arrowLeftFill : arrowRightFill} {...ICON_SIZE} />
        )}
      </ArrowStyle>
    </RootStyle>
  );
}
