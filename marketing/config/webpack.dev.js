const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJosn = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: 'marketing',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './MarketingApp': './src/bootstrap.js'
    //   }
    // }),
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJosn.dependencies
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);