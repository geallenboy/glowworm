import { Box, Card, CardHeader, Typography } from '@mui/material';

export function Label({ title }: { title: string }) {
  return (
    <Typography variant="overline" component="p" gutterBottom sx={{ color: 'text.secondary' }}>
      {title}
    </Typography>
  );
}

type BlockType = {
  title?: string;
  children?: any;
  sx?: object;
};

export function Block({ title, sx, children }: BlockType) {
  return (
    <Card sx={{ overflow: 'unset', position: 'unset', width: '100%' }}>
      {title && <CardHeader title={title} />}
      <Box
        sx={{
          p: 3,
          minHeight: 180,
          ...sx
        }}
      >
        {children}
      </Box>
    </Card>
  );
}
