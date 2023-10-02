// Email controler file...!
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const credentials = {
    email: "bilalbitw@gmail.com", // gmail id,
    password: "keesonuajojnxffo" // password
};

// API route to semding email to user...!
// router.route("api/send/email").post(sendEmail);

router.post("/api/send/email", (req, res) => {
    let { email } = req.body;
    console.log(`Email: ${email}`);

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
            // text: "Your otp is 1234"
            html : "<h1> Your otp is 1234 </h1>"
        };

        transporter.sendMail(
            receiverDetails,
            (err) => {
                if (!err) {
                    console.log('Email sent successfully!');
                };
            }
        );
    }

    catch (error) {
        console.log(`Something went wrong while sending email: ${error}`);
    };
});

module.exports = router;