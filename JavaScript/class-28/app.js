// function ab(name, handler) {
//     console.log("I am talking with: ", name);
//     handler();
// };

// function test() {
//     console.log("Another function is running!");
// };

// ab("bilal", test);


// function runAfter3() {
//     console.log('Run after 3 seconds!');
// };

// setTimeout(() => {
//     console.log('Run after 3 seconds!');
// }, 3000);

// let ulEl = document.getElementById("ul");
// let data = ['a', 'b', 'c', 'd', 'e'];
// // console.log(data);

// ulEl.innerHTML = data.map((item, index) => {
//     // console.log(index, item);
//     return (
//         `<li> ${item} </li>`
//     );
// }).join("");

/*
let data = [
    {
        id: 1,
        userName: "Ahmed"
    },

    {
        id: 2,
        userName: "Bilal"
    },

    {
        id: 3,
        userName: "Asad"
    },

    {
        id: 4,
        userName: "Hammad"
    },
];
console.log(data);
*/

/*
let learningPromise = new Promise((resolve, reject) => {
    let num = prompt("Enter any number!");

    if (num % 2 == 0) {
        resolve(num, "is even!");
    }

    else {
        reject(num, "is not even!");
    }
});

learningPromise
    .then((res) => {
        console.log("Even No: ", res);
    })
    .catch((err) => {
        console.log("Promise Err: ", err);
    });
*/

const apiCall = () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";
    // console.log(apiUrl);

    fetch(apiUrl)
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        .then((actualData) => {
            console.log("Data: ", actualData);
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
};

apiCall();