 // 原型模式

 let prototype = {
   getName: function() {
     return this.first + ' ' + this.last
   },
   say: function() {
     alert('hellp')
   }
 }

 // 基于原型创建 X
 let x = Object.create(prototype)
 x.first = 'A'
 x.last = 'B'

 console.log(x.getName())

 