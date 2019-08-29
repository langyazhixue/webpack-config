



window.onload = function(){
  console.log('onload')
  var arr = [1,2,3]

  var nodeList = document.getElementsByTagName('p')

  var $p = $('p')

  function each(data) {
    // 生成迭代器
    var $data = $(data) 
    $data.each(function(key, val) {
      console.log(key, val)
    })
  }
  // 顺序遍历有顺序集合

  each(arr)
  each(nodeList)
  each($p)
  
}
  // arr.forEach(function(item) {
  //   console.log(item)
  // })

  // var i, length = nodeList.length

//   for(i=0; i < length ; i ++) {
//     console.log(nodeList[i])
//   }

//   $p.each(function(key, p) {
//     console.log(key, p)
//   })
// }

class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  next(){
    if(this.hasNext()) {
      return this.list[this.index ++]
    }
    return null
  }

  hasNext(){
    if(this.index >= this.list.length) {
      return false
    }
    return true
  } 
}
class Container{
  constructor(list) {
    this.list = list
  }
  getIterator(){
    return new Iterator(this)
  }
}

let arr = [1,2,3,4,5,6]
let container = new Container(arr)
let iterator = container.getIterator(container)
while(iterator.hasNext()) {
  console.log(iterator.next())
}

for(let v of arr) {
  console.log(v) // 只能读取键值
}

function each(data) {
  for(let item of data) {
    console.log(item)
  }
}

// `Symbol.iterator`并不是人人都直到
// 也不是每个人都需要封装一个each方法
// 因此有了 `for ... of` 语法