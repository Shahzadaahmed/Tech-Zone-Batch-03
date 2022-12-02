// var carsArr = ["Audi", "Volvo", "Ford", "Lamborghini"];
// // console.log(carsArr);

// console.log("First index of the array: ", carsArr.indexOf(carsArr[0]));
// console.log("Car at the first index of the array: ", carsArr[0]);




// var carsArr = ["Audi", "Volvo", "Ford", "Lamborghini"];

// for (var i = 0; i < carsArr.length; i++) {
//     console.log(carsArr);
// };



// for (var i = 1; i <= 10; i++) {
//     console.log(i);

//     if (i == 5) {
//         break;
//     }
// }


// var fruitsArr = ["apple", "banana", "grapes", "orange", "mango"];
// var userInput = prompt("Enter your fav fruit name!");
// var targetFruit = false;

// for (var i = 0; i < fruitsArr.length; i++) {
//     console.log(fruitsArr[i]);

//     if (fruitsArr[i] == userInput) {
//         targetFruit = true;
//         break;
//     };
// };

// if (targetFruit == true) {
//     console.log("Item found successfully!");
// }

// else {
//     console.log("Item not found successfully!");
// }



// for (var i = 1; i <= 5; i++) {
//     // console.log(i, "i");

//     for (var j = 1; j <= 4; j++) {
//         // console.log(j, "j");

//         var k = i * j;
//         console.log(k, "k");
//     };
// };


// var str = "aHmEd";
// // str = str.toUpperCase();
// str = str.toLowerCase();
// console.log(str);





// var userInput = prompt("Enter your name!");
// // console.log(userInput);

// var initialChar = userInput.charAt(0);
// var remainingChars = userInput.slice(1);
// var capitalize = initialChar.toUpperCase() + remainingChars.toLowerCase();
// console.log(capitalize);


var table = prompt("Which table do you want to print?");
var tableLength = prompt("What should be the length of the table?");

for (var i = 1; i <= tableLength; i++) {
    console.log(table + " x " + i + " = " + (table * i));
};