import React from 'react'
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { doLogin } from '../reducers/actions/auth'

class Header extends React.Component {

    componentWillMount() {
        console.log('PROPS: ', this.props)
        this.props.doLogin()
    }    

    render() {
        return(
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { doLogin })(Header)

