import React from 'react';
import Header from './components/Header';
// function App() {
//   return (
//     <div className="App">
//       hello react
//     </div>
//   );
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <Header name={this.props.name} list={this.props.list}></Header>
      </div>
    );
  }
}

export default Welcome;
