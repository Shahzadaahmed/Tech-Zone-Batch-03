import React, { useEffect, useState } from 'react'

const ListData = () => {

    const [apiData, setApiData] = useState([]);

    const apiCall = () => {
        let apiUrl = "https://jsonplaceholder.typicode.com/users";

        fetch(apiUrl)
            .then((success) => {
                // console.log(success.json());
                return success.json();
            })
            .then((actualData) => {
                console.log(actualData);

                if (actualData.length > 0) {
                    setApiData(actualData);
                };
            })
            .catch((err) => {
                console.log("Error in api integration: ", err);
            })
    };

    useEffect(() => {
        apiCall();
    }, []);

    return (
        <>
            <h1> Data Listing! </h1>

            {
                apiData.map((i, e) => {
                    return (
                        <div key={e}>
                            My name is {i.name} and my id is {i.id}
                        </div>
                    );
                })
            }
        </>
    );
};

const AnotherList = () => {
    return (
        <>
            <h1> Another Listing! </h1>
        </>
    );
};

export { ListData, AnotherList };