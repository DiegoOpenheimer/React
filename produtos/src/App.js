import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
      </div>
      </Router>
    );
  }
}

export default App
