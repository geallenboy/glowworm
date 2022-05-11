import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowheadLeftFill from '@iconify/icons-eva/arrowhead-left-fill';
import arrowheadRightFill from '@iconify/icons-eva/arrowhead-right-fill';
import { Icon } from '@iconify/react';
import {
  Button,
  Card,
  Checkbox,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useState } from 'react';

function not(a: any, b: any) {
  return a.filter((value: any) => b.indexOf(value) === -1);
}

function intersection(a: any, b: any) {
  return a.filter((value: any) => b.indexOf(value) !== -1);
}

export default function SimpleTransferList() {
  const [checked, setChecked] = useState<string[]>([]);
  const [left, setLeft] = useState([0, 1, 2, 3]);
  const [right, setRight] = useState([4, 5, 6, 7]);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items: any) => (
    <Card
      sx={{
        width: 200,
        height: 220,
        overflow: 'auto',
        borderRadius: 1.5
      }}
    >
      <List dense component="div" role="list">
        {items.map((value: string) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItemButton key={value} role="listitem" onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItemButton>
          );
        })}
      </List>
    </Card>
  );

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ width: 'auto', py: 3 }}>
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center" sx={{ p: 3 }}>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
            sx={{ my: 1 }}
          >
            <Icon icon={arrowheadRightFill} width={18} height={18} />
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
            sx={{ my: 1 }}
          >
            <Icon icon={arrowIosForwardFill} width={18} height={18} />
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
            sx={{ my: 1 }}
          >
            <Icon icon={arrowIosBackFill} width={18} height={18} />
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
            sx={{ my: 1 }}
          >
            <Icon icon={arrowheadLeftFill} width={18} height={18} />
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
}
