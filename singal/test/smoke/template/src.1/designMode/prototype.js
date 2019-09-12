// 原型模式

const prototype = {
  getName() {
    return `${this.first} ${this.last}`;
  },
  say() {
    alert('hellp');
  },
};

// 基于原型创建 X
const x = Object.create(prototype);
x.first = 'A';
x.last = 'B';

console.log(x.getName());
