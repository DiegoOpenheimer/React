import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Runs from './Runs'

class Restrito extends Component {
    render() {
        return(
            <div>
                <h1>Restrito</h1>
                <Link style={styles.formatterLink} to="/restrito">Home</Link>
                <Link style={styles.formatterLink} to="/restrito/runs">Runs</Link>
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