import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import ProdutosHome from './produtosHome'
import Categorias from './categorias'

export default class Produtos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorias: []
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:3001/categorias')
        .then( res => this.setState({categorias:res.data}))    
    }
    
    renderLinkCategorias() {
        return this.state.categorias.map( v => {
            return(
                <li key={v.id}>
                    <Link to={`/produtos/categorias/${v.id}`}>{v.categoria}</Link>
                </li>
            )
        })
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-2">
                    <h3>Categorias</h3>
                    {this.renderLinkCategorias.bind(this)()}
                </div>
                <div className="col-md-10">
                <h1>Produtos</h1>
                <Route exact path={this.props.match.url} component={ProdutosHome} />
                <Route path={this.props.match.url+'/categorias/:catId'} component={Categorias} />
                </div>
            </div>
        )
    }

}