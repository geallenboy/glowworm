import { Paper, Typography } from '@mui/material';

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        没有发现
      </Typography>
      <Typography variant="body2" align="center">
        没找到查询结果 &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. 尝试检查拼写错误或使用完整的单词.
      </Typography>
    </Paper>
  );
}
