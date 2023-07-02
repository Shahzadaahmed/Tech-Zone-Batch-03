import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Img_1 from "../../assets/Img1.gif";
import Img_2 from "../../assets/Img2.gif";
import { toggleBulb } from '../../redux/store/action/todo-action/todo-action';

const Bulb = () => {

    const dispatch = useDispatch();

    const fetchStates = useSelector(({ todoStates }) => { return todoStates.toggleBulb });
    console.log(fetchStates);

    return (
        <>
            <h1> Toggle Bulb </h1>

            <h2> Bulb {fetchStates ? 'On' : 'Off'} </h2>

            <img
                src={fetchStates ? Img_2 : Img_1}
                alt='Bulb'
            />
            <br />

            <button onClick={() => dispatch(toggleBulb())}>
                Bulb {!fetchStates ? "On" : "Off"}
            </button>
        </>
    );
};

export default Bulb;