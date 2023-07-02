// let userInput;
// var userInput;

// const userInput;


// let userInput = prompt('Enter your gender!');

// if (userInput == "male") {
//     console.log(`Your gender is ${userInput}`);
// }

// else if (userInput == "female") {
//     console.log(`Your gender is ${userInput}`);
// }

// else {
//     console.log('Invalid Gender!');
// };
/*
let userInput = prompt('Enter your gender!');

switch (userInput) {
    case "male":
        console.log(`Your gender is ${userInput}`);
        break;

    case "female":
        console.log(`Your gender is ${userInput}`);
        break;

    default:
        console.log("Invalid gender!");
}; 
*/
/*
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let today = new Date().getDay().toString();
console.log(today);

switch (today) {
    case "0":
        console.log(`Today is ${days[0]}`);
        break;

    case "1":
        console.log(`Today is ${days[1]}`);
        break;

    case "2":
        console.log(`Today is ${days[2]}`);
        break;

    case "3":
        console.log(`Today is ${days[3]}`);
        break;

    case "4":
        console.log(`Today is ${days[4]}`);
        break;

    case "5":
        console.log(`Today is ${days[5]}`);
        break;

    case "6":
        console.log(`Today is ${days[6]}`);
        break;

    default:
        console.log("Invalid date!");
};
*/

// let userInput = prompt('Enter your gender!');

// let gender = "male";
// let condition = (userInput == "male") ? (true) : (false);
// console.log(condition);

// const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// console.log(days);

// for (let i = 0; i < days.length; i++) {
//     console.log(days[i]);
// };

// days.map((ahmed, index) => {
//     console.log(ahmed);

//     // if (item == "thursday") {
//     //     console.log(index, item);
//     // };
// });

// let myData = days.map((item, index) => {
//     return item;
// });
// console.log(myData);

const tester = (arr) => {
    // console.log(arr);

    if (arr.length > 0) {
        return arr;
    }
    else {
        return "No data found!";
    };
};

// const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// const days = [];
console.log(tester([]));