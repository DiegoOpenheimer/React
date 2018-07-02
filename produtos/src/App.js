import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';

// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

//pages
import Sobre from './pages/sobre'
import Home from './pages/Home'
import Produtos from './pages/produtos'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Gerenciador de Produtos</a>
            </div>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
        <Route path="/" exact component={Home}/>
        <Route path="/sobre" exact component={Sobre} />
        <Route path="/produtos" component={Produtos} />
        </div>
      <Alert stack={{limit:3}} />
      </div>
      </Router>
    );
  }
}

export default App
