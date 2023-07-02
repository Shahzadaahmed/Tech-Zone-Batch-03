import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateNameState } from '../../redux/store/action/todo-action/todo-action';

let styles = {
    headingSection: {
        color: "blue"
    }
};

const Home = () => {

    const dispatch = useDispatch();

    let fetchReduxStates = useSelector(({ todoStates }) => { return todoStates.todoList });
    console.log('Redux States: ', fetchReduxStates);

    const clickBtn = () => {
        let myName = "Ali Ahmed";

        dispatch(updateNameState(myName));
    };

    return (
        <>
            <h1 style={styles.headingSection}> Welcome to Redux JS! </h1>
            <h2> {`Name: ${fetchReduxStates}`} </h2>

            <button onClick={clickBtn}> Update Name State </button>
        </>
    );
};

export default Home;