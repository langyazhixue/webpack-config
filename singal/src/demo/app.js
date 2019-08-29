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