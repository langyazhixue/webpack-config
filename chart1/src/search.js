import React from 'react';
import ReactDOM from 'react-dom';
import './styles/search.scss';
import logo from './asstes/images/logo.png'
import svg404 from './asstes/svg/404.svg'

const [raw, viewBox, d] = svg404.match(/^<svg.+?viewBox="(.+?)".*><path.+?d="(.+?)".*><\/path><\/svg>$/)


import SearchTest from './ss'
// var svg = svg404.replace("\"","").replace("\"","");
class Search extends React.Component{
  render(){
    return (
      <div id='11' className='search-text'>
      <SearchTest/>
        <div>
          base64111
          <img src={ logo }></img>
        </div>
        <div>
          图片插
          <svg xmlns="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox={viewBox}  className='icon-class'>
            <path d={d}></path>
          </svg>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Search/>,
  document.getElementById('app')
)