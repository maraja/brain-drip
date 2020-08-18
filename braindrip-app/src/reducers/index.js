import { combineReducers } from 'redux'

import learningPathReducer from './learningPathReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  paths: learningPathReducer,
  user: userReducer,
})

export default rootReducer