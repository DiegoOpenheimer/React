import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Runs from './Runs'
import { Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Restrito extends Component {
    render() {
        if(this.props.isAuth) {
            return(
                <div>
                    <Menu>
                        <Menu.Item as={Link} to="/"><Icon name="angle left" size="large" /><h1 style={{margin:0}}>Restrito</h1></Menu.Item>
                        <Menu.Item as={Link} style={styles.formatterLink} to="/restrito">Home</Menu.Item>
                        <Menu.Item as={Link} style={styles.formatterLink} to="/restrito/runs">Runs</Menu.Item>
                    </Menu>
                    <Route exact path={this.props.match.path} component={Home} />
                    <Route path={this.props.match.path+'/runs'} component={Runs} />
                </div>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}

const styles = {
    formatterLink: {
        margin: 10,
        color: '#000'
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(Restrito)