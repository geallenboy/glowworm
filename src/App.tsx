import LoadingScreen from '@/components/LoadingScreen';
import RtlLayout from '@/components/RtlLayout';
import ScrollToTop from '@/components/ScrollToTop';
import Settings from '@/components/settings';
import ThemeLocalization from '@/components/ThemeLocalization';
import ThemePrimaryColor from '@/components/ThemePrimaryColor';
import useAuth from '@/hooks/useAuth';
import Router from '@/routes';
import ThemeConfig from '@/theme';

import NotistackProvider from './components/NotistackProvider';

export default function App() {
  const { isInitialized } = useAuth();
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          <RtlLayout>
            <NotistackProvider>
              <Settings />
              <ScrollToTop />
              {isInitialized ? <Router /> : <LoadingScreen />}
            </NotistackProvider>
          </RtlLayout>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
