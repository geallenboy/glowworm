import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import { Icon } from '@iconify/react';
import { Box, Container, Grid, Step, StepConnector, StepLabel, Stepper } from '@mui/material';
import { withStyles } from '@mui/styles';
import { useEffect } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import useIsMountedRef from '@/hooks/useIsMountedRef';
import useSettings from '@/hooks/useSettings';
import { createBilling, getCart } from '@/redux/slices/product';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { BillingAddress, Cart, OrderComplete, Payment } from './modules';

const STEPS = ['Cart', 'Billing & address', 'Payment'];

const QontoConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 20px)',
    right: 'calc(50% + 20px)'
  },
  active: {
    '& $line': { borderColor: theme.palette.primary.main }
  },
  completed: {
    '& $line': { borderColor: theme.palette.primary.main }
  },
  line: {
    borderTopWidth: 2,
    borderColor: theme.palette.divider
  }
}))(StepConnector);

function QontoStepIcon({ active, completed }) {
  return (
    <Box
      sx={{
        zIndex: 9,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: active ? 'primary.main' : 'divider',
        bgcolor: 'background.default'
      }}
    >
      {completed ? (
        <Box
          component={Icon}
          icon={checkmarkFill}
          sx={{ zIndex: 1, width: 20, height: 20, color: 'primary.main' }}
        />
      ) : (
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor'
          }}
        />
      )}
    </Box>
  );
}

export default function EcommerceCheckout() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const isMountedRef = useIsMountedRef();
  const { checkout } = useSelector((state) => state.product);
  const { cart, billing, activeStep } = checkout;
  const isComplete = activeStep === STEPS.length;

  useEffect(() => {
    if (isMountedRef.current) {
      dispatch(getCart(cart));
    }
  }, [dispatch, isMountedRef, cart]);

  useEffect(() => {
    if (activeStep === 1) {
      dispatch(createBilling(null));
    }
  }, [dispatch, activeStep]);

  return (
    <Page title="Ecommerce: Checkout | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Checkout"
          links={[
            { name: '管理', href: PATH_DASHBOARD.root },
            {
              name: '电子商务',
              href: PATH_DASHBOARD.eCommerce.root
            },
            { name: '结账' }
          ]}
        />

        <Grid container justifyContent={isComplete ? 'center' : 'flex-start'}>
          <Grid item xs={12} md={8} sx={{ mb: 5 }}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
              {STEPS.map((label) => (
                <Step key={label}>
                  <StepLabel
                    StepIconComponent={QontoStepIcon}
                    sx={{
                      '& .MuiStepLabel-label': {
                        typography: 'subtitle2',
                        color: 'text.disabled'
                      }
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>

        {!isComplete ? (
          <>
            {activeStep === 0 && <Cart />}
            {activeStep === 1 && <BillingAddress />}
            {activeStep === 2 && billing && <Payment />}
          </>
        ) : (
          <OrderComplete open={isComplete} />
        )}
      </Container>
    </Page>
  );
}
