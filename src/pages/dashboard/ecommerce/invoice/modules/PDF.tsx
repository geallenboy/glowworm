import { Document, Font, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { sum } from 'lodash';

import { fCurrency } from '@/utils/formatNumber';

Font.register({
  family: 'Roboto',
  fonts: [{ src: '/fonts/Roboto-Regular.ttf' }, { src: '/fonts/Roboto-Bold.ttf' }]
});

const styles = StyleSheet.create({
  col4: { width: '25%' },
  col8: { width: '75%' },
  col6: { width: '50%' },
  mb8: { marginBottom: 8 },
  mb40: { marginBottom: 40 },
  overline: {
    fontSize: 8,
    marginBottom: 8,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase'
  },
  h3: { fontSize: 16, fontWeight: 700 },
  h4: { fontSize: 13, fontWeight: 700 },
  body1: { fontSize: 10 },
  subtitle2: { fontSize: 9, fontWeight: 700 },
  alignRight: { textAlign: 'right' },
  page: {
    padding: '40px 24px 0 24px',
    fontSize: 9,
    lineHeight: 1.6,
    fontFamily: 'Roboto',
    backgroundColor: '#fff',
    textTransform: 'capitalize'
  },
  footer: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 24,
    margin: 'auto',
    borderTopWidth: 1,
    borderStyle: 'solid',
    position: 'absolute',
    borderColor: '#DFE3E8'
  },
  gridContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  table: { display: 'flex', width: 'auto' },
  tableHeader: {},
  tableBody: {},
  tableRow: {
    padding: '8px 0',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DFE3E8'
  },
  noBorder: { paddingTop: 8, paddingBottom: 0, borderBottomWidth: 0 },
  tableCell_1: { width: '5%' },
  tableCell_2: { width: '50%', paddingRight: 16 },
  tableCell_3: { width: '15%' }
});

export default function PDF({ invoice }) {
  const { id, items, taxes, status, discount, invoiceTo, invoiceFrom } = invoice;
  const subTotal = sum(items.map((item) => item.price * item.qty));
  const total = subTotal - discount + taxes;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.gridContainer, styles.mb40]}>
          <Image source="/static/brand/logo_full.jpg" style={{ height: 32 }} />
          <View style={{ alignItems: 'right', flexDirection: 'column' }}>
            <Text style={styles.h3}>{status}</Text>
            <Text>INV-{id}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb40]}>
          <View style={styles.col6}>
            <Text style={[styles.overline, styles.mb8]}>发票发件人</Text>
            <Text style={styles.body1}>{invoiceFrom.name}</Text>
            <Text style={styles.body1}>{invoiceFrom.address}</Text>
            <Text style={styles.body1}>{invoiceFrom.phone}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.overline, styles.mb8]}>发票收件人</Text>
            <Text style={styles.body1}>{invoiceTo.name}</Text>
            <Text style={styles.body1}>{invoiceTo.address}</Text>
            <Text style={styles.body1}>{invoiceTo.phone}</Text>
          </View>
        </View>

        <Text style={[styles.overline, styles.mb8]}>发票详细信息</Text>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell_1}>
                <Text style={styles.subtitle2}>#</Text>
              </View>
              <View style={styles.tableCell_2}>
                <Text style={styles.subtitle2}>描述</Text>
              </View>
              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>数量</Text>
              </View>
              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>单价</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text style={styles.subtitle2}>总计</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableBody}>
            {items.map((item, index) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={styles.tableCell_1}>
                  <Text>{index + 1}</Text>
                </View>
                <View style={styles.tableCell_2}>
                  <Text style={styles.subtitle2}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
                <View style={styles.tableCell_3}>
                  <Text>{item.qty}</Text>
                </View>
                <View style={styles.tableCell_3}>
                  <Text>{item.price}</Text>
                </View>
                <View style={[styles.tableCell_3, styles.alignRight]}>
                  <Text>{fCurrency(item.price * item.qty)}</Text>
                </View>
              </View>
            ))}

            <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text>小计</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text>{fCurrency(subTotal)}</Text>
              </View>
            </View>

            <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text>折扣</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text>{fCurrency(-discount)}</Text>
              </View>
            </View>

            <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text>税款</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text>{fCurrency(taxes)}</Text>
              </View>
            </View>

            <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text style={styles.h4}>总计</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text style={styles.h4}>{fCurrency(total)}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.footer]}>
          <View style={styles.col8}>
            <Text style={styles.subtitle2}>注释</Text>
            <Text>我们感谢您的业务。如果您需要我们添加增值税或额外注释，请告知我们!</Text>
          </View>
          <View style={[styles.col4, styles.alignRight]}>
            <Text style={styles.subtitle2}>有一个问题</Text>
            <Text>support@abcapp.com</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
