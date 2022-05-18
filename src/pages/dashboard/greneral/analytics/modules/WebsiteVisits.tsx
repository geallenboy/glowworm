import { Box, Card, CardHeader } from '@mui/material';

export default function WebsiteVisits() {
  return (
    <Card>
      <CardHeader title="网站访问" subheader="(+43%) 比去年" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr"></Box>
    </Card>
  );
}
