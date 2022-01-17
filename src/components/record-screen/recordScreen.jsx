import React from "react";

/* 
录屏软件
 */
export default class RecordScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      mediaRecorder: null,
      buf: [],
      allStream: null
    }
  }

  beforeStartRecords = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices.getDisplayMedia({ // 获取桌面的媒体流
        video: true,
        audio: false
      }).then((stream) => {
        console.log('onbeforeStartRecords', stream)
        this.setState({
          allStream: stream
        })
        document.querySelector('#player').srcObject = stream;
      }).catch((err) => {
        console.error(err);
      })
    } else {
      alert('不支持这个特性');
    }
  }

  /* 
  使用getDisplayMedia是可以将屏幕内容采集到的，如果想要将内容录制下来并且下载到本地需求使用WebRTC提供的另外一个类MediaRecorder。
   */

  startRecords = () => {
    // 约束视频格式
    const options = {
      mimeType: 'video/webm;codecs=vp8'
    }
    // 判断是否是支持的mimeType格式
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.error('不支持的视频格式');
      return;
    }
    try {
      let mediaRecorder = new MediaRecorder(this.state.allStream, options);
      // 处理采集到的事件
      mediaRecorder.ondataavailable =  (e) => {
        if (e && e.data && e.data.size > 0) {
          // 存储到数组中
          this.setState({
            buf:  [...this.state.buf,e.data]
          })
        }
      };

      this.setState({
        mediaRecorder: mediaRecorder
      }, (val) => {
        // 开始录制
        this.state.mediaRecorder.start(10);
        console.log('vvvvvvvvval', this.state.mediaRecorder)
      })


    } catch (e) {
      console.error(e);
    }

  }

  /* 
  这样就可以实现页面的录屏了。下载功能需要借助Blob类型来实现，创建Blob类型支持传入一个buffer参数和指定buffer内容的类型，。

  当点击下载按钮的时候，要结束录制，也就是调用mediaRecorder的stop方法，还要判断buf是否存在内容，万一有人没录制直接点击下载呢，得防范....
  使用new方法创建Blol实例，传入录制的buf和媒体类型，注意这里的类型要和之前录制的一致使用webm。
  接着使用URL的createObjectURL方法将blob转换为地址链接。下载就比较简单了，创建一个a标签，然后将视频链接赋值到a标签的href中，文件名称就是a标签的download属性。最后自动触发a标签的click事件就可以了。
   */

  downloadRecords = () => {
    console.log('onDownloadRecords', this.state.mediaRecorder.state)
    if(this.state.mediaRecorder.state === 'recording') {
      this.state.mediaRecorder.stop();

    }
    
    
    if (this.state.buf.length) {
      const blob = new Blob(this.state.buf, { type: 'video/webm' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.style.display = 'none';
      a.download = 'aaa.webm';
      a.click();
    } else {
      alert('还没有录制任何内容');
    }
  }

  stopRecords = () => {
    if (this.state.mediaRecorder) {
      console.log('onStopRecords', this.state.mediaRecorder.state)
      this.state.mediaRecorder.stop();
    }

  }
  render() {
    return (
      <div>
        <button id="start" onClick={this.beforeStartRecords}>屏幕分享</button>
        <button id="record" onClick={this.startRecords}>开始录制</button>
        <button id="stop" onClick={this.stopRecords}>结束录制</button>
        <button id="download" onClick={this.downloadRecords}>下载视频</button>
        {/* <video src="" id="player"></video> */}
        <div style={{ border: '1px solid #ccc' }}>
          <video autoPlay playsInline id="player"></video>
        </div>
      </div>
    )
  }
}