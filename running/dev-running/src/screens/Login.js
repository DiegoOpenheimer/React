import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../reducers/actions/auth'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                email:'',
                password:''
            }
        }
    }

    handlerForm = type => event => {
         const form = { ...this.state.form }
         form[type] = event.target.value
         this.setState({form})
    }

    login = () => {
        const email = this.state.form.email, passwd = this.state.form.password
        if (!email || !passwd) {
            alert('Dados inválidos')
        } else {
            this.props.doLogin({email, passwd})
        }
    }
    
    render() {
        if(this.props.isAuth) {
            return <Redirect to="/home" />
        } else {
            return(
                <div style={{height: '10vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <label htmlFor="idEmail">Email: </label>
                        <input onChange={this.handlerForm('email')} value={this.state.form.email} placeholder="Informe email" max={30} type="text" id="idEmail" />
                    <label htmlFor="idSenha">Senha: </label>
                        <input onChange={this.handlerForm('password')} value={this.state.form.password} placeholder="Informe senha" max={30} type="password" id="idSenha" />
                    <button onClick={this.login}>Logar</button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { doLogin })(Login)