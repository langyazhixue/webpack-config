import React from 'react';
import ReactDOM from 'react-dom';
import './styles/search.scss';
import logo from './asstes/images/avatar.png'
import SearchTest from './ss'

import logo2 from '../static/img/logo.png'

// import zip111 from '../static/zip/1.zip'
//import svg404 from './asstes/svg/404.svg' // svg-line-loader
//const [raw, viewBox, d] = svg404.match(/^<svg.+?viewBox="(.+?)".*><path.+?d="(.+?)".*><\/path><\/svg>$/)

 
// var svg = svg404.replace("\"","").replace("\"","");
class MySearch extends React.Component{
  render(){
    return (
      <div id='11' className='search-text'>
      <SearchTest/>
      <div>
    

      {/* <a id='video11' download = 'tes.zip' href={zip111}>下载zip</a> */}
      <br/>
      <a id='video222' onClick = { this.chickA }>下载zip</a>
      </div>
        {/* <div>
          <img src='/static/img/logo.png'></img>
        </div> */}
        <div onClick= { this.handleClick }>按钮点击</div>
        <div className='bg'></div>
        {/* <div>
          图片插
          <svg xmlns="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox={viewBox}  className='icon-class'>
            <path d={d}></path>
          </svg>
        </div> */}
      </div>
    )
  }
  handleClick(){
    import ('@/utils/index')
      .then( (utils) => {
        utils.test()
      })
  }
}
ReactDOM.render(<MySearch/>,document.getElementById('app'))