import React from "react";
import HomeComA from "./components/react-routing/com-a/com-a";
import AboutComB from "./components/react-routing/com-b/com-b";
import ContactComC from "./components/react-routing/com-c/com-c";
import PathNotFound from "./components/react-routing/path-not-found/path-not-found";
import Navigation from "./components/react-routing/navigation/navigation";
import { AnotherList, ListData } from "./components/react-routing/list-data/list-data";
import WeatherApp from "./components/react-routing/weather/weather";
import TableTab from "./components/react-routing/table-tab/table-tab";
import GithubUserClone from "./components/react-routing/github-user-clone/github-user-clone";
import Users from "./components/react-routing/users/users";
import AhmedEditor from "./components/editor/editor";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
    return (
        <React.Fragment>
            <Router>
                {/* <Navigation /> */}
                {/* <h1> Hello React JS </h1> */}

                <Routes>
                    <Route path="/" element={<AhmedEditor />} />
                    <Route path="about" element={<AboutComB />} />
                    <Route path="contact" element={<ContactComC />} />
                    <Route path="list-data" element={<ListData />} />
                    <Route path="weather-screen" element={<WeatherApp />} />
                    <Route path="table-tab" element={<TableTab />} />
                    <Route path="github-user-clone" element={<GithubUserClone />} />
                    <Route path="users-list" element={<Users />} />
                    <Route path="*" element={<PathNotFound />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
};

export default App;