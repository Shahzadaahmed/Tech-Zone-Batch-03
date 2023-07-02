import React from 'react';

const ListData = (props) => {
    console.log("Props: ", props);

    return (
        <div>
            <div style={{ borderBottom: "1px solid black" }}>
                <h3> Univesity Id: { props.ahmedData.id } </h3>
                <h3> Univesity Name: {props.ahmedData.universityName} </h3>
                <h3> Univesity Campus: {props.ahmedData.campus} </h3>
            </div>
        </div>
    )
}

export default ListData;