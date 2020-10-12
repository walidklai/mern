import shoppingReducer from './reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    shopping: shoppingReducer
})

export default rootReducer