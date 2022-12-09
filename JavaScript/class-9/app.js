// Q:5
// var arr = ["a", "b", "c", "d", "e"];
// // console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     console.log("Element at index", i, " is ", arr[i]);
// };

// console.log("Element at index 0 is ", arr[0]);



// Q:6

// var noOfQuestion = prompt("Enter number of items!");
// var arr = [];
// var item;

// for (var i = 0; i < noOfQuestion; i++) {
//     // console.log(i);
//     item = prompt("Enter item ", i);
//     arr.push(item);
// };

// console.log(arr);


// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("What item do you want?");
// var itemFound = false;
// var targetItem = undefined;

// for (var i = 0; i < bakeryItems.length; i++) {
//     // console.log(bakeryItems[i], i);

//     if (bakeryItems[i] == userInput) {
//         itemFound = true;
//         targetItem = bakeryItems[i];
//         break;
//     };
// };

// if (itemFound == true) {
//     console.log('Item found!');
// }

// else {
//     console.log('Item not found!');
// };



// var str = "computer";
// str = str.toUpperCase();
// console.log(str);

// var str = "cOmpUter";
// str = str.toLowerCase();
// console.log(str);


// var str = "muhammad ahmed";
// console.log(str.slice(9));

// var str = "ahmed";
// console.log(str.indexOf('m'));



// var str = "ahmed";
// console.log(str.charAt(3));


var str = "muhammad ahmed";
str = str.replace("ahmed", "ali");
console.log(str);