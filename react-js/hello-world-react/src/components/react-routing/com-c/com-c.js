import React, { useEffect, useState } from 'react';
import { MDBIcon, MDBNavbarItem } from 'mdb-react-ui-kit';
import Img1 from "../../../assets/images/cartoon-1.jpg";
import Img2 from "../../../assets/images/cartoon-2.jpg";
import Img3 from "../../../assets/images/cartoon-3.jpg";
import Img4 from "../../../assets/images/cartoon-4.jpg";
import Img5 from "../../../assets/images/cartoon-5.png";
import "./style.css";

const Slider = () => {

    // Note: Handeling states here...!
    const [slides, setSlides] = useState([Img1, Img2, Img3, Img4, Img5]);
    const [startingPoint, setStartingPoint] = useState(0);

    // Note: Slider handler...!
    const imageSlider = () => {
        setTimeout(() => {
            let initialPoint = startingPoint;
            initialPoint = initialPoint + 1;
            setStartingPoint(initialPoint);

            if (initialPoint == slides.length) {
                initialPoint = 0;
                setStartingPoint(initialPoint);
            };
        }, 2000);
    };

    // This hook will update on every state of startingPoint state...!
    useEffect(() => {
        imageSlider();
    }, [startingPoint]);

    const rightArrowHandler = () => {
        setStartingPoint(startingPoint + 1);
    }

    return (
        <>
            <div className='custom-container'>
                <h1> Image Slider React JS </h1>

                <div className='slide-box'>
                    <MDBNavbarItem>
                        <MDBIcon
                            fas
                            icon="angle-double-left"
                            className='icon'
                        />
                    </MDBNavbarItem>
                    <img
                        src={slides[startingPoint]}
                        alt={slides[startingPoint]}
                        title={slides[startingPoint]}
                        className='slide'
                    />
                    <MDBNavbarItem onClick={rightArrowHandler}>
                        <MDBIcon
                            fas
                            icon="angle-double-right"
                            className='icon'
                        />
                    </MDBNavbarItem>
                </div>
            </div>
        </>
    )
}

export default Slider;