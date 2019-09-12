// 单例模式

class SingleObject {
  login() {
    console.log('login...');
  }
}

// 静态方法
SingleObject.getInstance = (function () {
  // 利用了函数的闭包
  let instance;
  return function () {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance;
  };
}());

// 测试： 注意这里只能使用 静态函数 getInstance，不能 new SingleObject

const obj1 = SingleObject.getInstance();

obj1.login();

const obj2 = SingleObject.getInstance();

obj2.login();

console.log(obj1 === obj2);
