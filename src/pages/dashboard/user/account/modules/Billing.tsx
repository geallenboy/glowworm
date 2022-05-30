import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { useSelector } from '@/redux/store';
import fakeRequest from '@/utils/fakeRequest';

import BillingAddressBook from './BillingAddressBook';
import BillingInvoiceHistory from './BillingInvoiceHistory';
import BillingPaymentMethod from './BillingPaymentMethod';

export default function Billing() {
  const { cards, invoices, addressBook } = useSelector((state: any) => state.user);
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const NewCardSchema = Yup.object().shape({
    cardName: Yup.string().required('姓名是必须的'),
    cardNumber: Yup.string().required('卡号是必须的'),
    cardExpired: Yup.string().required('到期日期是必须的'),
    cardCvv: Yup.string().required('Cvv是必须的')
  });

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardExpired: '',
      cardCvv: ''
    },
    validationSchema: NewCardSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await fakeRequest(500);
      handleCancel();
      resetForm();
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar('添加卡成功', { variant: 'success' });
    }
  });

  const handleOpenAddCard = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleCancel = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          <Card sx={{ p: 3 }}>
            <Typography
              variant="overline"
              sx={{ mb: 3, display: 'block', color: 'text.secondary' }}
            >
              你的计划
            </Typography>
            <Typography variant="h4">保险费</Typography>
            <Box
              sx={{
                mt: { xs: 2, sm: 0 },
                position: { sm: 'absolute' },
                top: { sm: 24 },
                right: { sm: 24 }
              }}
            >
              <Button size="small" color="inherit" variant="outlined" sx={{ mr: 1 }}>
                取消计划
              </Button>
              <Button size="small" variant="outlined">
                升级计划
              </Button>
            </Box>
          </Card>

          <BillingPaymentMethod
            cards={cards}
            formik={formik}
            isOpen={open}
            onOpen={handleOpenAddCard}
            onCancel={handleCancel}
          />

          <BillingAddressBook addressBook={addressBook} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <BillingInvoiceHistory invoices={invoices} />
      </Grid>
    </Grid>
  );
}
