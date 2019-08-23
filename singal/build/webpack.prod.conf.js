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
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
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
  // externals:{
  //   'react': 'React', 
  //   'react-dom': 'ReactDOM'
  // },
  optimization:{
      // splitChunksPlugin webpack4内置的
    splitChunks:{
      chunks: 'all', //  `all async initial` // 这表示将选择哪些块进行优化,提供all 可以特别强大，意味着在异步和非异步块之间可以共享块
      minSize: 0, // 抽离的公共包最小的大小   默认设置是大于 30k
      // maxSize: 0, // 抽离的公共包最大的大小
      minChunks: 1, // 一个方法在a页面和b页面都使用到，那么这个chunks就是2
      maxAsyncRequests: 5, // 根据需要加载块时的最大并行请求数将小于或等于5(异步请求的数量小于5)
      maxInitialRequests: 3, // 初始页面加载时的最大并行请求数将小于或等于3
      automaticNameDelimiter: `~`, // webpack将使用块的名称和名称生成名称
      name: true,
      // cacheGroups其实是splitChunks里面最核心的配置
      // 
      cacheGroups:{
        // 把 node_modules 中的公用包分出来
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minChunks: 1, // 最小公用次数
          priority: -10,
        },
         // 把 src/components  中的公用的自定义组件库分出来
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'), // 可自定义拓展你的规则
          chunks: 'all',
          minChunks: 1, // 最小公用次数
          priority: 5,
          reuseExistingChunk: true
        },
        //  把 src/utils 公共的js分离出来
        // commons: {
        //   name: 'chunk-utils',
        //   test: resolve('src/utils'), // 可自定义拓展你的规则
        //   chunks: 'all',
        //   minChunks: 1, // 最小公用次数
        //   priority: 10,
        // },
        // 把用在2个以上chunk 的代码分离出来
        default:{
          name: 'chunk-default',
          chunks: 'all',
          minChunks: 2, // 最小公用次数
          priority: -20,
        }
      }
    },
    minimizer:[
      // 生产环境压缩CSS
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
      }), 
      new TerserPlugin({
         cache: true,
         parallel: true,
         sourceMap: false, // Must be set to true if using source-maps in production
         terserOptions: {
           // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
         }
       })
     ]
  },
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
    new webpack.optimize.ModuleConcatenationPlugin(),
    
    // 生产环境把静态资源提取出来
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }]),
    // 生产打包优化
    
    //分离基础库，基础库用CDN
    // new HtmlWebpackExternalsPlugin({
    //   externals:[
    //     {
    //       module:'react',
    //       entry:'https://cdn.staticfile.org/react/16.4.0/umd/react.production.min.js',
    //       global:'React'
    //     },{
    //       module:'react-dom',
    //       entry:'https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.production.min.js',
    //       global:'ReactDOM'
    //     }
    //   ]
    // })
  ]
})

module.exports = buildWebpackConfig


