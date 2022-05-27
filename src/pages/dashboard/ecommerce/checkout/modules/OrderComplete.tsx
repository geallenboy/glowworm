import filePdfFilled from '@iconify/icons-ant-design/file-pdf-filled';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import { Icon } from '@iconify/react';
import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { OrderCompleteIllustration } from '@/assets/svg';
import { DialogAnimate } from '@/components/animate';
import { resetCart } from '@/redux/slices/product';
import { useDispatch } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

const DialogStyle = styled(DialogAnimate)(({ theme }) => ({
  '& .MuiDialog-paper': {
    margin: 0,
    [theme.breakpoints.up('md')]: {
      maxWidth: 'calc(100% - 48px)',
      maxHeight: 'calc(100% - 48px)'
    }
  }
}));

export default function CheckoutOrderComplete({ ...other }: any) {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const handleResetStep = () => {
    dispatch(resetCart());
    navigate(PATH_DASHBOARD.eCommerce.shop);
  };

  return (
    <DialogStyle fullScreen {...other}>
      <Box sx={{ p: 4, maxWidth: 480, margin: 'auto' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" paragraph>
            感谢您的购买！
          </Typography>

          <OrderCompleteIllustration sx={{ height: 260, my: 10 }} />

          <Typography align="left" paragraph>
            感谢您下订单 &nbsp;
            <Link href="#">01dc1370-3df6-11eb-b378-0242ac130002</Link>
          </Typography>

          <Typography align="left">
            我们将在发货后5天内通知您.
            <br /> <br /> 如果您有任何问题或疑问，请联系我们. <br /> <br /> 祝你一切顺利,
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          justifyContent="space-between"
          spacing={2}
        >
          <Button
            color="inherit"
            onClick={handleResetStep}
            startIcon={<Icon icon={arrowIosBackFill} />}
          >
            继续购物
          </Button>
          <Button
            variant="contained"
            startIcon={<Icon icon={filePdfFilled} />}
            onClick={handleResetStep}
          >
            下载为PDF
          </Button>
        </Stack>
      </Box>
    </DialogStyle>
  );
}
