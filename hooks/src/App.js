import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CounterClass from './components/CounterClass'
import CounterState from './components/CounterState'
import CounterEffect from './components/CounterEffect'
import CounterReducer from './components/CounterReducer'

class App extends Component {

  state = {
    show: true,
    counter: 0
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.setState({show: !this.state.show})}>SHOW</button>
          <button onClick={() => this.setState({counter: this.state.counter+1})}>counter</button>
        </header>
        { this.state.show && <CounterClass counter={this.state.counter} /> }
        { this.state.show && <CounterEffect counter={this.state.counter} /> }
        <CounterState />
        <CounterReducer />
      </div>
    );
  }
}

export default App;
