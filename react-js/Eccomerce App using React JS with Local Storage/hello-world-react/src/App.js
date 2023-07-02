import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from "react-router-dom";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Components...!
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Home from './components/home/home';
import MyData from './components/my-data/my-data';
import AddData from './components/add-data/add-data';
import NotFound from './components/404/404';
import Navigation from './components/navigation/navigation';

const App = () => {

    const [userSession, setUserSession] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("UserState") != null) {
            let fetchUser = localStorage.getItem("UserState");
            let dataInJSON = JSON.parse(fetchUser);
            setUserSession(dataInJSON);
            console.log('Logged in user: ', dataInJSON);
        }

        else {
            localStorage.setItem("UserState", JSON.stringify(null));
        };
    }, []);

    return (
        <>
            <Router>
                {userSession ? <Navigation /> : null}

                <Routes>
                    {
                        userSession
                            ?
                            (
                                <>
                                    <Route path='/' element={<Home />} />
                                    <Route path='my-data' element={<MyData />} />
                                    <Route path='add-data' element={<AddData />} />
                                </>
                            )
                            :
                            (
                                <>
                                    <Route path='/' element={<Login />} />
                                    <Route path='signup' element={<SignUp />} />
                                </>
                            )
                    }
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;