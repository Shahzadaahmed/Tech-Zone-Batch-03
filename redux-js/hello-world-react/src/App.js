import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Home from "./components/CRUD/home/home";

// Required components...!

const App = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </Provider>
        </React.Fragment>
    );
};

export default App;