
import getCart from './getCart'

export default class ShoppingCart {
  constructor(app,cart) {
    this.app = app
    this.cart = getCart()
    this.$el = $('<div></div>').css({
      'padding-bottom':'10px',
      'border-bottom':'1px solid #ccc'
    })
  }
  initBtn(){
    let $btn = $('<button>show</button>')
    let _this = this
    $btn.click(function(){
      _this.showCart()
    })
    this.$el.append($btn)
  }
  showCart(){
    let list = this.cart.getList()
    alert(list)
  }
  render(){
    this.app.$el.append(this.$el)
  }
  init(){
    this.initBtn()
    this.render()
  }
}