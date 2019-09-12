import React from 'react'
import ReactDOM from 'react-dom'
import logo from './asstes/images/avatar.png'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './styles/search.scss'
import 'antd/dist/antd.css'
moment.locale('zh-cn')

import ButtonText from '@/components/button.jsx'
import DownloadTest from '@/components/download.jsx'
import { unUsedFunction333 } from '@/utils/test'
class MySearch extends React.Component{
  constructor(){
    super(...arguments)
    this.state = {
      Text: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render(){
    const { Text } = this.state
    return (
      <div  className='search-text'>
        <ButtonText />
        <DownloadTest />
        <div className='bg'></div>
        <div>
          <img src='/static/img/logo.png'></img>
          <img src ={logo}></img>
        </div>
        <div onClick= { this.handleClick }>动态异步加载</div>
        <div> 
        { Text ? <Text/> :''} 
        </div>
      </div>
    )
  }
  handleClick(){
    // unUsedFunction333()
    let self = this
    import ('@/utils/text.js')
      .then( (Text) => {
        debugger
        self.setState({
          Text: Text.default
        })
      })
  }
}
ReactDOM.render(<MySearch/>,document.getElementById('app-search'))