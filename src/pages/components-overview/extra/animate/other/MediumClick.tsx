import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import { Button, Fab, IconButton } from '@mui/material';

import { ButtonAnimate } from '@/components/animate';

export default function MediumClick() {
  return (
    <>
      <ButtonAnimate mediumClick>
        <Button variant="contained" size="large">
          Button
        </Button>
      </ButtonAnimate>
      <ButtonAnimate mediumClick>
        <Fab>
          <Icon icon={plusFill} width={20} height={20} />
        </Fab>
      </ButtonAnimate>
      <ButtonAnimate mediumClick>
        <IconButton color="primary">
          <Icon icon={plusFill} width={24} height={24} />
        </IconButton>
      </ButtonAnimate>
    </>
  );
}
