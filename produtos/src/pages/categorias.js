import React, { Component } from 'react'
import axios from 'axios'
import Alert from 'react-s-alert'
import { Link } from 'react-router-dom'

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

    renderProdutos(produto) {
        return(
            <div key={produto.id} className="well myRowWithFlex">
                <h3 >{produto.produto}</h3>
               <div>
                <button onClick={() => this.removeProduct(produto)} className="btn btn-danger">Excluir</button>
                <Link className="btn btn-primary" to={'/produtos/editar/'+produto.id}>Editar Produto</Link>
               </div>
            </div>
        )
    }
    
    componentDidMount() {
        this.loadData.bind(this, this.props.match.params.catId)()
    }
    
    componentWillReceiveProps(newProps) {
        const id = newProps.match.params.catId
        this.loadData.bind(this, id)()
    }

    removeProduct(produto) {
        axios.delete('http://localhost:3001/produtos/'+produto.id)
        .then(this.updateList(produto))
        .catch(err => this.showAlertError('Erro ao deletar produto'))
    }

    updateList(produto) {
        return () => {
            const produtos = this.state.produtos
            const index = produtos.map(p=>p.id).indexOf(produto.id)
            if(index !== -1) {
                produtos.splice(index, 1)
                this.setState({produtos})
            }
            this.showAlertSuccess('Produto deletado com sucesso')
        }
    }

    showAlertError(message) {
        Alert.error('<h3>'+message+'</h3>', {
            position: 'top-right',
            effect: 'genie',
            timeout: 3000,
            offset: 0,
            html: true
        })
    }

    showAlertSuccess(message) {
        Alert.success('<h3>'+message+'</h3>', {
            position: 'top-right',
            effect: 'genie',
            timeout: 3000,
            offset: 0,
            html: true
        })
    }
    
    render() {
         return(
            <div>
                <h2>Categoria {this.props.match.params.catId}</h2>
                {this.state.produtos.map(this.renderProdutos.bind(this))}
            </div>
        )
    }
}