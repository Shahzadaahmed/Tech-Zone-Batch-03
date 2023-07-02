import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

// Required components...!
import Home from "./components/home/home";
import About from "./components/about/about";
import Bulb from "./components/bulb/bulb";
import TodoList from "./components/todo-list/todo-list";

const App = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="bulb" element={<Bulb />} />
                        <Route path="todo-list" element={<TodoList />} />
                    </Routes>
                </Router>
            </Provider>
        </React.Fragment>
    );
};

export default App;