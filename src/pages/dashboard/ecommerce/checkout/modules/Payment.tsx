import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import { Button, Grid } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import { applyShipping, onBackStep, onGotoStep, onNextStep } from '@/redux/slices/product';
import { useDispatch, useSelector } from '@/redux/store';

import BillingInfo from './BillingInfo';
import Delivery from './Delivery';
import PaymentMethods from './PaymentMethods';
import Summary from './Summary';

const DELIVERY_OPTIONS = [
  {
    value: 0,
    title: '标准交付（免费）',
    description: '8月12日星期一交付'
  },
  {
    value: 2,
    title: '快速交付（200元）',
    description: '8月5日星期一交付'
  }
];

const PAYMENT_OPTIONS = [
  {
    value: 'paypal',
    title: '使用支宝付',
    description: '您将被重定向到PayPal网站以安全完成购买.',
    icons: ['/static/icons/ic_paypal.svg']
  },
  {
    value: 'credit_card',
    title: '信用卡/借记卡',
    description: '我们支持Mastercard、Visa、Discover和Stripe.',
    icons: ['/static/icons/ic_mastercard.svg', '/static/icons/ic_visa.svg']
  },
  {
    value: 'cash',
    title: '签出交付现金',
    description: '订单送达时用现金支付.',
    icons: []
  }
];

const CARDS_OPTIONS = [
  { value: 'ViSa1', label: '**** **** **** 1212 - Jimmy Holland' },
  { value: 'ViSa2', label: '**** **** **** 2424 - Shawn Stokes' },
  { value: 'MasterCard', label: '**** **** **** 4545 - Cole Armstrong' }
];

export default function CheckoutPayment() {
  const dispatch = useDispatch();
  const { checkout } = useSelector((state) => state.product);
  const { total, discount, subtotal, shipping } = checkout;

  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleBackStep = () => {
    dispatch(onBackStep());
  };

  const handleGotoStep = (step) => {
    dispatch(onGotoStep(step));
  };

  const handleApplyShipping = (value) => {
    dispatch(applyShipping(value));
  };

  const PaymentSchema = Yup.object().shape({
    payment: Yup.mixed().required('Payment is required')
  });

  const formik = useFormik({
    initialValues: {
      delivery: shipping,
      payment: ''
    },
    validationSchema: PaymentSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        handleNextStep();
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error.message);
      }
    }
  });

  const { isSubmitting, handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Delivery
              formik={formik}
              onApplyShipping={handleApplyShipping}
              deliveryOptions={DELIVERY_OPTIONS}
            />
            <PaymentMethods
              formik={formik}
              cardOptions={CARDS_OPTIONS}
              paymentOptions={PAYMENT_OPTIONS}
            />
            <Button
              type="button"
              size="small"
              color="inherit"
              onClick={handleBackStep}
              startIcon={<Icon icon={arrowIosBackFill} />}
            >
              返回
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <BillingInfo onBackStep={handleBackStep} />
            <Summary
              enableEdit
              total={total}
              subtotal={subtotal}
              discount={discount}
              shipping={shipping}
              onEdit={() => handleGotoStep(0)}
            />
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              完成订单
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
