import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';

import { varWrapEnter } from './variants';

interface MotionContainerType extends BoxProps {
  open: any;
}

export default function MotionContainer({ open, children, ...other }: MotionContainerType) {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}
