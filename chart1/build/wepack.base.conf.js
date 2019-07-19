var path = require('path')
var webpack = require('webpack')
module.exports = {
  context: path.resolve(__dirname,'../'), // 基础目录：绝对路径，用于从配置中解析入口起点(entry point)和 loader，默认是当前目录，推荐传递一个值（不同操作系统路径解析不一样）
}