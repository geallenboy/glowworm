// material
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

// hooks
import useLocales from '@/hooks/useLocales';

export default function ThemeLocalization({ children }: any) {
  const defaultTheme = useTheme();
  const { currentLang } = useLocales();

  const theme = createTheme(defaultTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
