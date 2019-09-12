
import getCart from './getCart';

export default class ShoppingCart {
  constructor(app, cart) {
    this.app = app;
    this.cart = getCart();
    this.$el = $('<div></div>').css({
      'padding-bottom': '10px',
      'border-bottom': '1px solid #ccc',
    });
  }

  initBtn() {
    const $btn = $('<button>show</button>');
    const _this = this;
    $btn.click(() => {
      _this.showCart();
    });
    this.$el.append($btn);
  }

  showCart() {
    const list = this.cart.getList();
    alert(list);
  }

  render() {
    this.app.$el.append(this.$el);
  }

  init() {
    this.initBtn();
    this.render();
  }
}
