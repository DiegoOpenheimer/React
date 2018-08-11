import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './reducers/index'
import Header from './components/Header'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Admin from './screens/Admin/Admin'
import Restrito from './screens/Restrito/Restrito'
import Alert from 'react-s-alert'
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'

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
          <Container>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/restrito" component={Restrito} />
          <Alert stack={{limit: 3}} />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
