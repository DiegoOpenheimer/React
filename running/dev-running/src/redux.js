import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { logger } from 'redux-logger'

import REDUCERS from './REDUCERS'

const store = createStore(REDUCERS, applyMiddleware(ReduxThunk, logger))


export default store