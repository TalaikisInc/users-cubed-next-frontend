import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from 'store/reducers'
const middleware = [thunk]

export function initializeStore (initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
}
