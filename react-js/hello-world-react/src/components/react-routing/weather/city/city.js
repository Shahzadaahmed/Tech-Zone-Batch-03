import React from 'react'

const CityScreen = (props) => {
    console.log("Props: ", props);

    return (
        <div>
            City: {props.data.name}
        </div>
    )
}

export default CityScreen;