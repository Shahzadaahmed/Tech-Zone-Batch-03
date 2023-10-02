// Note: AuthReducer file...!

const INIT_STATE = {
    authUser: false
};

const authReducer = (state = INIT_STATE, action) => {

    switch (action.type) {

        // case "LOGIN_USER":
        //     return {
        //     }

        default:
            return state;
    };
};

export default authReducer