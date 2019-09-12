const glob = require('glob-all')
const path = require('path')
describe('Checking generated js files', () => {
  it('should generate js files', (done) => {
    const files = glob.sync([
      path.join(__dirname,'../../dist/static/js/index.*.js')
    ])
    if(files.length > 0) {
      done()
    } else {
      throw new Error('no js files generate')
    }
  })
})