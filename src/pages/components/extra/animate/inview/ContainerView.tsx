import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

import { MotionContainer, TextAnimate } from '@/components/animate';

import getVariant from '../getVariant';

const IMG = [
  '/static/mock-images/feeds/feed_2.jpg',
  '/static/mock-images/feeds/feed_3.jpg',
  '/static/mock-images/feeds/feed_4.jpg',
  '/static/mock-images/feeds/feed_5.jpg',
  '/static/mock-images/feeds/feed_8.jpg'
];

export default function ContainerView({ isText, isMulti, selectVariant, ...other }: any) {
  const items = isMulti ? IMG : IMG.slice(0, 1);

  return (
    <Paper
      sx={{
        p: 3,
        minHeight: 480,
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.neutral'
      }}
      {...other}
    >
      {isText ? (
        <MotionContainer open initial="initial">
          <TextAnimate text="Minimals" variants={getVariant(selectVariant)} />
        </MotionContainer>
      ) : (
        <MotionContainer open initial="initial">
          {items.map((row, index) => (
            <Box
              key={index}
              component={motion.img}
              src={row}
              variants={getVariant(selectVariant)}
              sx={{
                my: 2,
                width: 480,
                borderRadius: 1,
                objectFit: 'cover',
                height: isMulti ? 72 : 320,
                boxShadow: (theme: any) => theme.customShadows.z8
              }}
            />
          ))}
        </MotionContainer>
      )}
    </Paper>
  );
}
