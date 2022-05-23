import { MenuItem, TextField } from '@mui/material';

export default function BlogPostsSort({ query, options, onSort }) {
  return (
    <TextField select size="small" value={query} onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
