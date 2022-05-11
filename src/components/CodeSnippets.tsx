import codeFill from '@iconify/icons-eva/code-fill';
import { Icon } from '@iconify/react';
import { Box, DialogContent, DialogTitle, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';

import { DialogAnimate } from './animate';
import Markdown from './Markdown';

export default function CodeSnippets({ source, title, sx }: any) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={sx}>
      <Tooltip title="View Code">
        <IconButton
          onClick={() => setOpen(true)}
          color={open ? 'primary' : 'default'}
          sx={{
            right: 8,
            bottom: 8,
            position: 'absolute'
          }}
        >
          <Icon icon={codeFill} width={20} height={20} />
        </IconButton>
      </Tooltip>

      <DialogAnimate
        fullWidth
        open={open}
        maxWidth="md"
        scroll="paper"
        onClose={() => setOpen(false)}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          <Markdown children={source} />
        </DialogContent>
      </DialogAnimate>
    </Box>
  );
}
