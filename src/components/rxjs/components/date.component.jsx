import React from "react";
import ComRxjsService from "./../comRxjs.service";

export default class Date  extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      dateValue: '',
    }
  }

  componentDidMount() {
    ComRxjsService.sortSubject$
        .subscribe(
          data=> {
            this.setState({
              dateValue: data.title,
            })
            console.log('uuuuuudate', data, this.state)
          }
        );
    console.log('date', ComRxjsService)
  }

  render(){
    return (
      <button style={{ display: 'inline-block', width: '100px' }} 
      >{this.state.dateValue}</button>
    )
  }
  
}