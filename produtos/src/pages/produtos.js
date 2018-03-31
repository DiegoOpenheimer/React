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

    handlerKeyUp(key) {
        if(key.keyCode == 13) {
            axios.post('http://localhost:3001/categorias',{
                categoria: this.refs.newCategory.value
            }).then( res => {
                let s = this.state
                s.categorias.push(res.data)
                this.setState(s)
                this.refs.newCategory.value = ''
            })
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-2">
                    <h3>Categorias</h3>
                    {this.renderLinkCategorias.bind(this)()}
                    <div className="well">
                        <input 
                            onKeyUp={this.handlerKeyUp.bind(this)}
                            placeholder="Nova categoria"
                            maxLength={20}
                            className="form-control"
                            ref="newCategory"
                        />
                    </div>
                </div>
                <div className="col-md-10">
                <Route exact path={this.props.match.url} component={ProdutosHome} />
                <Route path={this.props.match.url+'/categorias/:catId'} component={Categorias} />
                </div>
            </div>
        )
    }

}
