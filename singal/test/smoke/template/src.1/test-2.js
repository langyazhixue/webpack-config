
function test() {
  console.log('test');
  return 'test';
}
if (process.env.NODE_ENV === 'production') {
  // module.exports = require('./test-1.js');
  module.exports = {
    test,
  };
} else {
  // module.exports = require('./test-1.js');
  module.exports = {
    test,
  };
}
