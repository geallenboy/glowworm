import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import { Icon } from '@iconify/react';
import { Button, Card, CardHeader, Grid, Typography } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { sum } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';

import EmptyContent from '@/components/EmptyContent';
import Scrollbar from '@/components/Scrollbar';
import {
  applyDiscount,
  decreaseQuantity,
  deleteCart,
  increaseQuantity,
  onNextStep
} from '@/redux/slices/product';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import ProductList from './ProductList';
import Summary from './Summary';

export default function CheckoutCart() {
  const dispatch = useDispatch();
  const { checkout } = useSelector((state) => state.product);
  const { cart, total, discount, subtotal } = checkout;
  const isEmptyCart = cart.length === 0;

  const handleDeleteCart = (productId) => {
    dispatch(deleteCart(productId));
  };

  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleApplyDiscount = (value) => {
    dispatch(applyDiscount(value));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { products: cart },
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        setSubmitting(true);
        handleNextStep();
      } catch (error) {
        console.error(error);
        setErrors(error.message);
      }
    }
  });

  const { values, handleSubmit } = formik;
  const totalItems = sum(values.products.map((item) => item.quantity));

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 3 }}>
              <CardHeader
                title={
                  <Typography variant="h6">
                    卡片
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                      &nbsp;({totalItems} 项目)
                    </Typography>
                  </Typography>
                }
                sx={{ mb: 3 }}
              />

              {!isEmptyCart ? (
                <Scrollbar>
                  <ProductList
                    formik={formik}
                    onDelete={handleDeleteCart}
                    onIncreaseQuantity={handleIncreaseQuantity}
                    onDecreaseQuantity={handleDecreaseQuantity}
                  />
                </Scrollbar>
              ) : (
                <EmptyContent
                  title="购物车是空的"
                  description="看起来您的购物车中没有任何物品."
                  img="/static/illustrations/illustration_empty_cart.svg"
                />
              )}
            </Card>

            <Button
              color="inherit"
              component={RouterLink}
              to={PATH_DASHBOARD.eCommerce.root}
              startIcon={<Icon icon={arrowIosBackFill} />}
            >
              继续购物
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Summary
              total={total}
              enableDiscount
              discount={discount}
              subtotal={subtotal}
              onApplyDiscount={handleApplyDiscount}
            />
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={values.products.length === 0}
            >
              退房
            </Button>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
