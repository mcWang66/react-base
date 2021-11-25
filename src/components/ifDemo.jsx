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

      </div>
    ) 
  }

}