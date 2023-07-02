import React, { useEffect } from 'react';
import { apiCall } from '../../redux/store/action/todo-action/todo-action';
import { useDispatch, useSelector } from 'react-redux';

const About = () => {

    const dispatch = useDispatch();

    const { users } = useSelector(({ todoStates }) => { return todoStates });
    console.log('Users: ', users);

    useEffect(() => {
        dispatch(apiCall());
    }, []);

    return (
        <>
            <h1> API Integration with Redux! </h1>

            {
                users.map((item, index) => {
                    return (
                        <h1 key={item.id}>
                            {`Name: ${item.firstName} ${item.lastName}`}
                        </h1>
                    )
                })
            }
        </>
    );
};

export default About;