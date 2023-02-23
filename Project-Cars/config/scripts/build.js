/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const chalk = require('react-dev-utils/chalk');
const fs = require('fs-extra');
const minimist = require('minimist');
const webpack = require('webpack');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');
const configFactory = require('../webpack.config.prod');
const paths = require('../paths');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

const args = minimist(process.argv.slice(2));

// Generate configuration
const config = configFactory(args.env);

measureFileSizesBeforeBuild(paths.appBuild)
  .then(previousFileSizes => {
    fs.emptyDirSync(paths.appBuild);
    copyPublicFolder();
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'));
        console.log(chalk.yellow(warnings.join('\n\n')));
      } else console.log(chalk.green('Compiled successfully.\n'));

      console.log('File sizes after gzip:\n');
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        paths.appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE,
      );
      console.log();
    },
    err => {
      console.log(chalk.red('Failed to compile.\n'));
      printBuildError(err);
      process.exit(1);
    },
  )
  .catch(err => {
    if (err && err.message) console.log(err.message);
    process.exit(1);
  });

// Create the production build.
function build(previousFileSizes) {
  console.log('Start webpack with config for production build.');

  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) return reject(err);
        messages = formatWebpackMessages({
          errors: [err.message],
          warnings: [],
        });
      } else messages = formatWebpackMessages(stats.toJson({ all: false, warnings: true, errors: true }));
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative.
        if (messages.errors.length > 1) messages.errors.length = 1;
        return reject(new Error(messages.errors.join('\n\n')));
      }

      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}
