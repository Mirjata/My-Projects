/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

const fs = require('fs');
const chalk = require('react-dev-utils/chalk');
const minimist = require('minimist');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { choosePort, createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Jarvis = require('webpack-jarvis');
const paths = require('../paths');
const configFactoryDev = require('../webpack.config.development');
const configFactoryProd = require('../webpack.config.prod');
const createDevServerConfig = require('../webpackDevServer.config');

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const args = minimist(process.argv.slice(2));

choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (port === null) return;
    const config = args.prod ? configFactoryProd('production') : configFactoryDev('development');
    config.plugins = args.analyze
      ? [
          ...config.plugins,
          new BundleAnalyzerPlugin({
            analyzerPort: port + 5,
            openAnalyzer: false,
            defaultSizes: 'gzip',
          }),
          new Jarvis({
            port: port + 10,
          }),
        ]
      : config.plugins;
    const appName = require(paths.appPackageJson).name;
    const useTypeScript = fs.existsSync(paths.appTsConfig);
    const urls = prepareUrls('http', HOST, port, paths.publicUrlOrPath.slice(0, -1));
    const devSocket = {
      warnings: warnings => devServer.sockWrite(devServer.sockets, 'warnings', warnings),
      errors: errors => devServer.sockWrite(devServer.sockets, 'errors', errors),
    };
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler({
      appName,
      config,
      devSocket,
      urls,
      useYarn: true,
      useTypeScript,
      webpack,
    });
    // Serve webpack assets generated by the compiler over a web server.
    const serverConfig = {
      ...createDevServerConfig(urls.lanUrlForConfig),
      host: HOST,
      port,
    };
    const devServer = new WebpackDevServer(serverConfig, compiler);
    // Launch WebpackDevServer.
    devServer.startCallback(() => {
      console.log(chalk.cyan('Starting the development server...\n'));
      openBrowser(urls.localUrlForBrowser);
    });

    ['SIGINT', 'SIGTERM'].forEach(sig => {
      process.on(sig, () => {
        devServer.close();
        process.exit();
      });
    });

    if (process.env.CI !== 'true') {
      // Gracefully exit when stdin ends
      process.stdin.on('end', () => {
        devServer.close();
        process.exit();
      });
    }
  })
  .catch(err => {
    if (err && err.message) console.log(err.message);
    process.exit(1);
  });
