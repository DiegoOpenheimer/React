import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const component = (
    <div>
        <h1>Admin</h1>
    </div>
)

const Admin = props => {
    if(props.user.role !== 'admin') {
        return <Redirect to="/home" />
    } else {
        return component
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Admin)