import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './reducers/index'
import Header from './components/Header'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Admin from './screens/Admin/Admin'
import Restrito from './screens/Restrito/Restrito'
import Alert from 'react-s-alert'

// mandatory
import 'react-s-alert/dist/s-alert-default.css';

// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/restrito" component={Restrito} />
            <Header />
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Alert stack={{limit: 3}} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
