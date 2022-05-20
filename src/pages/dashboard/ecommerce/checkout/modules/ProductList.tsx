import minusFill from '@iconify/icons-eva/minus-fill';
import plusFill from '@iconify/icons-eva/plus-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import { Icon } from '@iconify/react';
import {
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { MIconButton } from '@/components/@material-extend';
import { fCurrency } from '@/utils/formatNumber';
import getColorName from '@/utils/getColorName';

const IncrementerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(0.5),
  padding: theme.spacing(0.5, 0.75),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.grey[500_32]}`
}));

const ThumbImgStyle = styled('img')(({ theme }) => ({
  width: 64,
  height: 64,
  objectFit: 'cover',
  marginRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadiusSm
}));

function Incrementer({ available, quantity, onIncrease, onDecrease }) {
  return (
    <Box sx={{ width: 96, textAlign: 'right' }}>
      <IncrementerStyle>
        <MIconButton size="small" color="inherit" onClick={onDecrease} disabled={quantity <= 1}>
          <Icon icon={minusFill} width={16} height={16} />
        </MIconButton>
        {quantity}
        <MIconButton
          size="small"
          color="inherit"
          onClick={onIncrease}
          disabled={quantity >= available}
        >
          <Icon icon={plusFill} width={16} height={16} />
        </MIconButton>
      </IncrementerStyle>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        可购得的: {available}
      </Typography>
    </Box>
  );
}

export default function ProductList({ formik, onDelete, onIncreaseQuantity, onDecreaseQuantity }) {
  const { products } = formik.values;

  return (
    <TableContainer sx={{ minWidth: 720 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>产品</TableCell>
            <TableCell align="left">价格</TableCell>
            <TableCell align="left">数量</TableCell>
            <TableCell align="right">总价</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => {
            const { id, name, size, price, color, cover, quantity, available } = product;
            return (
              <TableRow key={id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ThumbImgStyle alt="product image" src={cover} />
                    <Box>
                      <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240, mb: 0.5 }}>
                        {name}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        divider={
                          <Divider
                            orientation="vertical"
                            sx={{ height: 14, alignSelf: 'center' }}
                          />
                        }
                      >
                        <Typography variant="body2">
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                          >
                            大小:&nbsp;
                          </Typography>
                          {size}
                        </Typography>

                        <Typography variant="body2">
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                          >
                            颜色:&nbsp;
                          </Typography>
                          {getColorName(color)}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell align="left">{fCurrency(price)}</TableCell>

                <TableCell align="left">
                  <Incrementer
                    quantity={quantity}
                    available={available}
                    onDecrease={() => onDecreaseQuantity(id)}
                    onIncrease={() => onIncreaseQuantity(id)}
                  />
                </TableCell>

                <TableCell align="right">{fCurrency(price * quantity)}</TableCell>

                <TableCell align="right">
                  <MIconButton onClick={() => onDelete(id)}>
                    <Icon icon={trash2Fill} width={20} height={20} />
                  </MIconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
