const INITIAL_STATE = {
    isLoading: false,
    runs: undefined,
    error: false,
    errorMessage: ''
}

const reducerRuns = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'isLoading':
            return { ...state, isLoading: action.payload.isLoading }
        case 'updateRuns':
            return { ...state, runs: action.payload.runs }
        case 'error':
            return { ...state, error: action.payload.error }
        case 'errorMessage':
            return { ...state, errorMessage: action.payload.errorMessage }
        default:
            return state
    }
}

export default reducerRuns