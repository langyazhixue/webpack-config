// 要使用  svg-line-loader
import svg404 from './asstes/svg/404.svg' 
const [raw, viewBox, d] = svg404.match(/^<svg.+?viewBox="(.+?)".*><path.+?d="(.+?)".*><\/path><\/svg>$/)
var svg = svg404.replace("\"","").replace("\"","");
import React from 'react';
import { Button } from 'antd';
class SvgText extends React.Component{
  render(){
    return (

       <div>
          图片插
          <svg xmlns="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox={viewBox}  className='icon-class'>
            <path d={d}></path>
          </svg>
        </div> 
    )
  }
}
export default ButtonText
