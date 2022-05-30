import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { type ConfigEnv, type UserConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import PurgeIcons from 'vite-plugin-purge-icons';
import svgrPlugin from 'vite-plugin-svgr';
const CWD = process.cwd();
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL, VITE_DROP_CONSOLE } = loadEnv(mode, CWD);

  const isBuild = command === 'build';

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
        // {
        //   find: '@react-pdf/renderer',
        //   replacement: '@react-pdf/renderer/lib/react-pdf.es.js'
        // }
      ]
    },
    server: {
      fs: {
        strict: false
      },
      host: '0.0.0.0',
      port: 3200
    },
    plugins: [
      PurgeIcons(),
      legacy({
        targets: ['ie >= 11']
      }),
      react(),
      // viteMockServe({
      //   ignore: /^_/,
      //   mockPath: 'mock',
      //   localEnabled: !isBuild,
      //   prodEnabled: isBuild,
      //   logger: true,
      //   injectCode: `
      //     import { setupProdMockServer } from '../mock/_createProductionServer';
      //     setupProdMockServer();
      //     `
      // }),
      svgrPlugin({
        svgrOptions: {
          icon: true
        }
      })
    ],
    build: {
      target: 'modules',
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      brotliSize: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  };
};
