import { ADD_DATA, DELETE_DATA, UPDATE_DATA, DELETE_ALL } from "../../constant/action-types";

// Note: Action to function to add data...!
const addData = (input) => {
    return (dispatch) => {
        // console.log("Input: ", input);

        dispatch({
            type: ADD_DATA,
            payload: input
        });
    };
};

// Note: Action to function to delete data...!
const deleteData = (key) => {
    return (dispatch) => {
        // console.log("Index: ", key);

        dispatch({
            type: DELETE_DATA,
            payload: key
        });
    };
};

// Note: Action to function to update data...!
const updateData = (data) => {
    return (dispatch) => {
        // console.log('Data: ', data);

        dispatch({
            type: UPDATE_DATA,
            payload: data
        });
    };
};

// Note: Action to function to delete all data...!
const deleteAll = () => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ALL
        });
    };
};

export {
    addData,
    deleteData,
    updateData,
    deleteAll
};