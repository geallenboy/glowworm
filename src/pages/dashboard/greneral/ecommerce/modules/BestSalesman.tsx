import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Label from '@/components/Label';
import Scrollbar from '@/components/Scrollbar';
import { fCurrency } from '@/utils/formatNumber';
import mockData from '@/utils/mock-data';

const COUNTRY = ['de', 'en', 'fr', 'kr', 'us'];
const CATEGORY = ['CAP', 'Branded Shoes', 'Headphone', 'Cell Phone', 'Earings'];

const MOCK_SALES = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  email: mockData.email(index),
  avatar: mockData.image.avatar(index + 8),
  category: CATEGORY[index],
  flag: `/static/icons/ic_flag_${COUNTRY[index]}.svg`,
  total: mockData.number.price(index),
  rank: `Top ${index + 1}`
}));

export default function BestSalesman() {
  const theme = useTheme();

  return (
    <Card sx={{ pb: 3 }}>
      <CardHeader title="最佳推销员" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>销售者</TableCell>
                <TableCell>产品</TableCell>
                <TableCell>国家</TableCell>
                <TableCell>总计</TableCell>
                <TableCell align="right">排行</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {MOCK_SALES.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar alt={row.name} src={row.avatar} />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle2"> {row.name}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {row.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <img src={row.flag} alt="国旗" />
                  </TableCell>
                  <TableCell>{fCurrency(row.total)}</TableCell>
                  <TableCell align="right">
                    <Label
                      variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                      color={
                        (row.rank === 'Top 1' && 'primary') ||
                        (row.rank === 'Top 2' && 'info') ||
                        (row.rank === 'Top 3' && 'success') ||
                        (row.rank === 'Top 4' && 'warning') ||
                        'error'
                      }
                    >
                      {row.rank}
                    </Label>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}
