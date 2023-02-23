const presets = [['@babel/preset-env'], '@emotion/babel-preset-css-prop'];
const plugins = ['@emotion', 'lodash'];

if (process.env['ENV'] === 'development') {
  plugins.push('react-refresh/babel');
}

module.exports = { presets, plugins };
