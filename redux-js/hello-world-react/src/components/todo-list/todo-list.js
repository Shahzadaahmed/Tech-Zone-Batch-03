import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData, deleteAll } from '../../redux/store/action/crud-action/crud-action';

const TodoList = () => {

    const [todoInput, setTodoInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [targetIndex, setTargetIndex] = useState(undefined);

    // Note: Handeling redux here...!
    const dispatch = useDispatch();

    let obj = {
        name: "",
        email: "",
        password: "",
        city: "",
        location: ""
    }

    let arr = ['a', 'b', 'c', 'd'];

    const { todoList } = useSelector(({ crudStates }) => { return crudStates })
    // console.log(todoList);

    // Note: FUnction to add an item...!
    const addItem = () => {
        if (!todoInput) {
            alert("Please fill the required field!");
        }

        else {
            dispatch(addData(todoInput));
            setTodoInput("");
        };
    };

    // Note: Function to edit item...!
    const editItem = (data, key) => {
        // console.log(data, key);

        setTodoInput(data);
        setIsEdit(true);
        setTargetIndex(key);
    };

    // Note: Function to update item...!
    const updateItem = () => {
        // console.log(todoInput);

        let updates = {
            updatedValue: todoInput,
            elIndex: targetIndex
        };

        dispatch(updateData(updates));

        setTodoInput("");
        setIsEdit(false);
        setTargetIndex(undefined);
    };

    return (
        <>
            <h1> CRUD App with React and Redux </h1>

            <br /><br />
            <div>
                <input
                    type='text'
                    placeholder='Write Something'
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                />

                {
                    isEdit ?
                        <button onClick={updateItem}>
                            Update Item
                        </button>
                        :
                        <>
                            <button onClick={addItem}>
                                Add Item
                            </button>

                            <button onClick={() => dispatch(deleteAll())}>
                                Delete All
                            </button>
                        </>
                }
            </div>

            <ul>
                {
                    (todoList && todoList.length > 0)
                        ?
                        (
                            todoList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item}
                                        <button onClick={() => dispatch(deleteData(index))}>
                                            Delete Item
                                        </button>

                                        <button onClick={() => editItem(item, index)}>
                                            Edit Item
                                        </button>
                                    </li>
                                );
                            })
                        )
                        :
                        (
                            <h1> Data Not Found! </h1>
                        )
                }
            </ul>
        </>
    );
};

export default TodoList;