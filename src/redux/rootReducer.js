import { combineReducers } from "redux";
import todoReducer from "./addTask/todoTAskReducer";
import filterReducer from "./filter/filterReducer";

const rootReducers = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducers;
