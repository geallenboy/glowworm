
import 'simplebar/src/simplebar.css';
import 'react-quill/dist/quill.snow.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { NoSsr } from '@mui/material';
import { SettingsProvider } from 'src/contexts/SettingsContext';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';
import ThemeConfig from 'src/theme';
import createEmotionCache from 'src/utils/createEmotionCache';
import Settings from 'src/components/settings';
import RtlLayout from 'src/components/RtlLayout';
import LoadingScreen from 'src/components/LoadingScreen';
import TopProgressBar from 'src/components/TopProgressBar';
import ThemePrimaryColor from 'src/components/ThemePrimaryColor';


const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props:any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <SettingsProvider>
      <CollapseDrawerProvider>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>

          <ThemeConfig>
            <ThemePrimaryColor>
              <RtlLayout>
                <NoSsr>
                  <Settings />
                </NoSsr>
                <LoadingScreen />
                <TopProgressBar />
                <Component {...pageProps} />
              </RtlLayout>
            </ThemePrimaryColor>
          </ThemeConfig>
        </CacheProvider>
      </CollapseDrawerProvider>
    </SettingsProvider>
  );
}
