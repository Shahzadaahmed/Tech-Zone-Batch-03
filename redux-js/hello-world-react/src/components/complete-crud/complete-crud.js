import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompleteCrud = () => {

    // States...!
    const [todoInput, setTodoInput] = useState("");
    const [todoData, setTodoData] = useState([]);

    const fetchAllData = async () => {
        let apiUrl = "http://localhost:8000/api/todo/fetch-all";

        try {
            let response = await axios({
                method: "GET",
                url: apiUrl
            });
            // console.log(response);

            if (response.status == 200) {
                setTodoData(response.data.data);
            };
        }

        catch (error) {
            console.log("SOmething went wrong while fetching data: ", error);
        };
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const addItemHandler = async () => {
        console.log(todoInput);

        try {
            let response = await axios({
                method: "POST",
                url: "http://localhost:8000/api/add/todo",
                data: { todoValue: todoInput }
            });
            console.log(response);

            if (response) {
                alert(response.data.message);
                setTodoInput("");
                fetchAllData(); // For real time update purpose...!
            }
        }

        catch (error) {
            console.log("Something went wrong while adding data: ", error);
        }
    };

    const deleteItemHandler = async (data) => {
        // console.log('Data: ', data);

        let apiUrl = `http://localhost:8000/api/delete/todo/${data._id}`

        try {
            let response = await axios({
                method: "DELETE",
                url: apiUrl
            });
            console.log(response);

            if (response.status == 200) {
                alert(response.data.message);

                fetchAllData(); // Note: For real time update purpose...!
            };
        }

        catch (error) {
            console.log('Something went wrong while deleteing data: ', error);
        };
    };

    const editItemHandler = async (data) => {
        console.log('Data: ', data);

        let apiUrl = "http://localhost:8000/api/update/todo";
        let updateData = prompt('Enter updated value');

        if (updateData) {
            try {
                let response = await axios({
                    method: "POST",
                    url: apiUrl,
                    data: {
                        todoId: data._id,
                        updatedValue: updateData
                    }
                });
                console.log(response);

                if (response.status == 200) {
                    alert(response.data.message);
                    fetchAllData(); // Note: For real time update purpose...!
                };
            }

            catch (error) {
                console.log('Something went wrong while updaing data: ', error);
            };
        };
    };

    return (
        <div>
            <h1> Crud operation full stack! </h1>

            <div>
                <input
                    type='text'
                    placeholder='Write Anything...'
                    value={todoInput}
                    onChange={e => setTodoInput(e.target.value)}
                />
                <button
                    disabled={todoInput.trim().length < 1}
                    onClick={addItemHandler}
                > Add Item </button>
            </div>

            {/* List */}
            <ul>
                {
                    (todoData && todoData.length > 0)
                        ?
                        (
                            todoData.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item.todo}
                                        <button
                                            onClick={() => deleteItemHandler(item)}
                                        >
                                            Delete Item
                                        </button>

                                        <button
                                            onClick={() => editItemHandler(item)}
                                        >
                                            Edit Item
                                        </button>
                                    </li>
                                );
                            })
                        )
                        :
                        (<h1> Loading... </h1>)
                }
            </ul>
        </div>
    );
};

export default CompleteCrud