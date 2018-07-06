import React from 'react'
import axios from 'axios'
import Alert from 'react-s-alert';
import { Redirect } from 'react-router-dom'


export default class ProdutoEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            produto: {},
            redirect: undefined
        }
        this.successEdit = this.successEdit.bind(this)
    }

    componentWillMount() {
         axios.get('http://localhost:3001/produtos/'+this.props.match.params.id)
         .then(({data}) => {
            this.setState({produto: data})
            this.refs.inputNameProduto.value = data.produto
            this.refs.selectCategoria.value = data.categoria
         })
         .catch(err => console.log("Error: ", err))
     }

     render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        } else {
            return(
                <div>
                <h1>Editar produto</h1>
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
                    <button className="btn btn-success" onClick={() => this.editProduto(this.state.produto)}>Editar</button>

                </div>
            )
        }
     }

     editProduto(produto) {
         const id = produto.id
        if(!this.refs.inputNameProduto.value) {
            this.showAlertError('Campos incompletos')
            return
        }

        produto.produto = this.refs.inputNameProduto.value
        produto.categoria = this.refs.selectCategoria.value
        axios.put('http://localhost:3001/produtos/'+id, produto)
        .then(this.successEdit(produto))
        .catch(err => this.showAlertError('Falha ao editar produto'))
     }

     successEdit(produto) {
         return () => {
            this.setState({produto, redirect: '/produtos/categorias/'+produto.categoria})
            this.showAlertSuccess('Produto editado com sucesso')
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
            effect: 'scale',
            timeout: 3000,
            offset: 0,
            html: true
        })
    }




}