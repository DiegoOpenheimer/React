import { requestLogin } from '../../services/auth'
import jwtDecode from 'jwt-decode'
import { alertError } from '../../utils/alert'


const isAuth = (value) => ({type: 'isAuth', payload:{isAuth:value}})
const isAuthing = (value) => ({type: 'isAuthing', payload:{isAuthing:value}})
const error = (value) => ({type: 'error', payload:{error:value}})
const errorMessage = (message) => ({type: 'errorMessage', payload:{errorMessage:message}})
const updateUser = (user) => ({type: 'user', payload:{user:user}})

const handlerError = (dispatch) => {
    return (e) => {
        dispatch(isAuthing(false))
        alertError('erro ao fazer login')
        const message = !!e.response ? e.response.data.message : 'Time out'
        dispatch(error(true))
        dispatch(errorMessage(message))
    }
}

const handlerSuccessLogin = (dispatch) => {
    return result => {
        const token = result.data.token
        const decoded = jwtDecode(token)
        localStorage.setItem('token', token)
        dispatch(updateUser(decoded))
        dispatch(isAuth(true))
        dispatch(isAuthing(false))
    }
}

export const doLogin = (user) => {
    return dispatch => {
        dispatch(isAuthing(true))
        requestLogin(user)
        .then(handlerSuccessLogin(dispatch))
        .catch(handlerError(dispatch))
    }
}
