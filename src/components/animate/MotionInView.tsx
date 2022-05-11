import { Box, BoxProps } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface MotionInViewType extends BoxProps {
  variants: any;
  transition: any;
  threshold: any;
}

export default function MotionInView({
  children,
  variants,
  transition,
  threshold,
  ...other
}: MotionInViewType) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
  }, [controls, inView, variants]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={Object.keys(variants)[0]}
      animate={controls}
      variants={variants}
      transition={transition}
      {...other}
    >
      {children}
    </Box>
  );
}
