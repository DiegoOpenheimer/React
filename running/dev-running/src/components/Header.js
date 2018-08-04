import React from 'react'
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { doLogin } from '../reducers/actions/auth'
import { Link } from 'react-router-dom'

const Header = props => {
    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link style={{color: '#FFF', margin:10}} to="/home">Home</Link>
          {checkAuth(props)}
          <Link style={{color: '#FFF', margin:10}} to="restrito">Restrito</Link>
        </header>
      )
}

const checkAuth = ({user}) => {
    if(user.role === 'admin') {
        return <Link style={{color: '#FFF', margin:10}} to="/admin">Admin</Link>
    } else {
        return <Link style={{color: '#FFF', margin:10}} to="/login">Login</Link>
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { doLogin })(Header)

