import React, { Component } from 'react';
import UseState from './UseState';
import UseReducer from './UseReducer';
import UseEffect from './UseEffect';
import UseContext from './UseContext';

class App extends Component {
  state = {
    show: true,
    counter: 0
  }

  render() {
    return (
      <div>
          <UseState />
          <UseReducer />
          <button onClick={() => this.setState({ show: !this.state.show })}>show</button>
          <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>++</button>
          { this.state.show && <UseEffect counter={this.state.counter} /> }
          <UseContext />
      </div>
    );
  }
}

export default App;
