{
  test: /\.scss$/,
  oneOf: [
    /* config.module.rule('scss').oneOf('vue-modules') */
    {
      resourceQuery: /module/,
      use: [
        /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 2,
            modules: {
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        },
        /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false,
            plugins: [
              function () { /* omitted long function */ }
            ]
          }
        },
        /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/sass-loader/dist/cjs.js',
          options: {
            sourceMap: false
          }
        },
        /* config.module.rule('scss').oneOf('vue-modules').use('style-resources-loader') */
        {
          loader: 'style-resources-loader',
          options: {
            patterns: []
          }
        }
      ]
    },
    /* config.module.rule('scss').oneOf('vue') */
    {
      resourceQuery: /\?vue/,
      use: [
        /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('scss').oneOf('vue').use('css-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 2
          }
        },
        /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false,
            plugins: [
              function () { /* omitted long function */ }
            ]
          }
        },
        /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/sass-loader/dist/cjs.js',
          options: {
            sourceMap: false
          }
        },
        /* config.module.rule('scss').oneOf('vue').use('style-resources-loader') */
        {
          loader: 'style-resources-loader',
          options: {
            patterns: []
          }
        },
        /* config.module.rule('scss').oneOf('vue').use('style-resource') */
        {
          loader: 'style-resources-loader',
          options: {
            patterns: [
              '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/src/styles/import.scss'
            ]
          }
        }
      ]
    },
    /* config.module.rule('scss').oneOf('normal-modules') */
    {
      test: /\.module\.\w+$/,
      use: [
        /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 2,
            modules: {
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        },
        /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false,
            plugins: [
              function () { /* omitted long function */ }
            ]
          }
        },
        /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/sass-loader/dist/cjs.js',
          options: {
            sourceMap: false
          }
        },
        /* config.module.rule('scss').oneOf('normal-modules').use('style-resources-loader') */
        {
          loader: 'style-resources-loader',
          options: {
            patterns: []
          }
        }
      ]
    },
    /* config.module.rule('scss').oneOf('normal') */
    {
      use: [
        /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('scss').oneOf('normal').use('css-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 2
          }
        },
        /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false,
            plugins: [
              function () { /* omitted long function */ }
            ]
          }
        },
        /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
        {
          loader: '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/node_modules/sass-loader/dist/cjs.js',
          options: {
            sourceMap: false
          }
        },
        /* config.module.rule('scss').oneOf('normal').use('style-resources-loader') */
        {
          loader: 'style-resources-loader',
          options: {
            patterns: []
          }
        },
        /* config.module.rule('scss').oneOf('normal').use('style-resource') */
        {
          loader: 'style-resources-loader',
          options: {
            patterns: [
              '/Users/jiasixian/Documents/study/构建工具/webpack-study/webpack-optimizion/src/styles/import.scss'
            ]
          }
        }
      ]
    }
  ]
},