import { combineReducers } from 'redux'

import { cakesReducer } from './cakesReducers'
import { cakeReducer } from './cakeReducers'

const createRootReducer = () =>
  combineReducers({
    allCakes: cakesReducer,
    cake: cakeReducer,
  })

export default createRootReducer