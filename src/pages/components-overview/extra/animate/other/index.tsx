import refreshFill from '@iconify/icons-eva/refresh-fill';
import { Icon } from '@iconify/react';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';

import { MIconButton } from '@/components/@material-extend';

import { Block } from '../../../Block';
import Logo from './Logo';
import MediumClick from './MediumClick';
import SmallClick from './SmallClick';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

export default function Other() {
  const [count, setCount] = useState(0);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Block title="Small Click" sx={style}>
          <SmallClick />
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Medium Click" sx={style}>
          <MediumClick />
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Path" sx={style}>
          <Box sx={{ position: 'absolute', right: 0, top: 32 }}>
            <MIconButton onClick={() => setCount(count + 1)}>
              <Icon icon={refreshFill} width={20} height={20} />
            </MIconButton>
          </Box>
          <Logo key={count} />
        </Block>
      </Grid>
    </Grid>
  );
}
