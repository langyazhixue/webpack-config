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
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin') // 分离基础库
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const buildWebpackConfig = merge(baseWebpackConfig,{
  mode: 'none',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.cssSourceMap,
      extract: true,
      usePostCSS: true,
    })
  },
  output: {
    path:path.resolve(__dirname,config.build.assetsRoot),
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),  // 生产环境用chunkhash，并且打到 assetsSubDirectory 环境
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js')
  },
  externals:{
    'react': 'React', 
    'react-dom': 'ReactDOM'
  },
  // optimization:{
  //   optimization:{
  //     splitChunks:{
  //       chunks: 'all', //  `all async initial` // 这表示将选择哪些块进行优化,提供all 可以特别强大，意味着在异步和非异步块之间可以共享块
  //       minSize: 30000,
  //       maxSize: 0,
  //       minChunks: 1,
  //       maxAsyncRequests: 5, // 根据需要加载块时的最大并行请求数将小于或等于5
  //       maxInitialRequests: 5, // 初始页面加载时的最大并行请求数将小于或等于3
  //       automaticNameDelimiter: `~`, // webpack将使用块的名称和名称生成名称
  //       name: true,
  //       cacheGroups:{
  //         vendors: {
  //           name: 'chunk-libs',
  //           test: /[\\/]node_modules[\\/]/,
  //           priority: -10,
  //           chunks: 'initial'
  //         }
  //       }
  //     }
  //   }
  // },
  plugins: [
    // 清理输出目录
    new CleanWebpackPlugin(),
    // 为生产环境注入环境变量
    new webpack.DefinePlugin({
      'process.env':require('../config/prod.env')
    }),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-test',
      template: resolve('index.html'),
      filename: 'index.html',
      inject: true,
      favicon:resolve('favicon.ico'),
      path: config.build.assetsPublicPath + config.build.assetsSubDirectory,
      // 生产环境把压缩html
      minify: false,
      // minify: {
      //   html5: true,
      //   collapseWhitespace: true,
      //   preserveLinkBreaks: false,
      //   minifyCss: true,
      //   minifyJS: true,
      //   removeComments: false,
      //   removeAttributeQuotes: true
      // }
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
      }]),
    // 生产打包优化
    
    // 分离基础库，基础库用CDN
    // new HtmlWebpackExternalsPlugin({
    //   externals:[
    //     {
    //       module:'react',
    //       entry:'https://cdn.staticfile.org/react/16.9.0-alpha.0/cjs/react.production.min.js',
    //       global:'React'
    //     },{
    //       module:'react-dom',
    //       entry:'https://cdn.staticfile.org/react-dom/16.9.0-alpha.0/cjs/react-dom.production.min.js',
    //       global:'ReactDOM'
    //     }
    //   ]
    // })
  ]
})

module.exports = buildWebpackConfig


