import { alpha, createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import useSettings from 'src/hooks/useSettings';
import componentsOverride from 'src/theme/overrides';

export default function ThemePrimaryColor({ children }: any) {
  const defaultTheme: any = useTheme();
  const { setColor } = useSettings() as any;
  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`
      }
    }),
    [setColor, defaultTheme]
  );
  const theme: any = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
