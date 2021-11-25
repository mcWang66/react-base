import React from "react";
import Child1 from "./child1";
import Child2 from "./child2";

/* 
状态提升
 */
export default class StateImprove extends React.Component {
  constructor() {
    super()
    this.state = {
      money: 1
    }
  }
  hadlerMoneyChange=(e) =>{
    this.setState({
      money: e.target.value
    })

  }
  render() {
    return (
      <div>
        <input type="text"  value={ this.state.money } onChange={this.hadlerMoneyChange} />
        <p>StateImprove</p>
        <Child1 money ={ this.state.money }/>
        <Child2 money ={ this.state.money } />
      </div>
    )
  }
}