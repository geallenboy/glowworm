import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { random, sum } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Label from '@/components/Label';
import Page from '@/components/Page';
import Scrollbar from '@/components/Scrollbar';
import useSettings from '@/hooks/useSettings';
import { PATH_DASHBOARD } from '@/routes/paths';
import { fCurrency } from '@/utils/formatNumber';
import mockData from '@/utils/mock-data';
// import { Toolbar } from './modules';

const INVOICE = {
  id: mockData.id(1),
  taxes: 5,
  discount: 10,
  status: 'paid',
  invoiceFrom: {
    name: 'Kathlyn Hauck',
    address: 'DieSachbearbeiter Choriner Straße 49 10435 Berlin',
    company: 'Durgan Group',
    email: 'Dion.collins23@gmail.com',
    phone: '227-940-9869'
  },
  invoiceTo: {
    name: 'Lesly Reichel',
    address: 'Keas 69 Str. 15234, Chalandri Athens, Greece',
    company: 'Stracke LLC',
    email: 'kurt_durgan46@hotmail.com',
    phone: '261-433-6689'
  },
  items: [...Array(3)].map((_, index) => ({
    id: uuidv4(),
    title: mockData.text.title(index),
    description: mockData.text.description(index),
    qty: random(5),
    price: mockData.number.price(index)
  }))
};

const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function EcommerceInvoice() {
  const { themeStretch } = useSettings();

  const subTotal = sum(INVOICE.items.map((item) => item.price * item.qty));
  const total = subTotal - INVOICE.discount + INVOICE.taxes;

  return (
    <Page title="Ecommerce: Invoice | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Invoice Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'E-Commerce',
              href: PATH_DASHBOARD.eCommerce.root
            },
            { name: 'Invoice' }
          ]}
        />

        {/* <Toolbar invoice={INVOICE} /> */}

        <Card sx={{ pt: 5, px: 5 }}>
          <Grid container>
            <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
              <Box
                component="img"
                alt="logo"
                src="/static/brand/logo_full.svg"
                sx={{ height: 48 }}
              />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
              <Box sx={{ textAlign: { sm: 'right' } }}>
                <Label color="success" sx={{ textTransform: 'uppercase', mb: 1 }}>
                  {INVOICE.status}
                </Label>
                <Typography variant="h6">INV-{INVOICE.id}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                发票发件人
              </Typography>
              <Typography variant="body2">{INVOICE.invoiceFrom.name}</Typography>
              <Typography variant="body2">{INVOICE.invoiceFrom.address}</Typography>
              <Typography variant="body2">手机: {INVOICE.invoiceFrom.phone}</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                发票收件人
              </Typography>
              <Typography variant="body2">{INVOICE.invoiceTo.name}</Typography>
              <Typography variant="body2">{INVOICE.invoiceTo.address}</Typography>
              <Typography variant="body2">手机: {INVOICE.invoiceTo.phone}</Typography>
            </Grid>
          </Grid>

          <Scrollbar>
            <TableContainer sx={{ minWidth: 960 }}>
              <Table>
                <TableHead
                  sx={{
                    borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                    '& th': { backgroundColor: 'transparent' }
                  }}
                >
                  <TableRow>
                    <TableCell width={40}>#</TableCell>
                    <TableCell align="left">描述</TableCell>
                    <TableCell align="left">数量</TableCell>
                    <TableCell align="right">单价</TableCell>
                    <TableCell align="right">总计</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {INVOICE.items.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`
                      }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="left">
                        <Box sx={{ maxWidth: 560 }}>
                          <Typography variant="subtitle2">{row.title}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                            {row.description}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="left">{row.qty}</TableCell>
                      <TableCell align="right">{fCurrency(row.price)}</TableCell>
                      <TableCell align="right">{fCurrency(row.price * row.qty)}</TableCell>
                    </TableRow>
                  ))}

                  <RowResultStyle>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Box sx={{ mt: 2 }} />
                      <Typography variant="body1">小计</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Box sx={{ mt: 2 }} />
                      <Typography variant="body1">{fCurrency(subTotal)}</Typography>
                    </TableCell>
                  </RowResultStyle>
                  <RowResultStyle>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography variant="body1">折扣</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Typography sx={{ color: 'error.main' }}>
                        {fCurrency(-INVOICE.discount)}
                      </Typography>
                    </TableCell>
                  </RowResultStyle>
                  <RowResultStyle>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography variant="body1">税款</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Typography variant="body1">{fCurrency(INVOICE.taxes)}</Typography>
                    </TableCell>
                  </RowResultStyle>
                  <RowResultStyle>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography variant="h6">总计</Typography>
                    </TableCell>
                    <TableCell align="right" width={140}>
                      <Typography variant="h6">{fCurrency(total)}</Typography>
                    </TableCell>
                  </RowResultStyle>
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Divider sx={{ mt: 5 }} />

          <Grid container>
            <Grid item xs={12} md={9} sx={{ py: 3 }}>
              <Typography variant="subtitle2">NOTES</Typography>
              <Typography variant="body2">
                我们感谢您的业务。如果您需要我们添加增值税或额外注释，请让我们知道
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
              <Typography variant="subtitle2">有一个问题?</Typography>
              <Typography variant="body2">support@11.cc</Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Page>
  );
}
