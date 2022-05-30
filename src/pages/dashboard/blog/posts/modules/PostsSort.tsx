import { MenuItem, TextField } from '@mui/material';

export default function PostsSort({ query, options, onSort }: any) {
  return (
    <TextField select size="small" value={query} onChange={onSort}>
      {options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
