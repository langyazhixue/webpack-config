import React from 'react';
import { Button } from 'antd';
import {  testCommon } from '@/utils/index'
class ButtonText extends React.Component{
  constructor(props) {
    super(props);
    this. state = {
      text : 'hangzhou'
    }
    this.handlerClick = this.handlerClick.bind(this)
  }
  render(){
    return (
      <Button onClick = { this.handlerClick } type="primary">{ this.state.text }</Button>
    )
  }
  handlerClick() {
    var res = testCommon()
    this.setState({
      text:res
    })
  }
}
export default ButtonText