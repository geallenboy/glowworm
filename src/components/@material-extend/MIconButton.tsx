import { IconButton, IconButtonProps } from '@mui/material';
import { forwardRef } from 'react';

import { ButtonAnimate } from '@/components/animate';
const MIconButton = forwardRef(({ children, ...other }: IconButtonProps, ref: any) => (
  <ButtonAnimate>
    <IconButton ref={ref} {...other}>
      {children}
    </IconButton>
  </ButtonAnimate>
));

export default MIconButton;
