// const h1El = document.getElementById("header");
// const h2El = document.getElementById("h2");

// let user = {
//     userName: "Ahmed",
//     title: "Enginner"
// };
// // console.log(user);

// h1El.innerHTML = `${user.userName} ${user.title}`
// // h2El.innerHTML = user.title;


// let userInput = prompt("Enter your name");

// try {
//     if (userInput.trim().length >= 1) {
//         console.log('Correct!');
//     }

//     else {
//         throw "Name is invalid!";
//     }
// }

// catch (err) {
//     console.log("Error: ", err);
// };


// let userName = "   ahmed     ";
// userName = userName.trim();

// console.log(userName);
// console.log(userName.length);
// console.log(typeof (userName));



// const apiCall = () => {
//     const apiUrl = "https://jsonplaceholder.typicode.com/users";
//     // console.log(apiUrl);

//     fetch(apiUrl)
//         .then((res) => {
//             // console.log(res);
//             return res.json();
//         })
//         .then((actualData) => {
//             console.log("API Data: ", actualData);
//         })
//         .catch((err) => {
//             console.log("Error: ", err);
//         })
// };

// apiCall();




const apiCall = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/photos";
    // console.log(apiUrl);

    try {
        let response = await fetch(apiUrl);
        // console.log(response);
        let actualData = await response.json();
        console.log(actualData);
    }

    catch (error) {
        console.log("Error in api integration: ", error);
    };
};

apiCall();