import React from "react";

export default class SetStateDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increment1 = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count) // 打印出来是上次的 this.state.count 值,显然是异步的
    // 怎样解决？
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count, 'mmmm')  // 在setState 第二个参数 回调函数中打印，就是实时获取的

    })

  }
  async increment() { // 优化版，实时获取 state 内容
    await this.setStateAsync({ count: this.state.count + 1 })
    console.log(this.state.count, 'nnnnn')

  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }
  render() {
    return (
      <div>
        setState是同步还是异步问题？
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>修改</button>
      </div>
    )
  }
}