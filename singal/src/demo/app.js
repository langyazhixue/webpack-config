import ShoppingCart from './ShoppingCart/shoppingCart'
import List from './List/list'
class App {
  constructor(id){
    this.$el = $('#' + id) 
  }
  // 初始化购物车
  initShoppingCart(){
    let shoppingCart = new ShoppingCart(this)
    shoppingCart.init()
  }
  // 初始化列表
  initList(){
    let list = new List(this)
    list.init()
  }
  init(){
    this.initShoppingCart()
    this.initList()
    console.log('123')
  }
}

export default  App

// 工厂模式：$（‘XXX）
// 单例模式 购物车
// 装饰器模式  log
// 观察者模式：网页事件，Promise
// 状态模式：添加到购物车 && 从购物车删除
// 模版方法模式： 渲染有统一的方法，内部包含了各个模块渲染
// 代理模式：打折商品信息处理
