// import React from 'react'
// import ReactDOM from 'react-dom'
// import logo from './asstes/images/avatar.png'
// import zhCN from 'antd/es/locale/zh_CN'
// import moment from 'moment'
// import 'moment/locale/zh-cn'
// import './styles/search.scss'
// import 'antd/dist/antd.css'
// moment.locale('zh-cn')

// import ButtonText from '@/components/button.jsx'
// import DownloadTest from '@/components/download.jsx'

// import { unUsedFunction333 } from '@/utils/test'
// class MySearch extends React.Component{
//   render(){
//     return (
//       <div  className='search-text'>
//         <ButtonText />
//         <DownloadTest />
//       </div>
//     )
//   }
//   handleClick(){
//     unUsedFunction333()
//     // import ('@/utils/index')
//     //   .then( (utils) => {

//     //     utils.test()
//     //   })
//   }
// }

// ReactDOM.render(<MySearch/>,document.getElementById('app-index'))


// designMode test

// import './designMode/index'

import App from './demo/app.js'
window.onload = function(){
  let app = new App('app')
  app.init()
  console.log(app)
}

// b.js
require(['./amd.js'], function (moduleA){
  console.log(moduleA.a); // 打印出：hello world
})