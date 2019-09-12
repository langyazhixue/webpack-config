const glob = require('glob-all')
const path = require('path')
describe('Checking generated html files', () => {
  it('should generate html files', (done) => {
    const files = glob.sync([
      path.join(__dirname,'../../dist/index.html')
    ])
    if(files.length > 0) {
      done()
    } else {
      throw new Error('no html files generate')
    }
  })
})

