import { defineConfig } from 'vite';
import { join } from 'path';
import lodash from 'lodash';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
import faviconsPlugin from './config/plugins/faviconsPlugin';
import envVar from './config/envVariables';

const srcDir = (...val) => join(__dirname, 'src', ...val);
const isDir = val => fs.statSync(srcDir(val)).isDirectory();
const alias = fs.readdirSync(srcDir()).reduce((acc, el) => (isDir(el) ? { ...acc, [el]: srcDir(el) } : acc), {});

export default defineConfig(({ mode, command }) => {
  const isLocal = mode === 'localhost' && command === 'serve';
  const isDev = mode === 'development';
  const isStaging = mode === 'staging';
  const isVisualize = mode === 'visualize';

  return {
    root: 'src',
    build: {
      sourcemap: isDev || isLocal || isStaging,
      manifest: false,
      outDir: join(__dirname, 'build'),
      minify: !isDev && !isLocal,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            const extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) return 'images/[name]-[hash][extname]';
            if (/css/i.test(extType)) return 'css/[name]-[hash][extname]';
            if (/eot|ttf|woff2?/i.test(extType)) return 'fonts/[name]-[hash][extname]';
            return 'assets/[name]-[hash][extname]';
          },
          chunkFileNames: 'js/main/[name]-[hash].js',
          entryFileNames: 'js/chunk/[name]-[hash].js',
        },
      },
    },
    resolve: { alias },
    define: lodash.mapValues(envVar[mode] ?? envVar.localhost, JSON.stringify),
    plugins: [
      svgr(),
      react({ babel: { presets: ['@emotion/babel-preset-css-prop'], plugins: ['@emotion/babel-plugin', 'lodash'] } }),
      isLocal && eslint({ failOnError: false }),
      !isLocal && faviconsPlugin('src/assets/images/logo.png'),
      isVisualize && visualizer({ open: true, filename: 'build/stats.html' }),
    ],
    server: {
      port: 4100,
      strictPort: true,
      hmr: { host: 'localhost', overlay: false },
    },
  };
});
