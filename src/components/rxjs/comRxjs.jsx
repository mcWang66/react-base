import React from "react";

import Content from "./components/content.component";
import Code from "./components/code.component";
import Task from "./components/task.component";
import Date from "./components/date.component";

/*  
  使用Rxjs 做 React 状态管理 实现跨组件的 复杂通信

*/

export  default class ComRxjs extends React.Component {
  render() {
    return (
      <div>
        <Code style={{ display: 'inline-block', width: '100px' }}/>
        <Task style={{ display: 'inline-block', width: '100px' }}/>
        <Content style={{ display: 'inline-block', width: '100px' }}/>
        <Date style={{ display: 'inline-block', width: '100px' }}/>
        <div className="main" style={{ background: 'pink', width: '400px', height: '400px'}}>

        </div>
      </div>
    )
  }
}