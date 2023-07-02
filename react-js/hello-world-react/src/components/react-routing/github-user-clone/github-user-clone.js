import React, { useState } from 'react';

const GithubUserClone = () => {

    const [userInput, setUserInput] = useState("");
    const [users, setUsers] = useState([]);

    const fetchUser = async () => {

        let apiUrl = `https://api.github.com/search/users?q=${userInput.toLowerCase()}`;

        try {
            let res = await fetch(apiUrl);
            let dataInJSON = await res.json();
            console.log(dataInJSON);

            if (dataInJSON) {
                setUsers(dataInJSON.items);
            };
        }

        catch (error) {
            console.log('Error while fetching user: ', error);
        };
    };

    return (
        <>
            <h1> Github User Clone </h1>

            <div>
                <input
                    type='text'
                    placeholder='Enter Github UserName'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />

                <button
                    onClick={fetchUser}
                    disabled={userInput.trim().length < 1}
                >
                    Fetch User
                </button>
            </div>

            <ul>
                {
                    (users.length > 0)
                        ?
                        (
                            users.map((item, index) => {
                                return (
                                    <li key={index}>
                                        Name: {item.login}. Url: {item.html_url}
                                    </li>
                                );
                            })
                        )
                        :
                        (<h1> Data not found! </h1>)
                }
            </ul>
        </>
    );
};

export default GithubUserClone;