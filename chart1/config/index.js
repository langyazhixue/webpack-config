'use strict'
var path = require(path)
const config = require('./prod.env')
const assetPath = config.publishBase.replace(/"/g, '')
module.exports = {
  dev:{
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {  //代理配置

    },
    host: '0.0.0.0',  // 这样配置别人可以访问你的服务器
    port: 9561, // 服务器端口 
    cssSourceMap:false, // 开启css sourceMap
    devTool: 'eval', // 控制如何生成生成 source map。
    jsSourceMap: true,
    autoOpenBrowser: true, // 开启自动打开浏览器
    errorOverlay: true,   
    notifyOnErrors: true,  // 开启错误提示
    useEslint: true, // 开启 eslint代码规范检测
    showEslintErrorInOverlay: false, // 如果开启，eslint errors and warnings  会在浏览器中开启
  },
  pro:{
    index: path.resolve(__dirname,'../dist/index.html'),
    assetsRoot: path.resolve(__dirname,'../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: assetPath,
    productionSourceMap: false,
    cssSourceMap: false, // 不开启css sourceMap
    jsSourceMap:  false // 不开启 js sourceMap
  }
}