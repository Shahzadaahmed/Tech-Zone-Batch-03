import React, { useState } from 'react';
import "./style.css";

const TodoComponent = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [todoInput, setTodoInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [isItemEdit, setIsItemEdit] = useState(false);
    const [editItemIndex, setEditItemIndex] = useState("");

    const addItem = () => {
        let todoListClone = todoList.slice(0);
        todoListClone.push(todoInput);
        setTodoList(todoListClone);
        setTodoInput("");

        // setErrorMessage("Item Added!");
    };

    function deleteItem(data, key) {
        console.log(data, key);

        let todoListClone = [...todoList];
        todoListClone.splice(key, 1);
        setTodoList(todoListClone);
    };

    // const deleteAll = () => {
    //     let empty = [];
    //     setTodoList(empty);
    // };

    const editItem = (data, key) => {
        console.log(data, key);

        setTodoInput(data);
        setIsItemEdit(true);
        setEditItemIndex(key);
    };

    const updateItem = () => {
        let todoListClone = todoList.slice(0);
        todoListClone.splice(editItemIndex, 1, todoInput);
        setTodoList(todoListClone);

        setTodoInput("");
        setIsItemEdit(false);
        setEditItemIndex("");
    };

    const cancelUpdate = () => {
        setTodoInput("");
        setIsItemEdit(false);
        setEditItemIndex("");
    };

    return (
        <>
            <h1> Todo App React JS </h1>
            {/* <h2> {errorMessage} </h2> */}

            <div>
                <input
                    type={'text'}
                    placeholder="Write Something"
                    value={todoInput}
                    onChange={(e) => { setTodoInput(e.target.value) }}
                />

                {
                    (isItemEdit)
                        ?
                        (
                            <>
                                <button onClick={updateItem}> Update Item </button>
                                <button onClick={cancelUpdate}> Cancel </button>
                            </>
                        )
                        :
                        (<button onClick={addItem}> Add Item </button>)
                }
                {/* <button
                    // onClick={deleteAll}
                    onClick={() => setTodoList([])}
                > Delete All </button> */}

                <ul>
                    {
                        (todoList.length > 0)
                            ?
                            (
                                todoList.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="todo-li"
                                        >
                                            {item}
                                            <button
                                                onClick={() => deleteItem(item, index)}
                                            >
                                                Delete
                                            </button>

                                            <button
                                                onClick={() => editItem(item, index)}
                                            >
                                                Edit
                                            </button>
                                        </li>
                                    );
                                })
                            )
                            :
                            (
                                <h2> No Data Found! </h2>
                            )
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoComponent;