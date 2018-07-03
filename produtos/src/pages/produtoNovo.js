import React from 'react'
import Alert from 'react-s-alert';
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class ProdutoNovo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: undefined
        }

        this.initializeFunctions = this.initializeFunctions.bind(this)
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        } else {
            return (
                <div>
                    <h2>Novo Produto</h2>
                    <div className="form-group">
                        <label htmlFor="selectCategory">Selecione categoria</label>
                        <select ref="selectCategoria" className="form-control" id="selectCategory">
                        {
                            this.props.categorias.map(content => {
                                return <option key={content.id} value={content.id}>{content.categoria}</option>
                            })
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productName">Informe nome do produto</label>
                        <input maxLength="50" className="form-control" ref="inputNameProduto" id="productName" />
                    </div>
                    <button className="btn btn-success" onClick={this.saveProduct.bind(this)}>Salvar</button>
                </div>
            )
        }
    }

    saveProduct() {
        const produto = this.refs.inputNameProduto.value
        const categoria = parseInt(this.refs.selectCategoria.value, 10)
        if(!produto || !categoria) this.showAlertError('Formulário incompleto')
        else this.sendProduto({produto, categoria})
        
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
            effect: 'scale',
            timeout: 3000,
            offset: 0,
            html: true
        })
    }

    sendProduto(produto) {
        axios.post('http://localhost:3001/produtos', produto, {timeout: 8000})
        .then(this.successToSaveProduto(produto))
        .catch(() => this.showAlertError('Falha ao salvar produto'))
    }

    successToSaveProduto(produto) {
        return res => {
            this.refs.inputNameProduto.value = ''
            this.setState({redirect: '/produtos/categorias/'+produto.categoria})
            this.showAlertSuccess('Produto cadastrado com sucesso')
        }
    }

    initializeFunctions() {
        this.successToSaveProduto = this.successToSaveProduto.bind(this)
    }

}