import { readonly } from 'core-decorators'
class Circle {
  draw(){
    console.log('画一个图形')
  }
}

class Decorator {
  constructor(circle){
    this.circle = circle
  }
  draw(){
    this.circle.draw()
    this.setRedBorder(circle)
  }

  setRedBorder(circle){
    console.log('设置红色边框')
  }
}

let circle = new Circle()
circle.draw()

let dec = new Decorator(circle)

dec.draw()

// 基础装饰
@testDec(true)
class Demo {
}

function testDec(v) {
  return function(target, key, descriptor){
    target.isDec = v
  }
}
alert(Demo.isDec)

// mixins

function mixins(...list) {
  // ... 扩展
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}


const  Foo =  {
  foo(){
    console.log('foo')
  }
}

@mixins(Foo)
class MyClass {

}

let obj = new MyClass()
obj.foo()

// 装饰方法、、、

function readonly1 (target, name, descriptor) {
  console.log(descriptor)
  descriptor.writable = false
  //descriptor.configurable = false
  return descriptor
}


class Person {
  constructor(){
    this.first = 'A'
    this.last = 'B'
    return this
  }

  @readonly
  name(){
    return `${this.first} ${this.last}`
  }
}


var p = new Person()

console.log(p.name())

// p.name = function(){
//   console.log('f')
// }

// p.name()


// 装饰方法

class MyMath {
  @log
  add(a,b) {
    return a + b
  }
}

const math = new  MyMath()

const result = math.add (2, 4) // 设置value 劫持

console.log('result', result)

function log (target ,name ,descriptor) {

  console.log(descriptor.value)
    var oldValue = descriptor.value
    //  在函数设置的时候运行
    descriptor.value = function(){
      console.log(`Calling ${name} width`,arguments)
      return oldValue.apply(this, arguments)
    }
    return descriptor
}
                       

