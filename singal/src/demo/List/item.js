import getCart from '../ShoppingCart/getCart'
import StateMachine from 'javascript-state-machine'
import log from '../utils/log'
export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart  = getCart() // cart 例子
  }
  initContent(){
    let $el = this.$el
    let data = this.data
    $el.append($(`<p>名称：${data.name}</p>`))
    $el.append($(`<p>价格：${data.price}</p>`))
  }
  initBtn(){
    let $el = this.$el
    let $btn = $('<button/>')
    let _this = this
    let fsm = new StateMachine({
      init:'加入购物车',
      transitions:[
        {
          name:'addtoCart',
          from:'加入购物车',
          to:'从购物车删除'
        },{
          name:'deleteFromCart',
          from:'从购物车删除',
          to:'加入购物车'
        }
      ],
      methods: {
        // 执行收藏
        onAddtoCart: function(){
          _this.addToCartHandle()
          updateText()
        },
        onDeleteFromCart: function(){
          _this.deleteFromHandle()
          updateText()
        }
      },
    })
    function updateText(){
      $btn.text(fsm.state)
    }
    $btn.click(() => {
      // 添加到购物车，从购物车移除
      if(fsm.is('加入购物车')) {
        fsm.addtoCart()
      } else {
        fsm.deleteFromCart()
      }
    })
    updateText() // 初始化执行
    $el.append($btn)
  }
  
  // 添加到购物车
  @log('add')
  addToCartHandle(){
    this.cart.add(this.data)
  }
  // 从购物车删除
  @log('delete')
  deleteFromHandle(){
    this.cart.del(this.data.id)
  }
  render(){
    this.list.$el.append(this.$el)
  }
  init(){
    this.initContent()
    this.initBtn()
    this.render()
  }
}