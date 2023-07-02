// Note: Main reducer file...!

import { combineReducers } from "redux";
import todoReducer from "./todo-reducer/todo-reducer";

let rootReducer = combineReducers({
    todoStates : todoReducer
});

export default rootReducer;