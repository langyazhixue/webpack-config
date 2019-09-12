// import './promise.js'
// import './prototype.js'
// import './park.js'
// import './factory.js'
// import './singleton.js'
// import './adaptee.js'

// import './decorator.js'
// import './proxy.js'
// import './observer'
// import './iterator.js'
// import './state'

// import './memo'

import './Mediator';

// class Person{//定义了一个名字为Person的类
//   constructor(name,age){  //constructor是一个构造方法，用来接收参数
//       this.name = name;  //this代表的是实例对象
//       this.age = age;
//   }
//   say(){//这是一个类的方法，注意千万不要加上function
//       return "我的名字叫" + this.name+"今年"+this.age+"岁了";
//   }
//   getName(){
//     return this.name
//   }
// }
// // 创建一个实例
// var obj = new Person("laotie",88);
// console.log(obj.say());//我的名字叫laotie今年88岁了

// console.log(Person.prototype)  // { constructor,getName,say}


// // 继承

// class Student extends Person {
//   constructor(name, age, number) {
//     super(name,age)
//     this.number = number
//   }
//   study(){
//     let name = super.getName()
//     alert(`${name} study` )
//   }
// }

// var xiaoming = new Student("xiaoming",18,90);

// // xiaoming.study()

// console.log(Student.__proto__ === Person)

// console.log(Student.prototype.__proto__ === Person.prototype)

// class A {

// }
// function C () {

// }

// console.log(C.__proto__ === Function.prototype)

// console.log(C.prototype.__proto__ === Object.prototype)


// console.log(A.__proto__ === Function.prototype)

// console.log(A.prototype.__proto__ === Object.prototype)


// class Foo {
//   constructor(){
//     // return Object.create(null)
//     return Person
//   }
// }

// const FooNew = new Foo('xiao',16)
// console.log(FooNew)
// console.log(FooNew.__proto__ === Foo) // false
// console.log(FooNew.prototype) //false
// // const F
