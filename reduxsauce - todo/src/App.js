import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './redux/index'
import { Provider } from 'react-redux'

import Main from './pages/main'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            TODO list
            </p>
          </header>
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
