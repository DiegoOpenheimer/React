import { requestToGetRuns } from '../../services/runs'

const isLoading = value => ({type: 'isLoading', payload:{isLoading:value}})
const error = value => ({type: 'error', payload:{error:value}})
const errorMessage = message => ({type: 'errorMessage', payload:{errorMessage:message}})
const updateRuns = runs => ({type: 'updateRuns', payload:{runs}})

export const getRuns = () => dispatch => {
    dispatch(isLoading(true))
    requestToGetRuns()
    .then(handlerSuccess(dispatch))
    .catch(handlerError(dispatch))
}

const handlerSuccess = dispatch => result => {
    dispatch(isLoading(false))
    clearErrors(dispatch)
    if(result.hasOwnProperty('data')) {
        dispatch(updateRuns(result.data.data))
    }

}

const handlerError = dispatch => e => {
    dispatch(isLoading(false))
    dispatch(error(true))
    dispatch(errorMessage('Error to request runs'))
}

const clearErrors = dispatch => {
    dispatch(error(false))
    dispatch(errorMessage(undefined))
}