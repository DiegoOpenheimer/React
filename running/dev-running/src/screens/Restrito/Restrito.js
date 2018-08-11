import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Runs from './Runs'
import { Menu, Icon } from 'semantic-ui-react'

class Restrito extends Component {
    render() {
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
    }
}

const styles = {
    formatterLink: {
        margin: 10,
        color: '#000'
    }
}

export default Restrito