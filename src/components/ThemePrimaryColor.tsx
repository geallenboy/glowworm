import { alpha, createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

import useSettings from '@/hooks/useSettings';
import componentsOverride from '@/theme/overrides';

export default function ThemePrimaryColor({ children }: any) {
  const defaultTheme = useTheme();
  const { setColor } = useSettings();

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor
      },
      customShadows: {
        // ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`
      }
    }),
    [setColor, defaultTheme]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
