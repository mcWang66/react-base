import React from "react";

export default class Child2 extends React.Component {
  constructor() {
    super()
    this.state = {
      input2:0
    }
  }
  componentDidMount() {
    this.setState({
      input2: this.props.money * 7
    })
  }
  handlerChange = (e)=> {
    this.setState({
      input2: e.target.value
    })
  }
  render() {
    return (
      <div>
        美元：
        <input type="text" value={this.props.money * 7} onChange={this.handlerChange}/>
      </div>
    )
  }
}