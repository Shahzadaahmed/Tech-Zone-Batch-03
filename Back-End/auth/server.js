// Note: Required libraries...!
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const credentials = {
    email: "bilalbitw@gmail.com", // gmail id,
    password: "keesonuajojnxffo" // password
};


// Note: Staructure for how to create user in database...!
const Users = mongoose.model("users", {
    name: String,
    email: String,
    password: String,
    role: String,
    otp: String
});


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

// Middlewares...!
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log(`A request came: ${req.body}`);
    next();
});


app.get("/", (req, res) => {
    return res.status(200).send({
        status: true,
        message: "Authentication in Node JS!"
    });
});

// Api route to create user...!
app.post("/api/user/register", (req, res) => {

    // securing password...!
    let securePassword = btoa(req.body.password);

    let newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
        role: req.body.role,
        otp: null
    });

    newUser
        .save()
        .then(succes => {
            if (succes) {
                return res.status(200).send({
                    status: true,
                    message: "User registered successfully!"
                });
            };
        })
        .catch(err => {
            console.log(`Something went wrong while creating user: ${err}`);
        })
});



// Api route to fetch users according to role...!
app.get("/api/users/:role", (req, res) => {
    let { role } = req.params;
    console.log(`Role: ${role}`);

    Users
        .find({ role })
        // .find({ role: role })
        .then(data => {
            if (data.length > 0) {
                return res.status(200).send({
                    status: true,
                    data
                });
            };
        })
        .catch(err => {
            console.log(`Something went wrong while fetching users: ${err}`);
        });
});




// Api route to login user...!
app.post("/api/user/login", async (req, res) => {
    let { email, password } = req.body;
    console.log(`Email ${email}`);
    console.log(`Password: ${password}`);

    try {
        // Status code: 400
        if (!email || !password) {
            return res.status(400).send({
                status: false,
                message: "Email and password required!"
            });
        };

        // Status code: 402
        let isUserExist = await Users.findOne({ email: email });
        // console.log(`Is user exist: ${isUserExist}`);

        if (!isUserExist) {
            return res.status(402).send({
                status: false,
                message: "Account does not exist!"
            });
        }

        // Status code: 404
        let usersPassword = isUserExist.password;
        let decodePassword = atob(usersPassword);
        // console.log(decodePassword);

        if (password != decodePassword) {
            return res.status(404).send({
                status: false,
                message: "Password did not match!"
            });
        }

        // 200
        return res.status(200).send({
            status: true,
            message: "You have logged in succesfully!",
            data: isUserExist
        });
    }

    catch (error) {
        // Status code: 500
        console.log(`Soemthing went wrong from server side: ${error}`);
        return res.status(500).send({
            status: false,
            message: "Soemthing went wrong from server side!"
        });
    };
});


// Note: Sending email to user for forgetting passsword purpose...!
const sendEmail = async (uid, email, otp) => {
    console.log(`User id: ${uid}`);
    console.log(`Email: ${email}`);
    console.log(`Otp: ${otp}`);

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: credentials.email,
                pass: credentials.password
            }
        });

        let receiverDetails = {
            from: credentials.email,
            to: email,
            text: `Your otp is ${otp}`
        };

        transporter.sendMail(
            receiverDetails,
            (err) => {
                if (!err) {
                    console.log('Email sent successfully!');

                    Users
                        .findByIdAndUpdate(
                            uid,
                            { otp: otp },
                            { new: true }
                        )
                        .then(success => {
                            if (success) {
                                console.log('OTP saved suceessfully!');
                            };
                        })
                        .catch(err => {
                            console.log(`Something went wrong while saving otp: ${err}`);
                        });
                };
            }
        );
    }

    catch (error) {
        console.log(`Something went wrong while sending email: ${error}`);
    };
};



// API route to verify user for forgetting passsword purpose...!
app.post("/api/user/verify", async (req, res) => {
    let { email } = req.body;
    // console.log(`Email: ${email}`);

    try {
        let isEmailExist = await Users.findOne({ email: email });
        // console.log(`User: ${isEmailExist}`);

        if (isEmailExist == null) {
            return res.status(400).send({
                status: false,
                message: "No account exist on this email address!"
            });
        };

        // Note: Generating 4 digits otp code ...!
        let generateOtp = Math.floor(1000 + Math.random() * 9000);
        // console.log(`Generated otp: ${generateOtp}`);

        if (generateOtp) {
            sendEmail(isEmailExist._id, isEmailExist.email, generateOtp);

            return res.status(200).send({
                status: true,
                message: `User verified successfully! and Otp sent to ${email}`,
                data: isEmailExist
            });
        };
    }

    catch (error) {
        console.log(`Something went wrong while verifying user: ${error}`);
        return res.status(500).send({
            status: false,
            message: "Something went wrong while verifying user!"
        });
    };
});



// API route to verify otp for forgetting passsword purpose...!
app.post("/api/otp/verify", async (req, res) => {
    let { uid, otpValue } = req.body;
    console.log(`User Id: ${uid}`);
    console.log(`User Otp: ${otpValue}`);

    try {
        let isUserExist = await Users.findOne({ _id: uid });
        // console.log(`User: ${isUserExist}`);

        // 400:
        if (isUserExist.otp != otpValue) {
            return res.status(400).send({
                status: false,
                message: "Invalid Otp!"
            });
        };

        return res.status(200).send({
            status: true,
            message: "Otp verified successfully!"
        });
    }

    catch (error) {
        console.log(`Something went wrong while verifying otp: ${error}`);

        // 500:
        return res.status(500).send({
            status: false,
            message: "Something went wrong while verifying otp!"
        });
    };
});



// API route to forget password passsword purpose...!
app.post("/api/user/update/password", async (req, res) => {
    let { uid, updatedPassword } = req.body;
    console.log(`User Id: ${uid}`);
    console.log(`Updated password: ${updatedPassword}`);

    try {
        // Encoding password...!
        let securePassword = btoa(updatedPassword);
        console.log(`Secure password: ${securePassword}`);

        let updated = await Users.findByIdAndUpdate(
            uid,
            {
                password: securePassword,
                otp: null
            },
            { new: true }
        );

        if (updated) {
            return res.status(200).send({
                status: true,
                message: "Password updated succesfully!"
            });
        };
    }

    catch (error) {
        console.log(`Something went wrong while updating password: ${error}`);

        // 500:
        return res.status(500).send({
            status: false,
            message: "Something went wrong while updating password!"
        });
    };
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});