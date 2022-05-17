import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;
  return (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
        <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" strokeWidth="1" />
        <g fill="none" stroke={PRIMARY_MAIN}>
          <path d="M20.5 9.035a9.004 9.004 0 0 0-17 0m17 0c.324.928.5 1.926.5 2.965a8.988 8.988 0 0 1-.5 2.966m0-5.931h-17m0 0A8.987 8.987 0 0 0 3 12a8.99 8.99 0 0 0 .5 2.966m0 0a9.004 9.004 0 0 0 17 0m-17 0h17" />
          <path d="M12 21c4.97-4.97 4.97-13.03 0-18c-4.97 4.97-4.97 13.03 0 18z" />
        </g>
      </svg>
    </Box>
  );
}
