import { requestLogin } from '../../services/auth'
import jwtDecode from 'jwt-decode'


// const isAuth = (value) => ({type: 'isAuth', payload:{isAuth:value}})
// const isAuthing = (value) => ({type: 'isAuthing', payload:{isAuthing:value}})
const error = (value) => ({type: 'error', payload:{error:value}})
const errorMessage = (message) => ({type: 'errorMessage', payload:{errorMessage:message}})
 const updateUser = (user) => ({type: 'user', payload:{user:user}})

const handlerError = (dispatch) => {
    return (e) => {
        const message = !!e.response ? e.response.data.message : 'Time out'
        dispatch(error(true))
        dispatch(errorMessage(message))
    }
}

const handlerSuccessLogin = dispatch => {
    return result => {
        const token = result.data.token
        const decoded = jwtDecode(token)
        dispatch(updateUser(decoded))
    }
}

export const doLogin = (user) => {
    return dispatch => {
        requestLogin(user)
        .then(handlerSuccessLogin(dispatch))
        .catch(handlerError(dispatch))
    }
}
