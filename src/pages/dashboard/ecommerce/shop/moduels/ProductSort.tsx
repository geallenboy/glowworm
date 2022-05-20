import chevronDownFill from '@iconify/icons-eva/chevron-down-fill';
import chevronUpFill from '@iconify/icons-eva/chevron-up-fill';
import { Icon } from '@iconify/react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

import { sortByProducts } from '@/redux/slices/product';
import { useDispatch, useSelector } from '@/redux/store';

const SORT_BY_OPTIONS = [
  { value: 'featured', label: '特色' },
  { value: 'newest', label: '最新款' },
  { value: 'priceDesc', label: '价格: 高-低' },
  { value: 'priceAsc', label: '价格: 低-高' }
];

function renderLabel(label: string) {
  if (label === 'featured') {
    return '特色';
  }
  if (label === 'newest') {
    return '最新款';
  }
  if (label === 'priceDesc') {
    return '价格: 高-低';
  }
  return '价格: 低-高';
}

export default function ProductSort() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(null);
  const { sortBy } = useSelector((state: any) => state.product);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleSortBy = (value: any) => {
    handleClose();
    dispatch(sortByProducts(value));
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={<Icon icon={open ? chevronUpFill : chevronDownFill} />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {renderLabel(sortBy)}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === sortBy}
            onClick={() => handleSortBy(option.value)}
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
