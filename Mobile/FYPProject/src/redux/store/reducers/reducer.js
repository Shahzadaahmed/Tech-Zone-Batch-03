// Note: Main reducer file...!
import { combineReducers } from "redux";

// Note: All reducers...!
import authReducer from "./auth-reducer/auth-reducer";

const rootReducer = combineReducers({
    authStates: authReducer
});

export default rootReducer;