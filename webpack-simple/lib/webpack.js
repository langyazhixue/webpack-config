const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

// 1. 分析依赖
// 2. ES6转ES5
// 3. 替换exports和require

module.exports = class Webpack {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }
  run() {
    //! 分析入口模块了：依赖和内容
    const info = this.parse(this.entry); //entryFile,
    // dependencies,
    // code
    //! 分析所有依赖模块，解析依赖的依赖
    this.modules.push(info);
    for (let i = 0; i < this.modules.length; i++) {
      const item = this.modules[i];
      const { dependencies } = item;
      if (dependencies) {
        for (let j in dependencies) {
          this.modules.push(this.parse(dependencies[j]));
        }
      }
    }
    const obj = {};
    //! 数据格式转换 数组变对象

    this.modules.forEach(item => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code
      };
    });
    console.log(obj);
    this.file(obj);
  }
  // 解析文件
  parse(entryFile) {
    const content = fs.readFileSync(entryFile, "utf-8");
    // 读取文件，转化AST 语法树
    // 解析 ES 模块 @babel/parser
    const ast = parser.parse(content, {
      sourceType: "module"
    });

    //! 保存依赖的路径信息
    // @babel/traverse").default; 解析入口文件的依赖
    // 抽象语法树中所有节点的遍历
    const dependencies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        // console.log(node);
        const newPathName =
          "./" + path.join(path.dirname(entryFile), node.source.value);
        dependencies[node.source.value] = newPathName;
      }
    });

    // @babel/core 的 transformFromAst 转成 es6
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"]
    });
    // {

    // }
    return {
      entryFile,
      dependencies,
      code
    };
  }
  // code 是一个对象
  file(code) {
    //! 生成文件的目录地址
    const filePath = path.join(this.output.path, this.output.filename);
    const newCode = JSON.stringify(code);
    const bundle = `(function(graph){
      function require(module){
        function reRequire(relativePath){
          return require(graph[module].dependencies[relativePath])
        }
        var exports = {};
        (function(require,exports,code){
          eval(code)
        })(reRequire,exports,graph[module].code)
        return exports;
      }
      require('${this.entry}')
    })(${newCode})`;

    fs.writeFileSync(filePath, bundle, "utf-8");
  }
};
