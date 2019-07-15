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
    css:generateLoaders(),
    postcss:generateLoaders(),
    less:generateLoaders('less',{
      javascriptEnabled: true 
    }),
    sass:generateLoaders('sass',{
      indentedSyntax: true
    }),
    scss: generateLoaders('sass'),
    stylus:generateLoaders('stylus'), //webpack的stylus-loader来将stylus语言转化为原生css
  }
}


exports.styleLoaders = function(options){
  const output = []
  const loaders = exports.cssLoaders(options)
  for(const extension in loaders) {
    const loader =loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use:loader
    })
  }
  return output
}