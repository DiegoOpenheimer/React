import React from 'react'
import Header from '../components/Header'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuth, updateUser } from '../reducers/actions/auth'
import jwtDecode from 'jwt-decode'

class Home extends React.Component {

    componentWillMount() {
        const user = localStorage.getItem('token')
        if ( user ) {
            this.props.isAuth(true)
            this.props.updateUser(jwtDecode(user))
        }
    }

    render() {
        if(this.props.isAuthenticate) {
            return(
                <div>
                    <Header />
                    <h1>Home</h1>
                </div>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isAuthenticate: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { isAuth, updateUser })(Home)


