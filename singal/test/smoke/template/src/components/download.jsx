import React from 'react';
import { Button } from 'antd';
class DownloadTest extends React.Component{
  render(){
    return (
      <Button 
        type="primary" 
        onClick={this.downloadZip}
      > 按钮点击下载音频文件 </Button>
    )
  }
  //下载
  downloadZip(){
    fetch('/static/record/1.wav', {
      responseType: 'blob'
    }).then(res => {
      return res.blob()
    })
      .then(blob => {
        var link = document.createElement('a')
        link.id = 'videoTest'
        document.getElementsByTagName('body')[0].appendChild(link)
        var b = new Blob([blob], { type: 'audio/mp3' })
        var bURL = URL.createObjectURL(b)
        link.href = bURL
        link.setAttribute('download', 'videoTest.wav')
        link.click()
      })
      .catch(_ => {
      })
  }
}
export default DownloadTest