// 代理模式
// import z4 from 'jquery'

class ReadImg {
  constructor(fileName){
    this.fileName = fileName
    this.loadFormDisk()
  }
  display(){
    console.log('display...' + this.fileName)
  }
  loadFormDisk(){
    console.log('loading...' + this.fileName )
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new ReadImg(fileName)
  }
  display(){
    this.realImg.display()
  }
}

// Jquery 代理

// $('#div1').click(function(){
//   console.log('f')
//   var _this = this
//   setTimeout(function(){
//     // _this 符合期望
//     $(_this).addClass('red')
//   }, 1000)
// })


$('#div1').click(function(){
  console.log('f')
  setTimeout($.proxy(function(){
    // _this 符合期望
    $(this).addClass('white')
  },this), 1000)
})

// var test = function(){
// 	this.txt="这是一个对象属性"
// 	$("div").click($.proxy(this.myClick,this))
// }

// test.prototype.myClick = function(event){
// 	alert(this.txt)
// 	alert(event.currentTarget.nodeName)
// }
// var x = new test()


// 明星经纪人代理

let star = {
  name: '张 X X',
  age : 25,
  phone:'129009'
}

let agent = new Proxy(star,  {
  get: function(target , key ){
    if(key === 'phone') {
      // 返回经纪人的手机号
      return 'agent: 189'
    }
    if(key === 'price') {
      return 120000
    }
    return target[key]
  },
  set: function(target, key, val) {
    if(key === 'customPrice') {
      if(val < 10000) {
        throw new Error('价格太低')
      } else {
        target[key] = val
      }
      return true
    }
  }
})

console.log(agent.phone)

console.log(agent.price)

agent.customPrice = 150000
console.log(agent.customPrice)

Object.defineProperty(Object.prototype,'getslef' ,{
  get:function(){
    return this
  }
})
var foo = (function(){
  var o = {
    a: 1,
    b: 2,
    c: 'asdjhajdad',
    'd': 123123
  }
  return function(key){
    return o[key]
  }
})()
console.log(foo('getSelf'))