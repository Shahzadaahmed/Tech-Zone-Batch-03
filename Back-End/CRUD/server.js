// Note: Required libraries...!
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const emailRoutes = require("./email/email.js");

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
const port = 5050;

// Note: Staructure for how to create user in database...!
const User = mongoose.model("users", {
    userName: String,
    email: String,
    password: String,
    profileImage: String
});

// Middlewares...!
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(emailRoutes);

app.use((req, res, next) => {
    console.log(`A request came: ${req.body}`);
    next();
});

// API default route...!
app.get("/", (req, res) => {
    return res.status(200).send({
        status: true,
        message: "Welcome to CRUD App Back-End!"
    });
});

// API route to add or create user...!
app.post("/api/user/add", (req, res) => {
    let { name, email, password, profileImage } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).send({
                status: false,
                message: "All fields are required!"
            });
        };

        // Note: password encryption...!
        let encodePassword = btoa(password);

        // Note: Saving user in DB...!
        let newUser = new User({
            userName: name,
            email: email,
            password: encodePassword,
            profileImage: profileImage
        });

        newUser
            .save()
            .then(() => {
                console.log(`User added successfully!`);
                return res.status(200).send({
                    status: true,
                    message: "User added successfully!"
                });
            })
            .catch(err => {
                console.log(`Something went wrong while saving user in DB: ${err}`);
            });
    }

    catch (error) {
        console.log(`Something went wrong while creating user: ${error}`);
    };
});


// Note: API to fetch all users..!
app.get("/api/users/fetch-all", (req, res) => {
    User
        .find()
        .then((data) => {
            if (data.length < 1) {
                return res.status(400).send({
                    status: false,
                    message: "Data not found!"
                });
            };

            return res.status(200).send({
                status: true,
                message: "Users List!",
                data: data
            });
        })
        .catch(err => {
            console.log(`Something went wrong while fetching users: ${err}`);
            return res.status(500).send({
                status: false,
                message: "Something went wrong while fetching users"
            });
        })
});



// Note: API to delete useru..!
// app.delete("/api/delete/user/:uid", (req, res) => {
//     let { uid } = req.params;
//     console.log(`Id: ${uid}`);

//     User
//         .findByIdAndRemove(uid)
//         .then((success) => {
//             return res.status(200).send({
//                 status: true,
//                 message: "User deleted successfully!"
//             });
//         })
//         .catch(err => {
//             console.log(`Something went wrong while deleting user: ${err}`);
//         });
// });



app.post("/api/delete/user", (req, res) => {

    User
        .findByIdAndRemove(req.body.id)
        .then((success) => {
            return res.status(200).send({
                status: true,
                message: "User deleted successfully!"
            });
        })
        .catch(err => {
            console.log(`Something went wrong while deleting user: ${err}`);
        });
});



// API route to update user...!
app.put("/api/user/update", (req, res) => {
    let { id, username } = req.body;
    console.log(`User Id: ${id}`);
    console.log(`User Name: ${username}`);

    User
        .findByIdAndUpdate(
            id,
            { userName: username },
            { new: true }
        )
        .then(data => {
            if (data) {
                return res.status(200).send({
                    status: true,
                    message: "User updated succesfully!",
                    data: data
                });
            };
        })
        .catch((err) => {
            console.log(`Something went wrong while updating user: ${err}`);
        });
});





// Server running handler...!
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});