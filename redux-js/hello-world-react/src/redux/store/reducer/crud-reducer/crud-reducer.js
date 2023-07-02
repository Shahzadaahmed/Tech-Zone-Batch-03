// Note: CRUDReducer file...! (All crud reducer cases are defined here);

import { ADD_DATA, DELETE_DATA, UPDATE_DATA, DELETE_ALL } from "../../constant/action-types";

const INIT_STATE = {
    todoList: []
};

const CRUDReducer = (state = INIT_STATE, action) => {

    switch (action.type) {

        case DELETE_ALL:

            return {
                ...state,
                todoList: []
            }

        case UPDATE_DATA:
            // console.log("Update Action: ", action.payload);

            let todoClone = state.todoList.slice(0); // [ ...state.todoList ]
            todoClone.splice(
                action.payload.elIndex,
                1,
                action.payload.updatedValue
            );

            return {
                ...state,
                todoList: todoClone
            }

        case ADD_DATA:
            // console.log("Action: ", action);

            let todoListClone = state.todoList.slice(0);
            todoListClone.push(action.payload);

            return {
                ...state,
                todoList: todoListClone
            }

        case DELETE_DATA:
            let todoList2Clone = state.todoList.slice(0);
            todoList2Clone.splice(action.payload, 1);

            return {
                ...state,
                todoList: todoList2Clone
            }

        default:
            return state;
    };
};

export default CRUDReducer;