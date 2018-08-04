import React from 'react'
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { doLogin } from '../reducers/actions/auth'

const Header = props => {
    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { doLogin })(Header)

