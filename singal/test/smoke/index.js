const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha({
  timeout:'10000ms'
})

//process.chdir(path.join(__dirname,'template'))

rimraf('../../dist', () => {
  const prodConfig = require('../../build/webpack.prod.conf.js')
    webpack(prodConfig, ((err ,stats) => {
      if(err) {
        throw err
        process.exit(2)
      }
      //console.log(stats)
      process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false
      }))
      process.stdout.write('\r\n')
      process.stdout.write('begin run test')
      mocha.addFile(path.join(__dirname,'html-test.js'))
      mocha.addFile(path.join(__dirname,'css-js-test.js'))
      mocha.run()
    }))
})