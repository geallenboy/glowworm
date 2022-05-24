import { ColumnChart } from '@garron/react-chart';
import { Box, Card, CardHeader, TextField } from '@mui/material';
import { useState } from 'react';

const CHART_DATA = [
  {
    year: 'Week',
    data: [
      { name: '收入', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
      { name: '支出', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] }
    ]
  },
  {
    year: 'Month',
    data: [
      { name: '收入', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
      { name: '支出', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] }
    ]
  },
  {
    year: 'Year',
    data: [
      { name: '收入', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] },
      { name: '支出', data: [80, 55, 34, 114, 80, 130, 15, 28, 55] }
    ]
  }
];

const data = [
  {
    city: '石家庄',
    type: '特产零食',
    value: 10000
  },
  {
    city: '石家庄',
    type: '茶叶',
    value: 7000
  },

  {
    city: '深圳',
    type: '特产零食',
    value: 11000
  },
  {
    city: '深圳',
    type: '茶叶',
    value: 6000
  },

  {
    city: '温州',
    type: '特产零食',
    value: 6000
  },
  {
    city: '温州',
    type: '茶叶',
    value: 10000
  },

  {
    city: '宁波',
    type: '特产零食',
    value: 10000
  },
  {
    city: '宁波',
    type: '茶叶',
    value: 9000
  },

  {
    city: '无锡',
    type: '特产零食',
    value: 10000
  },
  {
    city: '无锡',
    type: '茶叶',
    value: 6000
  },

  {
    city: '杭州',
    type: '特产零食',
    value: 10000
  },
  {
    city: '杭州',
    type: '茶叶',
    value: 6000
  },

  {
    city: '北京',
    type: '特产零食',
    value: 7000
  },
  {
    city: '北京',
    type: '茶叶',
    value: 10000
  },

  {
    city: '上海',
    type: '特产零食',
    value: 15000
  },
  {
    city: '上海',
    type: '茶叶',
    value: 14000
  }
];

export default function BalanceStatistics() {
  const [seriesData, setSeriesData] = useState('Year');

  const handleChangeSeriesData = (event: any) => {
    setSeriesData(event.target.value);
  };
  const config: any = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    columnStyle: {
      radius: [20, 20, 0, 0]
    }
  };
  return (
    <Card>
      <CardHeader
        title="余额统计信息"
        subheader="(+43% 收入 | +12% 支出) 比去年"
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': { pl: 1, py: 0.5, pr: '24px !important', typography: 'subtitle2' },
              '& .MuiOutlinedInput-root': { borderRadius: 0.75, bgcolor: 'background.neutral' },
              '& .MuiNativeSelect-icon': { top: 4, right: 0, width: 20, height: 20 }
            }}
          >
            {CHART_DATA.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && <ColumnChart {...config} />}
        </Box>
      ))}
    </Card>
  );
}
