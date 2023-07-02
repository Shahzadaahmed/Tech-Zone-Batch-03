// Note: All functions related to todo action are defined here...!

import { FETCH_USERS , TOGGLE_BULB } from "../../constant/action-types";

// Note: Function to update name...!
const updateNameState = (name) => {
    return (dispatch) => {
        // console.log("Name: ", name);

        dispatch(
            {
                type: "UPDATE_NAME",
                payload: name
            }
        );
    };
};


// Note: Function to toggle bulb...!
const toggleBulb = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_BULB
        });
    };
};


// Note: Function api call...!
const apiCall = () => {
    return async (dispatch) => {
        try {
            let apiUrl = "https://dummyjson.com/users";
            let response = await fetch(apiUrl);
            let dataInJSON = await response.json();
            // console.log(dataInJSON);

            if (dataInJSON.hasOwnProperty("users")) {
                let users = dataInJSON.users;
                // console.log("Users: ", users);

                dispatch({
                    type: FETCH_USERS,
                    payload: users
                });
            }
        }

        catch (error) {
            console.log("Error in API Integration: ", error);
        }
    };
};

export { updateNameState, toggleBulb, apiCall };