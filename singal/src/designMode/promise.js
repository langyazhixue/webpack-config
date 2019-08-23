function loadImg(src){
  var promise = new Promise(function(resolve, reject) {
    var img = document.createElement('img')
    console.log(img)
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function(){
      reject('图片加载失败')
    }
    img.src = src 
  })
  return promise
}

var src = 'https://www.imooc.com/static/img/index/logo_new.png'

var result = loadImg(src)
result.then(img => {
  console.log('img.width:' + img.width)
  //return 222 // 也可以打印出222
  return img
})
  .then(img => {
    console.log(img)
    console.log('img.height:' + img.height)
  })
  .catch(err => {
    console.log(err)
  })