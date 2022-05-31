import { Box } from '@mui/material';
import { forwardRef } from 'react';
import Head from "next/head";

const Page = forwardRef(({ children, title = '', ...other }: any, ref) => {

  return (
    <Box ref={ref} {...other}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Box>
  );
});

export default Page;
