import React, { useState, useEffect } from 'react';

const Component27Feb = () => {

    const [count, setCount] = useState(5);
    const [favTech, setFavTech] = useState([
        'Google', 'Microsoft', 'Apple', 'Facebook', 'Intel'
    ]);
    const [randomNum, setRandomNum] = useState(0);

    const helloClass = () => console.log("Hello Class!");

    const counterUpdate = () => {
        console.log("Counter state is updating");
    };

    const updateTech = () => {
        const generateRandom = Math.floor(Math.random() * favTech.length);
        // console.log(generateRandom);
        setRandomNum(generateRandom);
    }

    // Note: When component rendered...!
    useEffect(() => {
        helloClass();
    }, []);

    // This hook will work on counter state
    useEffect(() => {
        counterUpdate();
    }, [count]);

    useEffect(() => {
        console.log('3rd effect is running!');
    });

    useEffect(() => {
        console.log('Random Tech: ', favTech[randomNum]);
    }, [randomNum]);

    useEffect(() => {
        return () => {
            // Note: This will work when component unmounted!
        }
    }, []);

    return (
        <>
            <h1> Third class React JS </h1>
            <h2> Count: {count} </h2>
            <h2> Favourite Tech: {favTech[randomNum]} </h2>
            <button onClick={() => setCount(count + 1)}>
                Update State
            </button>

            <button onClick={updateTech}>
                Change Tech
            </button>
        </>
    );
};

export default Component27Feb;