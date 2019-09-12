// 适配器模式

class Adaptee {
  specificRequest() {
    return '德国标准的插头';
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }

  request() {
    const info = this.adaptee.specificRequest();
    return `${info} -> 转换器 -> 中国标准的插头`;
  }
}


const target = new Target();
console.log(target.request());
