import { Box, Grid, Paper, Typography } from '@mui/material';

import { MotionInView, varFadeIn } from '@/components/animate';

const CATEGORIES = [
  {
    label: '管理你的账户',
    icon: '/static/faqs/ic_account.svg',
    href: '#'
  },
  {
    label: '付款',
    icon: '/static/faqs/ic_payment.svg',
    href: '#'
  },
  {
    label: '交付',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  },
  {
    label: '产品的问题',
    icon: '/static/faqs/ic_package.svg',
    href: '#'
  },
  {
    label: '退货和退款',
    icon: '/static/faqs/ic_refund.svg',
    href: '#'
  },
  {
    label: '保证和担保',
    icon: '/static/faqs/ic_assurances.svg',
    href: '#'
  }
];

function CategoryCard({ category }: any) {
  const { label, icon } = category;

  return (
    <Paper
      sx={{
        px: 2,
        height: 260,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: (theme: any) => theme.customShadows.z8
      }}
    >
      <Box component="img" src={icon} sx={{ mb: 2, width: 80, height: 80 }} />
      <Typography variant="subtitle2">{label}</Typography>
    </Paper>
  );
}

export default function FaqsCategory() {
  return (
    <Grid container spacing={3} sx={{ mb: 15 }}>
      {CATEGORIES.map((category: any) => (
        <Grid item xs={12} sm={4} md={2} key={category.label}>
          <MotionInView variants={varFadeIn}>
            <CategoryCard category={category} />
          </MotionInView>
        </Grid>
      ))}
    </Grid>
  );
}
