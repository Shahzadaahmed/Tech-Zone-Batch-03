import React, { useState } from 'react';
import ListData from './list-data/list-data';

const List = () => {
    const [arrState, setArrState] = useState([
        {
            id: 1,
            universityName: "HU",
            campus: "Main"
        },

        {
            id: 2,
            universityName: "KU",
            campus: "Univeristy Road"
        },

        {
            id: 3,
            universityName: "DHA Suffa Uni",
            campus: "DHA"
        },

        {
            id: 4,
            universityName: "IU",
            campus: "Haideri"
        },

        {
            id: 5,
            universityName: "Maju",
            campus: "Shahrah e faisal"
        },
    ]);

    return (
        <>
            <h1> List component! </h1>
            {
                arrState.map((item, index) => {
                    return (
                        <ListData
                            key={index}
                            ahmedData={item}
                        />
                    );
                })
            }
        </>
    );
};

export default List;