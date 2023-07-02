// Note: Main reducer file...!

import { combineReducers } from "redux";

// Note: Importing required reducers...!
import todoReducer from "./todo-reducer/todo-reducer";
import CRUDReducer from "./crud-reducer/crud-reducer";

const rootReducer = combineReducers({
    todoStates: todoReducer,
    crudStates: CRUDReducer
});

export default rootReducer;