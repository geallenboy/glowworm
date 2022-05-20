import closeFill from '@iconify/icons-eva/close-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  Typography
} from '@mui/material';
import { Form, FormikProvider } from 'formik';

import { MIconButton } from '@/components/@material-extend';
import ColorManyPicker from '@/components/ColorManyPicker';
import Scrollbar from '@/components/Scrollbar';

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: '特色' },
  { value: 'newest', label: '最新款' },
  { value: 'priceDesc', label: '价格: 高-低' },
  { value: 'priceAsc', label: '价格: 低-高' }
];
export const FILTER_GENDER_OPTIONS = ['Men', 'Women', 'Kids'];
export const FILTER_CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
  { value: 'below', label: '25元以下' },
  { value: 'between', label: '在25 - 75元之间' },
  { value: 'above', label: '75元之上' }
];
export const FILTER_COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

export default function FilterSidebar({
  isOpenFilter,
  onResetFilter,
  onOpenFilter,
  onCloseFilter,
  formik
}: any) {
  const { values, getFieldProps, handleChange } = formik;

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Icon icon={roundFilterList} />}
        onClick={onOpenFilter}
      >
        过滤器&nbsp;
      </Button>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <Drawer
            anchor="right"
            open={isOpenFilter}
            onClose={onCloseFilter}
            PaperProps={{
              sx: { width: 280, border: 'none', overflow: 'hidden' }
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 2 }}
            >
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                过滤器
              </Typography>
              <MIconButton onClick={onCloseFilter}>
                <Icon icon={closeFill} width={20} height={20} />
              </MIconButton>
            </Stack>

            <Divider />

            <Scrollbar>
              <Stack spacing={3} sx={{ p: 3 }}>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    性别
                  </Typography>
                  <FormGroup>
                    {FILTER_GENDER_OPTIONS.map((item) => (
                      <FormControlLabel
                        key={item}
                        control={
                          <Checkbox
                            {...getFieldProps('gender')}
                            value={item}
                            checked={values.gender.includes(item)}
                          />
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    类别
                  </Typography>
                  <RadioGroup {...getFieldProps('category')}>
                    {FILTER_CATEGORY_OPTIONS.map((item) => (
                      <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    颜色
                  </Typography>
                  <ColorManyPicker
                    name="colors"
                    colors={FILTER_COLOR_OPTIONS}
                    onChange={handleChange}
                    onChecked={(color: string) => values.colors.includes(color)}
                    sx={{ maxWidth: 36 * 4 }}
                  />
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    价格
                  </Typography>
                  <RadioGroup {...getFieldProps('priceRange')}>
                    {FILTER_PRICE_OPTIONS.map((item) => (
                      <FormControlLabel
                        key={item.value}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                      />
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    评级
                  </Typography>
                  <RadioGroup {...getFieldProps('rating')}>
                    {FILTER_RATING_OPTIONS.map((item, index) => (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={
                          <Radio
                            disableRipple
                            color="default"
                            icon={<Rating readOnly value={4 - index} />}
                            checkedIcon={<Rating readOnly value={4 - index} />}
                            sx={{
                              '&:hover': { bgcolor: 'transparent' }
                            }}
                          />
                        }
                        label="& Up"
                        sx={{
                          my: 0.5,
                          borderRadius: 1,
                          '&:hover': { opacity: 0.48 },
                          ...(values.rating.includes(item) && {
                            bgcolor: 'action.selected'
                          })
                        }}
                      />
                    ))}
                  </RadioGroup>
                </div>
              </Stack>
            </Scrollbar>

            <Box sx={{ p: 3 }}>
              <Button
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={onResetFilter}
                startIcon={<Icon icon={roundClearAll} />}
              >
                清除所有
              </Button>
            </Box>
          </Drawer>
        </Form>
      </FormikProvider>
    </>
  );
}
