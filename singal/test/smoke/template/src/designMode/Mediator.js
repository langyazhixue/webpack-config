// 中介者

class A {
  constructor() {
    this.number = 0;
  }

  setNumber(num, m) {
    this.number = num;
    if (m) {
      m.setB();
    }
  }
}


class B {
  constructor() {
    this.number = 0;
  }

  setNumber(num, m) {
    this.number = num;
    if (m) {
      m.setA();
    }
  }
}


class Mediator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  setB() {
    const { number } = this.a;
    this.b.setNumber(number / 100);
  }

  setA() {
    const { number } = this.a;
    this.a.setNumber(number * 100);
  }
}

const a = new A();

const b = new B();

const m = new Mediator(a, b);


a.setNumber(100, m);

console.log(m.a.number, m.b.number);
