var bulbEl = document.getElementById("bulb");

// function toggleBulb() {
//     // console.log(bulbEl.src);
//     bulbEl.src = "./images/on.gif";
// };



// function cursorOnImage() {
//     bulbEl.src = "./images/on.gif";
// };

// function cursorOffImage() {
//     bulbEl.src = "./images/off.gif";
// }

var emailField = document.getElementById("email");
var passwordField = document.getElementById("password");

function clearAll() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
};

function submitForm() {
    if (emailField.value == "") {
        emailField.style.borderColor = "red";
        emailField.placeholder = "EMAIL LIKHO!";
    }

    else if (passwordField.value == "") {
        emailField.style.borderColor = "transparent";
        passwordField.style.borderColor = "red";
        passwordField.placeholder = "PASSWORD LIKHO!";
    }

    else {
        emailField.style.borderColor = "transparent";
        passwordField.style.borderColor = "transparent";
        console.log(emailField.value);
        console.log(passwordField.value);
        clearAll();
    };
};