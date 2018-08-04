const INITIAL_STATE = {
    isAuthing: false,
    isAuth: false,
    isSigningin: false,
    user: {},
    error: false,
    errorMessage: ''
}

const auth = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'isAuth':
            return { ...state, isAuth: action.payload.isAuth }
        case 'isAuthing':
            return { ...state, isAuthing: action.payload.isAuthing }
        case 'isSigningin':
            return { ...state, isSigningin: action.payload.isSigningin }
        case 'user':
            return { ...state, user: action.payload.user }
        case 'error':
            return { ...state, error: action.payload.error }
        case 'errorMessage':
            return { ...state, errorMessage: action.payload.errorMessage }
        default:
            return state
    }
}

export default auth
