import React from "react";

import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";

import Welcome from './welcome.component';
import Clock from './components/state.component';
import SetStateDemo from './components/setStateDemo.component';
import IfDemo from './components/ifDemo';
import NameForm from './components/nameForm.component';
import RefsAndDOM from './components/RefsAndDOM';
import RequestRxjs from './components/rxjs/requestRxjs';
import ComRxjs from './components/rxjs/comRxjs';
import RefsForm from './components/refsForm';
import StateImprove from './components/state-improve/stateImprove';

export default function App() {
  const list = [{id: 1, name: 'vvvvvv'}, {id: 2, name: 'vvvvvv'}]
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">props传参</Link>
            </li>
            <li>
              <Link to="/clock">props传参-双向</Link>
            </li>
            <li>
              <Link to="/setStateDemo">SetState</Link>
            </li>
            <li>
              <Link to="/ifDemo">条件渲染</Link>
            </li>
            <li>
              <Link to="/nameForm">表单</Link>
            </li>

            <li>
              <Link to="/refsAndDOM">RefsAndDOM</Link>
            </li>
            <li>
              <Link to="/requestRxjs">Rxjs基本使用</Link>
            </li>
            <li>
              <Link to="/comRxjs">状态管理rxjs</Link>
            </li>
            <li>
              <Link to="/refsForm">非受控组件</Link>
            </li>
            <li>
              <Link to="/stateImprove">状态提升</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Welcome list={list}/>} />
          <Route path="/clock"  exact={false} element={<Clock/>} />
          <Route path="/setStateDemo" exact={false} element={<SetStateDemo/>} />
          <Route path="/ifDemo" exact={false} element={<IfDemo/>} />
          <Route path="/nameForm" exact={false} element={<NameForm/>} />
          <Route path="/refsAndDOM" exact={false} element={<RefsAndDOM/>} />
          <Route path="/requestRxjs" exact={false}  element={<RequestRxjs/>} />
          <Route path="/comRxjs" exact={false} element={<ComRxjs/>} />
          <Route path="/refsForm" exact={false} element={<RefsForm/>} />
          <Route path="/stateImprove" exact={false} element={<StateImprove/>} />
        </Routes>
    </Router>
  );

}