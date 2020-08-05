const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
let isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isProduction ? '/' : '/',
  outputDir: 'build',
  assetsDir: 'static',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: { javascriptEnabled: true, },
    },
  },
  configureWebpack: (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    );

    config.plugins.push(
      new LodashModuleReplacementPlugin()
    );

    if (isProduction) {
      config.plugins.push(
        new CompressionPlugin({
          test: /\.(js|css|svg|ttf|json|html)$/, // 匹配文件名
          threshold: 10240, // 超过10K进行压缩
          deleteOriginalAssets: false, // 是否删除原文件
        }),
      );
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@common', resolve('src/common'))
      .set('@comp', resolve('src/components'))
      .set('@config', resolve('src/config'))
      .set('@layout', resolve('src/layout'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'));
  },
  devServer: {
    port: 9000,
  }
};
