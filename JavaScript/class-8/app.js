// var numArr = [24, 53, , 7, 78, 91, 12];
// var largestNum = 0;

// for (var i = 0; i < numArr.length; i++) {
//     // console.log(numArr[i]);

//     if (numArr[i] > largestNum) {
//         largestNum = numArr[i];
//     };
// };

// console.log("Largest Num Is: ", largestNum);












// var numArr = [24, 53, 7, 78, 91, 12];
// var smallestNum = 1;

// for (var i = 0; i < numArr.length; i++) {
//     // console.log(numArr[i]);

//     if (numArr[i] < smallestNum) {
//         smallestNum = numArr[i];
//     };
// };

// console.log("Smallest Num is: ", smallestNum);










// var numsArr = [24, 53, 78, 91, 12, 505, 1];
// var foundSmallestNum = 2;

// for (var i = 0; i < numsArr.length; i++) {
//     // console.log(numsArr[i]);
//     if (numsArr[i] < foundSmallestNum) {
//         foundSmallestNum = numsArr[i];
//     };
// };
// console.log(`Smallest number is ${foundSmallestNum}`);

// var smallVal = Math.min(24, 53, 78, 91, 12, 505, 3);
// console.log(smallVal);



// var scoresArr = [12, 45, 3, 22, 34, 50];
// // console.log(scoresArr[1]);

// var userInput = Number(prompt("Enter desired number!"));
// var desiredIndex = undefined;

// for (var i = 0; i < scoresArr.length; i++) {
//     // console.log(scoresArr[i]);

//     if (scoresArr[i] == userInput) {
//         desiredIndex = i;
//         break;
//     };
// };
// console.log(scoresArr.slice(0, desiredIndex + 1));


// var arr = [2, 4, 18, 90, 3];
// for (var i = 0; i < arr.length; i++) {
//     console.log(i);
// };


// var dimensionalArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (var i = 0; i < dimensionalArr.length; i++) {
//     console.log(dimensionalArr[i]);
// };


// var userInput = Number(prompt("Enter any number"));
// var userInput = 5;

// for (var i = userInput; i >= 0; i = i - 0.5) {
//     console.log(i);
// };

// var num = 5;

// for (var i = 0; i <= num; i = i + 0.5) {
//     console.log(i);
// };

// var num = 1;

// for (var i = 1; i <= 7; i++) {
//     // console.log(i);

//     if (i % 2 != 0) {
//         // console.log(i);
//         num = num * i;
//     };
// };

// console.log(num);

var str = "*****";
var strLength = str.length;

for (var i = 0; i < strLength; i++) {
    document.write(str + "<br />");
    str = str.slice(0, str.length - 1);
};