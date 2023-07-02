// Note: SignUp component...!

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    // States...!
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usersList, setUsersList] = useState([]);

    // Note: Note: Mounted hook...!
    useEffect(() => {
        if (localStorage.getItem("Users") != null) {
            let usersListClone = localStorage.getItem("Users");
            let dataInJSON = JSON.parse(usersListClone);
            setUsersList(dataInJSON);
            console.log("Users: ", dataInJSON);
        }

        else {
            let emptyArr = [];
            let dataInStr = JSON.stringify(emptyArr);
            localStorage.setItem("Users", dataInStr);
        };
    }, []);

    const clearAll = () => {
        setName("");
        setEmail("");
        setPassword("");
    };

    // Note: Function to signup user...!
    const signUpUser = () => {
        let userObj = {
            name,
            email,
            password
        };
        // console.log(userObj);

        let duplicateFound = false;
        let uListClone = [...usersList];

        for (let i = 0; i < uListClone.length; i++) {
            // console.log(uListClone[i]);

            if (uListClone[i].email == userObj.email) {
                duplicateFound = true;
                break;
            };
        };

        if (duplicateFound) {
            console.log('Error: User with this email address already exist!');
        }

        else {
            uListClone.push(userObj);
            setUsersList(uListClone);

            let dataInStr = JSON.stringify(uListClone);
            localStorage.setItem("Users", dataInStr);
            clearAll();
        }
    };

    return (
        <>
            <h1> SignUp Screen! </h1>

            <div>
                <label>
                    Name:
                    <input
                        type='text'
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />

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

                <button onClick={signUpUser}> Register </button>

                <br /> <br /> <br />

                <Link to={'/'}>
                    Go to LogIn
                </Link>
            </div>
        </>
    );
};

export default SignUp;