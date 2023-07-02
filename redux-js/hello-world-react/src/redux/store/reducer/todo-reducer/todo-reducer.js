// Note: TodoReducer file...! (All todo reducer cases are defined here);

import { FETCH_USERS, TOGGLE_BULB } from "../../constant/action-types";

const INIT_STATE = {
    todoList: "shahzada ahmed",
    toggleBulb: false,
    users: []
};

const todoReducer = (state = INIT_STATE, action) => {

    switch (action.type) {

        case FETCH_USERS:
            // console.log("FETCH_USERS: ", action);

            return {
                ...state,
                users: action.payload
            }

        case TOGGLE_BULB:
            console.log("TOGGLE_BULB", action);

            return {
                ...state,
                toggleBulb: !state.toggleBulb
            }

        case "UPDATE_NAME":
            // console.log("UPDATE_NAME", action);
            return {
                ...state,
                todoList: action.payload
            };

        default:
            return state;
    };
};

export default todoReducer;