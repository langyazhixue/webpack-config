import StateMachine from 'javascript-state-machine';

// pending fullfilled rejected
const fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled',
    }, {
      name: 'reject',
      from: 'pending',
      to: 'rejected',
    },
  ],
  methods: {
    // 执行收藏
    onResolve(state, data, args) {
      console.log('onResolve');
      // 参数：state -  当前状态示例，data - fsm.resolve(xxx) 执行时候传过来的参数
      data.successList.forEach((fn) => fn(args));
    },
    onReject(state, data, args) {
      console.log('onReject');
      // 参数：state -  当前状态示例，data - fsm.resolve(xxx) 执行时候传过来的参数
      data.failList.forEach((fn) => fn(args));
    },
  },
});

class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];
    fn((args) => {
      // resolve函数
      fsm.resolve(this, args);
    }, (args) => {
      // reject 函数
      fsm.reject(this, args);
    });
  }

  then(successFn, failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }
}

function loadImg(src) {
  const promise = new MyPromise(((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject('图片加载失败');
    };
    img.src = src;
  }));
  return promise;
}

const src = 'https://www.imooc.com/static/img/index/logo_new.png';

const result = loadImg(src);

result.then((img) =>
  // console.log('img.width:' + img.width)
  // return 222 // 也可以打印出222
  img);
