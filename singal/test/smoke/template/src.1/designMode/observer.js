
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    // 只要状态有更新，就会 通知所有
    this.state = state;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }

  attach(observer) {
    this.observers.push(observer);
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`);
  }
}

const s = new Subject();
const o1 = new Observer('o1', s);
const o2 = new Observer('o2', s);
const o3 = new Observer('o2', s);
s.setState(1);
s.setState(2);
s.setState(3);


//   自定义回调
const callbacks = $.Callbacks(); //
callbacks.add((info) => {
  console.log('fn1', info);
});

callbacks.add((info) => {
  console.log('fn2', info);
});
callbacks.fire('gogogo');

// nodejs 自定义事件

const { EventEmitter } = require('events');

class Dog extends EventEmitter {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

const simon = new Dog('simon');
simon.on('bark', function () {
  console.log(this.name, 'barked');
});


setTimeout(() => {
  simon.emit('bark');
}, 2000);

// Stream 用到了自定义事件

// var fs = require('fs')

// var readStream = fs.createReadStream('./test.txt')

// let length = 0
// readStream.on('data', function(chunk) {
//   length += chunk.toString().length
// })

// readStream.on('end', function(chunk) {
//   console.log(length)
// })
