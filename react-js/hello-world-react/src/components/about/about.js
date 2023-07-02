import React, { useState } from "react";
import Img from "../../images/one.jpg";

const AboutComponent = () => {
    const [content, setContent] = useState(false);

    const changState = () => setContent(!content);

    return (
        <div style={{ backgroundColor: content ? "green" : "red" }}>
            {
                (content)
                    ?
                    (<h1> Contant loaded successfully! </h1>)
                    :
                    (<h1> Contant not found! </h1>)
            }

            <img
                height={'50px'}
                width={'50px'}
                src={Img}
            />


            <button onClick={changState}> Change State </button>
        </div>
    );
}

export default AboutComponent;