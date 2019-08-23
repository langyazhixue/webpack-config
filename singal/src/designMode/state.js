// 状态模式

class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`trun to ${this.color} light`)
    context.setState(this)
  }
}

// 主体
class Context {
  constructor(){
    this.state = null 
  }
  getState() {
    return this.state
  }
  setState (state) {
    this.state = state
  }
}

var context = new Context()
var red = new State('red')

var green = new State('green')

var yellow = new State('yellow')

red.handle(context)
console.log(context.getState())