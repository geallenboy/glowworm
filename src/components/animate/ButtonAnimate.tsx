import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';

import { varMediumClick, varSmallClick } from './variants';
interface ButtonAnimateType extends BoxProps {
  mediumClick?: boolean;
}

export default function ButtonAnimate({
  mediumClick = false,
  children,
  sx,
  ...other
}: ButtonAnimateType) {
  return (
    <Box
      component={motion.div}
      whileTap="tap"
      whileHover="hover"
      variants={mediumClick ? varMediumClick : varSmallClick}
      sx={{ display: 'inline-flex', ...sx }}
      {...other}
    >
      {children}
    </Box>
  );
}
