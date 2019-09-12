'use strict'
const  path = require('path')
const  webpack = require('webpack')
const  utils = require('./utils')
const  config = require('../config')
const  merge = require('webpack-merge')
const  HtmlWebpackPlugin = require('html-webpack-plugin')
const  baseWebpackConfig = require('./wepack.base.conf')
const  FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const  portfinder = require('portfinder')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}



const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      extract: false,
      usePostCSS: true,
    })
  },
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    inline: true,
    compress: true,
    host: process.env.HOST || config.dev.host,
    port: process.env.port||  config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay 
      ? { warnings: true, errors: true }
      : false ,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    // 默认情况下，将使用当前工作目录作为提供内容的目录。将其设置为 false 以禁用 contentBase。 不需要设置
    // contentBase:false, 
    //quiet: true, // necessary for FriendlyErrorsPlugin
    stats:'errors-only',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 600,
      poll: 1000,
    }
  },
  plugins: [
    // 注入环境变量
    new webpack.DefinePlugin({
      'process.env':require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ // 默认ejs模版语法
      title: 'webpack-dev-test',
      template:resolve('index.html'),
      filename: 'index.html',
      inject: true,
      favicon:resolve('favicon.ico'),
      path: config.dev.assetsPublicPath + config.dev.assetsSubDirectory
    })
  ]
}) 

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT ||  config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${
                devWebpackConfig.devServer.host
              }:${port}`
            ]
          },
          onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
        })
      )
      resolve(devWebpackConfig)
    }
  })
})