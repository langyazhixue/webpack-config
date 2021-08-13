

// {
//   './src/index.js': {
//     dependencies: { './expo.js': './src/expo.js' },
//     code: '"use strict";\n' +
//       '\n' +
//       'var _expo = require("./expo.js");\n' +
//       '\n' +
//       'console.log("hello webpack!!!add:" + (0, _expo.add)(1, 2)); // //!代码生成后，是不是需要处理下require?\n' +
//       '// 遍历依赖\n' +
//       '//     入口开始遍历'
//   },
//   './src/expo.js': {
//     dependencies: { './test.js': './src/test.js' },
//     code: '"use strict";\n' +
//       '\n' +
//       'Object.defineProperty(exports, "__esModule", {\n' +
//       '  value: true\n' +
//       '});\n' +
//       'exports.minus = exports.add = void 0;\n' +
//       '\n' +
//       'var _test = _interopRequireDefault(require("./test.js"));\n' +
//       '\n' +
//       'function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n' +
//       '\n' +
//       'var add = function add(a, b) {\n' +
//       '  console.log(a + b);\n' +
//       '};\n' +
//       '\n' +
//       'exports.add = add;\n' +
//       '\n' +
//       'var minus = function minus(a, b) {\n' +
//       '  console.log(a - b);\n' +
//       '};\n' +
//       '\n' +
//       'exports.minus = minus;'
//   },
//   './src/test.js': {
//     dependencies: {},
//     code: '"use strict";\n' +
//       '\n' +
//       'Object.defineProperty(exports, "__esModule", {\n' +
//       '  value: true\n' +
//       '});\n' +
//       'exports["default"] = test;\n' +
//       '\n' +
//       'function test() {\n' +
//       '  console.log("test");\n' +
//       '}'
//   }
// }
// code 是一个对象
(function(graph){
  // entry  开始的入口文件地址
  function require(module){
    function reRequire(relativePath){
      return require(graph[module].dependencies[relativePath])
    }
    var exports = {};
    (function(require,exports,code){
      // 执行入口文件的代码，相当于在 exports
      // 入口文件代码上又执行了 require
      eval(code)
    })(reRequire,exports,graph[module].code)
    return exports;
  }
  require(entry)
})(code)