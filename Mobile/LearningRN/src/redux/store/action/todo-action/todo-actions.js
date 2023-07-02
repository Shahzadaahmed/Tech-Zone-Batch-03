// Note: All action function to todo reducer are defined here...!

import actionTypes from "../../constant/action-types";

const addItem = (todoData) => {
    return (dispatch) => {
        // console.log("Data: ", todoData);

        dispatch({
            type: actionTypes.ADD_DATA,
            payload: todoData
        });
    };
};

export { addItem };