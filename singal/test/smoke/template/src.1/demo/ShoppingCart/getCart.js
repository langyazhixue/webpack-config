// 是一个Car  单例模式
class Cart {
  constructor() {
    this.list = [];
  }

  add(data) {
    this.list.push(data);
  }

  del(id) {
    this.list = this.list.filter((item) => !(item.id === id));
  }

  getList() {
    return this.list.map((item) => item.name).join('\n');
  }
}

// 返回单例

const getCart = (function () {
  // 闭包
  let instance;
  return function () {
    if (!instance) {
      instance = new Cart();
    }
    return instance;
  };
}());

export default getCart;
