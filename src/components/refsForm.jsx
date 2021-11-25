import React from "react";

/* 
  非受控组件
 */
export default class RefsForm extends React.Component {
  constructor() {
    super()
    this.username = React.createRef();
  }
  onClick=(e)=>{
    // 获取视图元素结构
    console.log(this.username.current)
    // 获取元素的值
    console.log(this.username.current.value)

  }
  render() {
    return (
    <div>
      <input type="text"  ref={this.username}/>
      <button onClick={this.onClick}>提交</button>
    </div>
    )
  }
}