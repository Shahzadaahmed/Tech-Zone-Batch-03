// Note: Importing required libraries...!
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { usersList } = require("./dummy-data/users-list");

// Note: Variables...!
const app = express();
const port = 3020;

// Middlewares...!
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log(`A request came: ${req.body}`);
    next();
});

// Note: Api for the endpoint /
app.get("/", (req, res) => {
    return res.status(200).send({
        status: true,
        message: "Welcome to back-end development!"
    });
});

let myData = {
    name: "Shahzada Ahmed",
    company: "10 Pearls",
}

// GET API's...!

// Note: 2nd api...!
app.get("/data", (req, res) => {
    return res.status(201).send({
        status: true,
        message: "Welcome to Express JS!",
        data: myData
    });
});


// Note 3rd api...!
app.get("/users", (req, res) => {
    return res.status(200).send({
        status: true,
        message: "Users List!",
        data: usersList
    });
});


// POST API's...!
app.post("/form-submit", (req, res) => {
    let { userName } = req.body;
    console.log(`User Name: ${userName}`);

    try {
        // Note: COndition for the status code 400...!
        if (userName == "") {
            return res.status(400).send({
                status: false,
                message: "Please fill the required field!"
            });
        };

        return res.status(200).send({
            status: true,
            message: "Everything is working fine!",
            data: userName
        });
    }

    catch (error) {
        // Note: COndition for the status code 500...!
        let message = "Something went wrong from server side";
        console.log(`Message: ${message}`)
        console.log(`Error: ${error}`);

        return res.status(500).send({
            status: false,
            message: message
        });
    }
});

// Note: Application runing...!
app.listen(port, () => {
    console.log(`Your server is running on port ${port}`)
});