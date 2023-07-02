// Note: Login component...!

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usersList, setUsersList] = useState([]);

    // Component did mount...!
    useEffect(() => {
        let fetchUsers = localStorage.getItem("Users");
        let dataInJSON = JSON.parse(fetchUsers);
        dataInJSON && setUsersList(dataInJSON);
    }, []);

    const loginUser = () => {
        let user = {
            email,
            password
        };
        // console.log('User: ', user);
        let userExist = false;
        let userFound;
        let isMatch = false;

        for (let i = 0; i < usersList.length; i++) {
            // console.log(usersList[i]);

            if (usersList[i].email == user.email) {
                userExist = true;
                userFound = usersList[i];
                break;
            };
        };

        if (userExist) {

            if (userFound.email == user.email && userFound.password != user.password) {
                console.log("Error: Email is correct bUt password is not correct!")
            }

            else {
                console.log('User:', userFound);

                // Note: Set user to userstate in database for user session...!
                localStorage.setItem("UserState", JSON.stringify(userFound));
                window.location.reload();
            };
        }

        else console.log('User does not exist!');
    };

    return (
        <>
            <div>
                <h1> Login Screen! </h1>

                <label>
                    Email:
                    <input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Password:
                    <input
                        type='password'
                        placeholder='*****'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />

                <button onClick={loginUser}> Log In </button>

                <br /> <br /> <br />

                <Link to={'signup'}>
                    Go to SignUp
                </Link>
            </div>
        </>
    );
};

export default Login;