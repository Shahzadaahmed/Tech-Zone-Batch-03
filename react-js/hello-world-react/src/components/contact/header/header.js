import React from 'react'

const Header = (props) => {
    let data = props;
    console.log(data);

    return (
        <>
            <h1> Learning State and Props! </h1>
            <h2> I am inside { props.screenName } component! </h2>
        </>
    )
}

export default Header;