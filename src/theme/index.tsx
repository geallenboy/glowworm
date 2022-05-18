import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';

import useSettings from '@/hooks/useSettings';

import breakpoints, { breakpoints_type } from './breakpoints';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import palette, { palette_item_type } from './palette';
import shadows, { customShadows } from './shadows';
import shape, { shape_type } from './shape';
import typography, { typography_type } from './typography';

interface themeOptions_type {
  palette: Partial<palette_item_type>;
  shape: shape_type;
  breakpoints: breakpoints_type;
  typography: typography_type;
  direction: any;
  shadows: any;
  customShadows: any;
}

export default function ThemeConfig({ children }: { children: HTMLElement }) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions: Partial<themeOptions_type> = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
      shape,
      typography,
      breakpoints,
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
