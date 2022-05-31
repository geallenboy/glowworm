import { Dialog, DialogProps } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import { varFadeInUp } from './variants';

interface DialogAnimateType extends DialogProps {
  animate?: any;
  onClose?: any;
}

export default function DialogAnimate({
  open = false,
  animate,
  onClose,
  children,
  ...other
}: DialogAnimateType) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          PaperComponent={motion.div as any}
          PaperProps={{
            sx: {
              borderRadius: 2,
              bgcolor: 'background.paper'
            },
            ...(animate || varFadeInUp)
          }}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}
