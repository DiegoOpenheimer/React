import React, { Component } from 'react'
import axios from 'axios'
export default class Categorias extends Component {

    constructor(props) {
        super(props)
        this.state = {
            produtos:[]
        }
    }

    loadData(id) {
        axios
            .get('http://localhost:3001/produtos?categoria='+id)
            .then(res => this.setState({produtos:res.data}))
    }

    renderProdutos(produtos) {
        return(
            <div key={produtos.produto} className="well"><h3>{produtos.produto}</h3></div>
        )
    }
    
    componentDidMount() {
        this.loadData.bind(this, this.props.match.params.catId)()
    }
    
    componentWillReceiveProps(newProps) {
        const id = newProps.match.params.catId
        this.loadData.bind(this, id)()
    }
    
    render() {
         return(
            <div>
                <h2>Categoria {this.props.match.params.catId}</h2>
                {this.state.produtos.map(this.renderProdutos)}
            </div>
        )
    }
}