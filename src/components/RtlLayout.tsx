import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

export default function RtlLayout({ children }: any) {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === 'rtl' ? 'rtl' : 'css',
    stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : []
  });

  cacheRtl.compat = true;

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
