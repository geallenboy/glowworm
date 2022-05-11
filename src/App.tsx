// import useAuth from '@/hooks/useAuth';
import RtlLayout from '@/components/RtlLayout';
import ScrollToTop from '@/components/ScrollToTop';
import Settings from '@/components/settings';
import ThemeLocalization from '@/components/ThemeLocalization';
import ThemePrimaryColor from '@/components/ThemePrimaryColor';
import Router from '@/routes';
import ThemeConfig from '@/theme';
// import LoadingScreen from '@/components/LoadingScreen';

// const { isInitialized } = useAuth();
export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          <RtlLayout>
            <Settings />
            <ScrollToTop />
            <Router />
          </RtlLayout>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
