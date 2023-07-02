// Note: TodoReducer...!

import actionTypes from "../../constant/action-types";

const INIT_STATES = {
    todoList: []
};

const todoReducer = (state = INIT_STATES, action) => {
    switch (action.type) {

        case actionTypes.ADD_DATA:
            // console.log('Action: ', action);

            let todoListClone = state.todoList.slice(0);
            todoListClone.push(action.payload);

            return {
                ...state,
                todoList: todoListClone
            };

        default:
            return state;
    };
};

export default todoReducer;