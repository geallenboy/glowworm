import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import Label from '@/components/Label';
import { createBilling, onBackStep, onNextStep } from '@/redux/slices/product';
import { useDispatch, useSelector } from '@/redux/store';
import mockData from '@/utils/mock-data';

import NewAddressForm from './NewAddressForm';
import Summary from './Summary';

const MOCK_ADDRESS_BOOKS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  receiver: mockData.name.fullName(index),
  fullAddress: mockData.address.fullAddress(index),
  phone: mockData.phoneNumber(index),
  addressType: index === 0 ? 'Home' : 'Office',
  isDefault: index === 0
}));

function AddressItem({ address, onNextStep, onCreateBilling }: any) {
  const { receiver, fullAddress, addressType, phone, isDefault } = address;

  const handleCreateBilling = () => {
    onCreateBilling(address);
    onNextStep();
  };

  return (
    <Card sx={{ p: 3, mb: 3, position: 'relative' }}>
      <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle1">{receiver}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp;({addressType})
        </Typography>
        {isDefault && (
          <Label color="info" sx={{ ml: 1 }}>
            默认
          </Label>
        )}
      </Box>
      <Typography variant="body2" gutterBottom>
        {fullAddress}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {phone}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: 'flex',
          position: { sm: 'absolute' },
          right: { sm: 24 },
          bottom: { sm: 24 }
        }}
      >
        {!isDefault && (
          <Button variant="outlined" size="small" color="inherit">
            删除
          </Button>
        )}
        <Box sx={{ mx: 0.5 }} />
        <Button variant="outlined" size="small" onClick={handleCreateBilling}>
          发送到此地址
        </Button>
      </Box>
    </Card>
  );
}

export default function BillingAddress() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { checkout } = useSelector((state: any) => state.product);
  const { total, discount, subtotal } = checkout;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleBackStep = () => {
    dispatch(onBackStep());
  };

  const handleCreateBilling = (value: any) => {
    dispatch(createBilling(value));
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {MOCK_ADDRESS_BOOKS.map((address, index) => (
            <AddressItem
              key={index}
              address={address}
              onNextStep={handleNextStep}
              onCreateBilling={handleCreateBilling}
            />
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              size="small"
              color="inherit"
              onClick={handleBackStep}
              startIcon={<Icon icon={arrowIosBackFill} />}
            >
              返回
            </Button>
            <Button size="small" onClick={handleClickOpen} startIcon={<Icon icon={plusFill} />}>
              添加新地址
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Summary subtotal={subtotal} total={total} discount={discount} />
        </Grid>
      </Grid>

      <NewAddressForm
        open={open}
        onClose={handleClose}
        onNextStep={handleNextStep}
        onCreateBilling={handleCreateBilling}
      />
    </>
  );
}
