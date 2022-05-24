import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { Icon } from '@iconify/react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Input,
  Link,
  Slider as MuiSlider,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick';

import { fCurrency } from '@/utils/formatNumber';
import mockData from '@/utils/mock-data';

const MIN_AMOUNT = 0;
const MAX_AMOUNT = 1000;
const STEP = 50;

const MOCK_RECENT_CONTACTS = [...Array(12)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  email: mockData.email(index),
  avatar: mockData.image.avatar(index)
}));

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: theme.palette.background.neutral,
  '& .slick-list': {
    paddingTop: '24px !important'
  }
}));

const ArrowStyle = styled(IconButton)(({ theme }) => ({
  top: 30,
  zIndex: 9,
  position: 'absolute',
  color: theme.palette.grey[300],
  backgroundColor: alpha(theme.palette.grey[900], 0.48),
  '&:hover': {
    backgroundColor: theme.palette.grey[900]
  }
}));

function InputAmount({ autoWidth, amount, onBlur, onChange, sx, ...other }) {
  return (
    <Stack direction="row" justifyContent="center" spacing={1} sx={sx}>
      <Typography variant="h5">$</Typography>
      <Input
        disableUnderline
        size="small"
        value={amount}
        onChange={onChange}
        onBlur={onBlur}
        inputProps={{ step: STEP, min: MIN_AMOUNT, max: MAX_AMOUNT, type: 'number' }}
        sx={{
          typography: 'h3',
          '& input': {
            p: 0,
            textAlign: 'center',
            width: autoWidth
          }
        }}
        {...other}
      />
    </Stack>
  );
}

function ConfirmTransferDialog({
  open,
  amount,
  autoWidth,
  contactInfo,
  onClose,
  onBlur,
  onChange
}) {
  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>转到</DialogTitle>

      <Stack spacing={3} sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={contactInfo?.avatar} sx={{ width: 48, height: 48 }} />
          <div>
            <Typography variant="subtitle2">{contactInfo?.name}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {contactInfo?.email}
            </Typography>
          </div>
        </Stack>

        <InputAmount
          onBlur={onBlur}
          onChange={onChange}
          autoWidth={autoWidth}
          amount={amount}
          disableUnderline={false}
          sx={{ justifyContent: 'flex-end' }}
        />

        <TextField fullWidth multiline rows={2} placeholder="写封信..." />
      </Stack>
      <DialogActions>
        <Button variant="contained" disabled={amount === 0} onClick={onClose}>
          确认转移
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function QuickTransfer() {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const [autoWidth, setAutoWidth] = useState(24);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectContact, setSelectContact] = useState(0);
  const [amount, setAmount] = useState(0);

  const getContactInfo = MOCK_RECENT_CONTACTS.find((_, index) => index === selectContact);

  const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 7,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0 40px',
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setSelectContact(next),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: {
          slidesToShow: 5
        }
      }
    ]
  };

  useEffect(() => {
    if (amount) {
      handleAutoWidth();
    }
  }, [amount]);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleAutoWidth = () => {
    const getNumberLength = amount.toString().length;
    setAutoWidth(getNumberLength * 22);
  };

  const handleSliderChange = (event, newValue) => {
    setAmount(newValue);
  };

  const handleInputChange = (event) => {
    setAmount(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (amount < 0) {
      setAmount(0);
    } else if (amount > MAX_AMOUNT) {
      setAmount(MAX_AMOUNT);
    }
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <>
      <RootStyle>
        <CardHeader title="快速转移" />
        <Box sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>
              最近
            </Typography>
            <Link component={RouterLink} to="#" sx={{ typography: 'button' }}>
              显示所有
            </Link>
          </Stack>

          <Box sx={{ position: 'relative' }}>
            <ArrowStyle size="small" onClick={handlePrevious} sx={{ left: -16 }}>
              <Icon icon={arrowIosBackFill} />
            </ArrowStyle>

            <Slider ref={carouselRef} {...sliderSettings}>
              {MOCK_RECENT_CONTACTS.map((contact, index) => (
                <Box key={contact.id} sx={{ width: 40, height: 40 }}>
                  <Tooltip key={contact.id} title={contact.name} arrow placement="top">
                    <Avatar
                      src={contact.avatar}
                      sx={{
                        opacity: 0.48,
                        cursor: 'pointer',
                        transition: (theme) => theme.transitions.create('all'),
                        ...(selectContact === index && {
                          opacity: 1,
                          transform: 'scale(1.25)',
                          boxShadow: '-4px 12px 24px 0 rgb(0,0,0,0.24)'
                        })
                      }}
                    />
                  </Tooltip>
                </Box>
              ))}
            </Slider>

            <ArrowStyle size="small" onClick={handleNext} sx={{ right: -16 }}>
              <Icon icon={arrowIosForwardFill} />
            </ArrowStyle>
          </Box>

          <Stack spacing={3}>
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>
              插入金额
            </Typography>

            <InputAmount
              onBlur={handleBlur}
              onChange={handleInputChange}
              autoWidth={autoWidth}
              amount={amount}
            />

            <MuiSlider
              value={typeof amount === 'number' ? amount : 0}
              valueLabelDisplay="auto"
              step={STEP}
              marks
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              onChange={handleSliderChange}
            />

            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                你的平衡
              </Typography>
              <Typography variant="subtitle1">{fCurrency(34212)}</Typography>
            </Stack>

            <Button
              variant="contained"
              size="large"
              disabled={amount === 0}
              onClick={handleOpenConfirm}
            >
              立即转移
            </Button>
          </Stack>
        </Box>
      </RootStyle>

      <ConfirmTransferDialog
        open={openConfirm}
        autoWidth={autoWidth}
        amount={amount}
        contactInfo={getContactInfo}
        onClose={handleCloseConfirm}
        onBlur={handleBlur}
        onChange={handleInputChange}
      />
    </>
  );
}
