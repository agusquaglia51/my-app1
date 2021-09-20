import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from '../reducers'
//store
export const store = createStore(combineReducers, applyMiddleware(thunk))

