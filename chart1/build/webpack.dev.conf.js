'use strict'
var path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
// const config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  context:path.resolve(__dirname,'../'), // 
  entry:{
    index:'./src/index.js',  // 多入口打包
    search:'./src/search.js' // 多入口打包
  },
  output:{
    path: path.join(__dirname,'../dist'),
    filename:'[name].js' // [name]  占位符
  },
  // mode: 用来指定当前的构建环境是：production
  mode: 'none',
  module:{
    // webpack 开箱即用只支持JS 和 JSON 两种文件类型，
    // 通过loaders去支持其他文件类型并且把它们转换成有效的模块，并可以添加到依赖图中。
    rules:[
      ...(utils.styleLoaders({
        extract:false,
        sourceMap: false,
        usePostCSS: true
      })),
      {
        test:/\.jsx?$/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test:/\.(png|jpe?g|gif)(\?.*)?$/, // 图片
        loader:'url-loader', // 小图片的base64转换
        options:{
          limit:10240,
          name: utils.assetsPath('img/[name].[hash:8].[ext]')
        }
      },
      {
        test:/\.(svg)(\?.*)?$/, // 图片
        loader:'svg-inline-loader', // 小图片的base64转换
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 视频音频
        loader:'url-loader',
        options:{
          limit:10240,
          name:utils.assetsPath('media/[name].[hash:8].[ext]')
        }
      },
      {
        test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader:'file-loader',
        options:{
          limit:10240,
          name:utils.assetsPath('fonts/[name].[hash:8].[ext]')
        }
      }
    ]
  },
  // 插件用于处理bundle文件的优化，资源管理和环境变量注入，
  // 作用于整个构建过程
  plugins:[
    // 注入环境变量
    new webpack.DefinePlugin({
      // Definitions...
      'process.env':require('../config/dev.env')
    }),
    // 自动清理构建目录产物
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack test',
      template:'./index.html',
      inject:true,
      favicon:'./favicon.ico'
    })
  ]
}