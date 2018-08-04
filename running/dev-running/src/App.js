import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './reducers/index'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
