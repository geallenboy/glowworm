import { Box } from '@mui/material';
import { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useLocation } from 'react-router-dom';
// eslint-disable-next-line react/display-name
const Page = forwardRef(({ children, title = '', ...other }: any, ref) => {
  // const { pathname } = useLocation();

  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
});

export default Page;
