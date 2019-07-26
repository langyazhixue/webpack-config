// import { truncate } from 'fs';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const config = require('../config')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./wepack.base.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const NODE_ENV = process.env.NODE_ENV
const { entry, htmlWebpackPlugins } = utils.setMPA(NODE_ENV)
const buildWebpackConfig = merge(baseWebpackConfig,{
  mode: 'production',
  entry,
  output: {
    path:path.resolve(__dirname,config.build.assetsRoot),
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),  // 生产环境用chunkhash，并且打到 assetsSubDirectory 环境
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js')
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.cssSourceMap,
      extract: true,
      usePostCSS: true,
    })
  },
  plugins:[
    // 清理输出目录
    new CleanWebpackPlugin(),
    // 为生产环境注入环境变量
    new webpack.DefinePlugin({
      'process.env':require('../config/prod.env')
    }),
    //  生产环境把CSS提取出来,并且用contnethash
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:8].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash:8].css'),
    }),

    // 生产环境把静态资源提取出来
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }])
    // 生产打包优化
  ].concat(htmlWebpackPlugins)
})

module.exports = buildWebpackConfig


