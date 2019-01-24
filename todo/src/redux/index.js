import { createStore, combineReducers } from 'redux'

import todos from '../ducks/reducer'

const REDUCERS = combineReducers({ todos })

const store = createStore(REDUCERS)

export default store