import React from "react";

export default class Child1 extends React.Component {
  constructor() {
    super()
    this.state = {
      input1:0
    }
  }
  componentDidMount() {
    this.setState({
      input1: this.props.money
    })
  }
  handlerChange = (e)=> {
    this.setState({
      input1: e.target.value
    })
  }
  render() {
    return (
      <div>
        人民币：
        <input type="text" value={this.props.money} onChange={this.handlerChange}/>
      </div>
    )
  }
}