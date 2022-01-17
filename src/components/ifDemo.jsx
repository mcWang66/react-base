import React from "react";

export default class IfDemo extends React.Component {
  /* 
   常用的应用场景：
   1，对视图进行条件切换
   2，做缺省值
      没有拿到数据之前页面的状态
   */

   constructor() {
     super();
     this.state = {
       isLogin: false
     }
   }
   Login=()=> {
     this.setState({
      isLogin: true
     })
   }
  render() {
    let showView = (this.state.isLogin?
      <div>alicia</div> :
      <div>请登录</div>
      )
    
    return (
      <div>
        条件渲染:{showView}
        <button onClick={this.Login}>登录</button>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fe8%2Fea%2F6b%2Fe8ea6b847337f93065011c9b7c84ac03.jpg&amp;refer=http%3A%2F%2Fup.enterdesk.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg?sec=1641718157&amp;t=dd008562d3fc47d0b2d31079570c2007" alt="" srcset="" />

      </div>
    ) 
  }

}