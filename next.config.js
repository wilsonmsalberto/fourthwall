const { parsed: localEnv } = require('dotenv').config();
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const { env: { NODE_ENV: env } } = process;

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: env === 'development' ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]',
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});
