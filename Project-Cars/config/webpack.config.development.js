/* eslint-disable no-param-reassign */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const paths = require('./paths');
const envVariables = require('./envVariables');

const reactRefreshRuntimeEntry = require.resolve('react-refresh/runtime');
const reactRefreshWebpackPluginRuntimeEntry = require.resolve('@pmmmwh/react-refresh-webpack-plugin');
const babelRuntimeEntry = require.resolve('babel-preset-react-app');
const babelRuntimeEntryHelpers = require.resolve('@babel/runtime/helpers/esm/assertThisInitialized', {
  paths: [babelRuntimeEntry],
});
const babelRuntimeRegenerator = require.resolve('@babel/runtime/regenerator', {
  paths: [babelRuntimeEntry],
});

module.exports = () => ({
  mode: 'development',
  bail: false,
  devtool: 'cheap-module-source-map',
  entry: [require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(Boolean),
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    assetModuleFilename: 'assets/media/[name].[contenthash][ext]',
    publicPath: paths.publicUrlOrPath,
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: true,
  },
  resolve: {
    alias: { moment: 'moment/moment.js' },
    modules: [paths.appNodeModules, paths.appSrc],
    extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [
        paths.appPackageJson,
        reactRefreshRuntimeEntry,
        reactRefreshWebpackPluginRuntimeEntry,
        babelRuntimeEntry,
        babelRuntimeEntryHelpers,
        babelRuntimeRegenerator,
      ]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        enforce: 'pre',
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        test: /\.(js|jsx)$/,
        loader: require.resolve('source-map-loader'),
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              sourceMaps: true,
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          // Include all assets
          {
            test: /\.svg$/,
            issuer: {
              and: [/\.jsx?$/],
            },
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  prettier: false,
                  svgo: true,
                  svgoConfig: {
                    plugins: [{ removeViewBox: false, removeDimensions: true }],
                  },
                  titleProp: true,
                  ref: true,
                },
              },
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: 'assets/images/[name].[contenthash].[ext]',
                },
              },
            ],
          },
          {
            test: [/\.(bmp|gif|jpe?g|png)$/],
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/images/[name].[ext]',
            },
          },
          {
            test: [/\.(eot|ttf|woff2?)$/],
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
          {
            exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            type: 'asset/resource',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, { NODE_ENV: 'development', PUBLIC_URL: '', FAST_REFRESH: true }),
    new ModuleNotFoundPlugin(paths.appPath),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce((env, key) => {
        env[key] = JSON.stringify(process.env[key]);
        return env;
      }, {}),
      env: JSON.stringify(envVariables.local.env),
      apiUrl: JSON.stringify(envVariables.local.apiUrl),
      authDomain: JSON.stringify(envVariables.local.authDomain),
      authClientId: JSON.stringify(envVariables.local.authClientId),
      authAudience: JSON.stringify(envVariables.local.authAudience),
      urls: JSON.stringify(envVariables.local.urls),
    }),
    new ReactRefreshWebpackPlugin({ overlay: false }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/logo.png',
      prefix: 'assets/icons/',
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: paths.publicUrlOrPath,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter(fileName => !fileName.endsWith('.map'));

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      context: paths.appSrc,
    }),
  ],
  performance: false,
  stats: false,
});
