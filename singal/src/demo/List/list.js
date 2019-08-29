
import data from '../data'
import createItem from './createItem'
console.log(data)
export default class List {
  constructor(app) {
    this.app = app
    this.$el = $('<div></div>')
  }
  // 获取数据
  loadData(){
    return data
  }
  // 生成列表
  initItemList(data){
    // data.forEach( itemData=> {
    //   let item = createItem(this, itemData)
    //   item.init()
    // })

    for (let [index, itemData] of data.entries()) {
      let item = createItem(this, itemData)
      item.init()
      //console.log(index, elem);
    }
  }
  render(){
    this.app.$el.append(this.$el)
  }
  init(){
    this.initItemList(this.loadData())
    this.render()
  }
}