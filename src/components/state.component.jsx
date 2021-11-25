import React from 'react';

import { ReactDOM } from "react-dom";

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);



// 以上代码父组件之外需要调用定时器，每秒更新，显然是有待优化的。理想的状态是 我们只要编写一次代码，视图自动更新
// ---state 是很有必要的 
// 1, 将函数式组件转换成 class 组件
// 2, 使用state 代替props
// 3, 在构造函数中初始化state
// 4, 在生命周期函数汇总更新state ,告诉react 组件state 已经更新了



class Clock extends React.Component{
  constructor(props) {
    // 使用此方法将 props 传递到父类的构造函数中
    super(props);
    this.state = {date: new Date(), count : 0};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  addCount=()=>{
    this.setState({
      count: this.state.count +1,
    })
  }
  reduceCount() {
    this.setState({
      count: this.state.count -1,
    })
  }
  render(){
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      <button onClick={this.addCount}>add</button>
      <button onClick={this.reduceCount.bind(this)}>reduce</button>
      <h3>{this.state.count}</h3>
    </div>
    )
  };
}
export default Clock;
