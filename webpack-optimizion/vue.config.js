const path = require('path')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/import.scss')
      ]
    })
}
module.exports = {
  publicPath:'./',
  outputDir:'dest',
  lintOnSave:true,
  // 给 plugin 添加选项
  // pluginOptions: {
  //   'style-resources-loader': {
  //     'preProcessor': 'scss',
  //     'patterns': [
  //       path.resolve(__dirname, './src/styles/import.scss'),
  //     ]
  //   }
  // },
  chainWebpack: config => {
    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // const types = ['vue', 'normal']
    // types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    // config.plugins.delete('prefetch')
    // config.plugins.delete('preload')

    // 修改一个 url-loader
    // config.module
    //   .rule('images')
    //     .use('url-loader')
    //       .loader('url-loader')
    //       .tap(options => Object.assign(options, { limit: 10240 }))
  },
  // 基于 该对象会被 wbepack-merge 最终的配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  css : {
      // sass-loader v8-，这个选项名是 "data"
     // sass-loader v8 中，这个选项名是 "prependData"
     // sass-loader v10+，这个选项名是 "additionalData
    // 注入全局 CSS 变量最佳方式
    // extract: false 
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";`
      }
      // scss: {
      //   data: `@import "@/styles/variables.scss";`,
      //   prependData: `@import "@/styles/variables.scss";`
      // }
    }
  }
}
