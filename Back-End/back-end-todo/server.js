// Note: Required libraries...!
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// Note: Mongo DB connectivity configuration...!
let dbUrl = "mongodb+srv://Prince1996:Prince1996@backendexpert.eolawkx.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(
        dbUrl,
        { dbName: "LearningBackEnd" }
    )
    .then(() => {
        console.log("Mongo DB connected successfully!");
    })
    .catch(err => {
        console.log(`Something went wrong while connecting to database: ${err}`);
    });

const app = express();
const port = 8000;

// Note: Staructure for how to create user in database...!
const TodoList = mongoose.model("todolist", {
    todo: String
});

// Middlewares...!
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log(`A request came: ${req.body}`);
    next();
});

// API default route...!
app.get("/", (req, res) => {
    return res.status(200).send({
        status: true,
        message: "Welcome to Back-End of Todo List!"
    });
});

// API route to add todo...!
app.post("/api/add/todo", (req, res) => {
    let { todoValue } = req.body;

    if (!todoValue) {
        return res.status(400).send({
            status: false,
            message: "todoValue is required!"
        });
    };

    let newItem = new TodoList({
        todo: todoValue
    });
    newItem
        .save()
        .then(succes => {
            if (succes) {
                return res.status(200).send({
                    status: true,
                    message: "Data added sucessfully!"
                });
            };
        })
        .catch(err => {
            console.log(`Something went wrong while adding todo data: ${err}`);
        })
});


// API route to fetch all data...!
app.get("/api/todo/fetch-all", (req, res) => {
    TodoList
        .find()
        .then((data) => {
            // console.log('Data: ', data);

            if (data.length < 1) {
                return res.status(400).send({
                    status: false,
                    message: "Data not found!"
                });
            }

            return res.status(200).send({
                status: true,
                message: "Todo list items",
                data: data
            });
        })
        .catch(err => {
            console.log(`Something went wrong while fetching data: ${err}`);
        });
});


// Api route to delete todo...!
app.delete("/api/delete/todo/:id", (req, res) => {
    let { id } = req.params;
    console.log(`Todo id: ${id}`);

    TodoList
        // .findByIdAndRemove(id)
        .deleteOne({ _id: id })
        .then(success => {
            if (success) {
                return res.status(200).send({
                    status: true,
                    message: "Item deleted successfully"
                });
            };
        })
        .catch(err => {
            console.log(`Something went wrong while deleting item: ${err}`);
        });
});



// APi route to update todo...!
app.post("/api/update/todo", (req, res) => {
    let { todoId, updatedValue } = req.body;
    console.log(`Id: ${todoId}`);
    console.log(`Updated value: ${updatedValue}`);

    TodoList
        .findByIdAndUpdate(
            todoId,
            { todo: updatedValue },
            { new: true }
        )
        .then(success => {
            if (success) {
                return res.status(200).send({
                    status: true,
                    message: "Todo updated succesfully!",
                    data: success
                });
            };
        })
        .catch(err => {
            console.log(`Something went wrong while updating data: ${err}`);
        });
});



// Server running handler...!
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});