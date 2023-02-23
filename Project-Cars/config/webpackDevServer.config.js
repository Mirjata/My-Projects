/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const paths = require('./paths');

const host = process.env.HOST || '0.0.0.0';

module.exports = () => ({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  },
  compress: true,
  static: {
    directory: paths.appPublic,
    publicPath: [paths.publicUrlOrPath],
    watch: {
      ignored: ignoredFiles(paths.appSrc),
    },
  },
  client: {
    logging: 'warn',
    progress: true,
    overlay: {
      errors: true,
      warnings: false,
    },
  },
  devMiddleware: {
    publicPath: paths.publicUrlOrPath.slice(0, -1),
  },
  host,
  historyApiFallback: {
    disableDotRule: true,
    index: paths.publicUrlOrPath,
  },
  onBeforeSetupMiddleware(devServer) {
    devServer.app.use(evalSourceMapMiddleware(devServer));
  },
  onAfterSetupMiddleware(devServer) {
    devServer.app.use(redirectServedPath(paths.publicUrlOrPath));
    devServer.app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
  },
});
