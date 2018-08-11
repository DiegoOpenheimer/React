import { combineReducers } from 'redux'
import auth from './auth/auth'
import reducerRuns from './runs/runs'

const REDUCERS = combineReducers({
    auth,
    reducerRuns
})

export default REDUCERS