
'use strict'
const path = require('path')
const config = require('../config')
const packageConfig = require('../package.json')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')
const htmlWebpackPlugin = require('html-webpack-plugin')
exports.assetsPath = function(_path) {
  let basePath = ''
  const env = process.env.NODE_ENV
  if(env === 'development') {
    basePath = config.dev.assetsSubDirectory
  } else {
    basePath = config.build.assetsSubDirectory
  }
  return path.posix.join(basePath,_path)
}


exports.resolve = function(dir) {
  return path.join(__dirname, '..', dir)
}

exports.cssLoaders = function(options) {
  options = options || {}
  const cssLoader = {
    loader:'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  const styleLoader = {
    loader:'style-loader',  // 将css添加到style中
    options:{
      singleton: true,
      insertAt:'top',
      sourceMap: options.sourceMap
    }
  }
  const postCssLoader = {
    loader:'postcss-loader',  // 添加css前缀

  }

  function generateLoaders(loader,loaderOptions) {
    const loaders = []
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if(options.extract) {
      loaders.push(MiniCssExtractPlugin.loader)  // webpack4得使用mini-css-extract-plugin这个插件来单独打包css
    } else {
      loaders.push(styleLoader) 
    }
    loaders.push(cssLoader)
    if(options.usePostCSS){
      loaders.push(postCssLoader)
    }
    if(loader) {
      loaders.push({
        loader:loader+'-loader',
        options:Object.assign({},loaderOptions,{
          sourceMap:options.sourceMap
        })
      })
    }
    return loaders
  }
  return  {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less',{
      javascriptEnabled: true 
    }),
    sass: generateLoaders('sass',{
      indentedSyntax: true
    }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'), //webpack的stylus-loader来将stylus语言转化为原生css
  }
}

exports.styleLoaders = function(options){
  const output = []
  const loaders = exports.cssLoaders(options)
  for(const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.createNotifierCallback = function() {
  const notifier = require('node-notifier')
  return (severity, errors) => {
    if (severity !== 'error') return
    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title:"Webpack error",
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, '../','logo.png')
    })
  }
}
exports.setMPA = (mode) => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, '..', 'src/entry/*/index.js'))
  entryFiles.map((file,index) => {
    const entryFile = entryFiles[index]
    const match = entryFile.match(/\/src\/entry\/(.*)\/index\.js/)
    const pageName = match && match[1]
    entry[pageName] = entryFile
    console.log(path.join(__dirname,'..',`src/entry/${pageName}/index.html`))
    htmlWebpackPlugins.push(
      new htmlWebpackPlugin({
        template: path.join(__dirname,'..',`src/entry/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: mode === 'production'
          ? false
          : {
            html5: true,
            collapseWhitespace: true,
            preserveLinkBreaks: false,
            minifyCss: true,
            minifyJS: true,
            removeComments: false,
            removeAttributeQuotes: true
          }
      })
    )
  })
  return  {
    entry,
    htmlWebpackPlugins
  }
}