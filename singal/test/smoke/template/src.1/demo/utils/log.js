export default function log(type) {
  return function (target, name, descriptor) {
    const oldValue = descriptor.value; // value 就是这个function
    descriptor.value = function () {
      console.log(`日志上报 ${type}`);
      return oldValue.apply(this, arguments); // 在运行这个函数
    };
    return descriptor;
  };
}
