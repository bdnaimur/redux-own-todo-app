import { combineReducers } from 'redux'
import todoReducer from './addTask/addTaskReducer'

const rootReducers = combineReducers({
    todos: todoReducer,
})

export default rootReducers;