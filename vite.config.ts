import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { type ConfigEnv, type UserConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import PurgeIcons from 'vite-plugin-purge-icons';
import svgrPlugin from 'vite-plugin-svgr';

const CWD = process.cwd();

export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 环境变量
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
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        logger: true,
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer';
          setupProdMockServer();
          `
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true
        }
      })
    ],
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: !!VITE_DROP_CONSOLE
        }
      }
    }
  };
};
