import React, { Fragment, useState } from "react";
import Header from "../contact/header/header";

const HomeComponent = () => {

    // const [nameState, setNameState] = useState("ali");
    // const [count, setCount] = useState(0);
    // const [arr, setArr] = useState(["a", "b", "c"]);

    // const changeName = () => {
    //     setNameState("ahmed");
    // };

    // const increamentHandler = () => {
    //     // console.log(count);
    //     setCount(count + 1);
    // };

    return (
        <Fragment>
            {/* <Header screenName="home" /> */}
            {/* <hr /> */}
            {/* <h1> Home Component in React! </h1>
            <h2> My name is {nameState} </h2>
            <h3> Count: {count} </h3>

            <button onClick={changeName}> Change State </button>
            <button onClick={increamentHandler}> Increament Count </button>

            <hr />
            {
                arr.map((item, index) => {
                    return (
                        <h1 key={index}> { item } </h1>
                    );
                })
            } */}
        </Fragment>
    );
}

export default HomeComponent;