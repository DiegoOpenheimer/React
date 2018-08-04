import { requestLogin } from '../../services/auth'


// const isAuth = (value) => ({type: 'isAuth', payload:{isAuth:value}})
// const isAuthing = (value) => ({type: 'isAuthing', payload:{isAuthing:value}})
const error = (value) => ({type: 'error', payload:{error:value}})
const errorMessage = (message) => ({type: 'errorMessage', payload:{errorMessage:message}})
// const updateUser = (user) => ({type: 'user', payload:{errorMessage:user}})

const handlerError = (dispatch) => {
    return (e) => {
        dispatch(error(true))
        dispatch(errorMessage('ERROR'))
    }
}

export const doLogin = () => {
    const user = {
        email: 'tuliofaria@gmail.com',
        passwd: '123456'
    }

    return dispatch => {
        requestLogin(user)
        .then(result => {
            console.log('RESULT: ', result)
        })
        .catch(handlerError(dispatch))
    }
}
