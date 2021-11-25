import React from "react";
import ComRxjsService from "./../comRxjs.service";

export default class Task  extends React.Component{
  // constructor(props) {
  //   super(props)

  // }

  handleTaskClick=()=> {
    ComRxjsService.setSort('task click')
  }

  componentDidMount() {
    console.log(ComRxjsService)
    ComRxjsService.sortSubject$.subscribe(
      data=> {
        console.log('uuuuuu', data)
      }
    )
  }

  render(){
    return (
      <button style={{ display: 'inline-block', width: '100px' }} 
      onClick={this.handleTaskClick}>Task</button>
    )
  }
  
}