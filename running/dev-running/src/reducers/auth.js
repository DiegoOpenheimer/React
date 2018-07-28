const INITIAL_STATE = {
    isAuthing: false,
    isAuth: false,
    isSigningin: false,
    user: {},
    error: false,
    errorMessage: ''
}

export const authController = (state = INITIAL_STATE, action) => {
    switch(action) {
        case 'isAuthing':
            return { ...state, isAuthing: action.payload.isAuthing }
        case 'isAuth':
            return { ...state, isAuth: action.payload.isAuth }
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