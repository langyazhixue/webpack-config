'use strict'
var path = require('path')
const config = require('./prod.env')
const assetPath = config.publishBase.replace(/"/g, '')
module.exports = {
  dev:{
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {  //代理配置

    },
    host: '0.0.0.0',  // 这样配置别人可以访问你的服务器
    port: 7987, // 服务器端口 
    cssSourceMap:true, // 开启css sourceMap
    devtool: 'cheap-source-map', // 控制如何生成生成 source map。
    jsSourceMap: true,
    autoOpenBrowser: true, // 开启自动打开浏览器
    errorOverlay: true,  // 当出现编译错误或警告时候，在浏览器中显示全屏覆盖。
    notifyOnErrors: true,  // 开启错误提示
    useEslint: true, // 开启 eslint代码规范检测
    showEslintErrorInOverlay: false, // 如果开启，eslint errors and warnings  会在浏览器中开启
  },
  build:{
    index: path.resolve(__dirname,'../dist/index.html'),
    assetsRoot: path.resolve(__dirname,'../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: assetPath,
    productionSourceMap: false,
    cssSourceMap: false, // 不开启css sourceMap
    jsSourceMap:  false // 不开启 js sourceMap
  }
}