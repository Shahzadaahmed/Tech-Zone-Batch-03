import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const AboutComB = () => {
    const [bgColor, setBgColor] = useState("lightblue");

    const saveDataInLS = () => {
        let dummyUser = {
            myName: "ahmed",
            title: "software engineer"
        };
        let dataInStr = JSON.stringify(dummyUser);
        localStorage.setItem("User", dataInStr);
    };

    return (
        <>
            <div
                style={{
                    height: "50vh",
                    backgroundColor: bgColor
                }}
            >
                <MDBBtn
                    className='me-1'
                    style={{ backgroundColor: "blue" }}
                    onClick={() => setBgColor("blue")}
                >
                    Blue Bg
                </MDBBtn>
                <MDBBtn
                    className='me-1'
                    style={{ backgroundColor: "red" }}
                    onClick={() => setBgColor("red")}
                >
                    Red Bg
                </MDBBtn>
                <MDBBtn
                    className='me-1'
                    style={{ backgroundColor: "green" }}
                    onClick={() => setBgColor("green")}
                >
                    Green Bg
                </MDBBtn>
                <MDBBtn
                    style={{ backgroundColor: "orange" }}
                    onClick={() => setBgColor("orange")}
                >
                    Orange Bg
                </MDBBtn>
            </div>

            <button onClick={saveDataInLS}> Save Data </button>
        </>
    )
}

export default AboutComB;