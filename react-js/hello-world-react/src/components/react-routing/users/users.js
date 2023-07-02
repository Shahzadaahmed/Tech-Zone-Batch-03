import React, { useEffect, useState } from 'react';

let users = [
    {
        id: 1,
        userName: "Ahmed"
    },

    {
        id: 2,
        userName: "Mehran"
    },

    {
        id: 3,
        userName: "Kashan"
    },

    {
        id: 4,
        userName: "Shahzaib"
    },

    {
        id: 5,
        userName: "Khurram"
    },
];

const Users = () => {

    const [searchUser, setSearchUser] = useState("");
    const [usersData, setUsersData] = useState(users)
        .filter((item) => {
            // console.log(item);
            return item?.userName?.toLowercase().includes(searchUser?.toLowerCase());
        });

    return (
        <>
            <h1> Users List </h1>

            <input
                type='text'
                placeholder='Search by first name'
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
            />
            <hr />

            {
                usersData.length < 1 ?
                    <h1> No User Found! </h1> :
                    usersData.map((item, index) => {
                        return (
                            <h1 key={index}>
                                {item.userName}
                            </h1>
                        );
                    })
            }
        </>
    );
};

export default Users;