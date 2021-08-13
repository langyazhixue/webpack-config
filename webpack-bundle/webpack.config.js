const path = require("path");
const copyrightwebpackplugin = require("./My-plugins/copyright-webpack-plugin.js");
//! 默认配置
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
  },
  //处理loader查询路径
  resolveLoader: {
    modules: ["node_modules", "./My-Loaders"]
  },
  plugins: [new copyrightwebpackplugin({ name: "开课吧" })]
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: [
  //         "replaceLoader",
  //         // path.resolve(__dirname, "./My-Loaders/replaceLoader.js"),
  //         {
  //           // loader: path.resolve(
  //           //   __dirname,
  //           //   "./My-Loaders/replaceLoaderAsync.js"
  //           // ),
  //           loader: "replaceLoaderAsync",
  //           options: {
  //             name: "开课吧"
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }
};
