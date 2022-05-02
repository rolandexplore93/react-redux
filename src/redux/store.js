import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
// import cakeReducer from './cake/cakeReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store
