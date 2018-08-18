import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../reducers/actions/auth'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import MyDropdown from './Dropdown'

const Header = props => {
    return(
        <Menu>
          <Menu.Item as={Link} to="/">Home</Menu.Item>
          {checkAuth(props)}
          <Menu.Item as={Link} to="restrito">Restrito</Menu.Item>
          <Menu.Item position="right">
            <MyDropdown user={props.user} />
          </Menu.Item>
        </Menu>
      )
}

const checkAuth = ({user}) => {
    if(user.role === 'admin') {
        return <Menu.Item as={Link} to="/admin">Admin</Menu.Item>
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { doLogin })(Header)

