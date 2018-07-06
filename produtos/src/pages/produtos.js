import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import ProdutosHome from './produtosHome'
import Categorias from './categorias'
import { Notification } from 'react-notification'
import * as Observable  from 'rxjs'
import ProdutoNovo from './produtoNovo'
import ProdutoEdit from './produtoEdit'

export default class Produtos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorias: [],
            showError: false,
            editingCategory: undefined
        }
        this.sendToServerToRenameCategory = this.sendToServerToRenameCategory.bind(this)
    }

    componentDidMount() {
        axios
        .get('http://localhost:3001/categorias')
        .then( res => this.setState({categorias:res.data}))
        .catch(()=>{
            this.setState({showError: true})
            const hideError = Observable.timer(3000)
            hideError.subscribe(()=>this.setState({showError:false}))
        })    
    }

    deleteCategory(id) {
        axios
        .delete('http://localhost:3001/categorias/'+id)
        .then( res=>{
            let categories = [...this.state.categorias]
            this.setState({categorias:categories.filter(v=>v.id!==id)})
        })
    }
    
    renderLinkCategorias() {
        return this.state.categorias.map( v => {
            return(
                <li style={{display:'flex'}} key={v.id}>
                    {
                        this.state.editingCategory === v.id &&
                        <div className="input-group">
                            <div className="input-group-btn">
                                <input ref={'inputEdit'} onKeyUp={event => this.confirmEditing.bind(this, event, v)()} defaultValue={v.categoria} className="form-control" type="text" maxLength="20" />
                                <button onClick={this.cancelEditing.bind(this)} className="btn">Cancelar</button>
                            </div>
                        </div>
                    }
                    {
                        this.state.editingCategory !== v.id &&
                    <div>
                        <Link className="myLink" to={`/produtos/categorias/${v.id}`}>{v.categoria}</Link>
                        <button onClick={this.deleteCategory.bind(this, v.id)} className="btn btn-sm">
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>
                        <button onClick={this.componentEdit.bind(this, v.id)} className="btn btn-sm">
                            <span className="glyphicon glyphicon-pencil"></span>
                        </button>
                    </div>
                    }
                </li>
            )
        })
    }

    componentEdit(id) {
        this.setState({editingCategory:id})
    }

    cancelEditing() {
        this.setState({editingCategory:undefined})
    }

    confirmEditing(event, categoria) {
        if(event.keyCode === 13) {
            this.sendToServerToRenameCategory({
                id: categoria.id,
                categoria: this.refs.inputEdit.value
            })
        }
       }

    sendToServerToRenameCategory(categoria) {
       axios.put('http://localhost:3001/categorias/'+categoria.id, categoria)
       .then(()=>{
            this.setState({editingCategory: undefined})
            const categorias = this.state.categorias
            let c = categorias.find(c=>c.id===categoria.id)
            c.categoria = categoria.categoria
            this.setState({categorias})
        })
       .catch(()=>{
           this.setState({showError:true})
           const observable = Observable.timer(3000)
           observable.subscribe(() => {
            this.setState({showError:false})
           })
       })
    }

    handlerKeyUp(key) {
        if(key.keyCode === 13) {
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
                    <Link className="btn btn-primary" to={`${this.props.match.url}/novo`}>Novo Produto</Link>
                </div>
                <div className="col-md-10">
                <Route exact path={this.props.match.url} component={ProdutosHome} />
                <Route exact path={this.props.match.url+'/novo'} render={props => {
                    return <ProdutoNovo {...props} categorias={this.state.categorias} />
                }} />
                <Route exact path={this.props.match.url+'/editar/:id'} render={props => {
                    return <ProdutoEdit {...props} categorias={this.state.categorias} />
                }} />
                <Route path={this.props.match.url+'/categorias/:catId'} component={Categorias} />
                </div>
                <Notification
                    isActive={this.state.showError}
                    message={'Erro ao carregar produtos'}/>
            </div>
        )
    }

}

