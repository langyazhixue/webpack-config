'use strict'
var path = require('path')
var webpack = require('webpack')
const utils = require('./utils')
const config = require('../config/index')

function resolve(dir) {
  return path.join(__dirname,'..',dir)
}

module.exports = {
  // 基础目录：绝对路径，用于从配置中解析入口起点(entry point)和 loader，默认是当前目录，推荐传递一个值（不同操作系统路径解析不一样）
  context: path.resolve(__dirname,'../'),
  output:{
    filename: '[name].js',
    // publicPath: process.env.NODE_ENV === 'development' 
    //   ? config.dev.assetsPublicPath 
    //   : config.build.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules:[
      {
        test:/\.jsx?$/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/, // 图片
        loader:'url-loader', // 小图片的base64转换
        options:{
          limit:10240,
          name: utils.assetsPath('img/[name].[hash:8].[ext]')
        }
      },
      // {
      //   test:/\.(svg)(\?.*)?$/, // 图片
      //   loader:'svg-inline-loader', 
      // },
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
  }
}