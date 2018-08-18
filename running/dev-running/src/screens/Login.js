import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../reducers/actions/auth'
import { Redirect } from 'react-router-dom'
import { Input, Label, Button } from 'semantic-ui-react'

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
            return <Redirect to="/" />
        } else {
            return(
                <div style={{height: '10vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Label color="red">Email: </Label>
                        <Input onChange={this.handlerForm('email')} value={this.state.form.email} placeholder="Informe email" maxLength={30} type="text" icon="mail" />
                    <Label color="red">Senha: </Label>
                        <Input onChange={this.handlerForm('password')} value={this.state.form.password} placeholder="Informe senha" maxLength={30} type="password" icon="key" />
                    <Button loading={this.props.isAuthing} primary onClick={this.login}>Logar</Button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        isAuthing: state.auth.isAuthing
    }
}

export default connect(mapStateToProps, { doLogin })(Login)