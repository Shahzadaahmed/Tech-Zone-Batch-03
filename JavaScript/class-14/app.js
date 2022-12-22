// function callUserName(name) {
//     console.log("Name: ", name);
// };

// callUserName("ahmed");


// function greetUser(message, func) {
//     console.log("Message: ", message);
//     func("Ali");
// }

// greetUser("Hello", callUserName);



// function callUserName(name) {
//     return name;
// };

// var result = callUserName("ahmed");
// console.log(result);



// function calculateValues(num1, num2) {
//     return num1 + num2;
// };

// var result = calculateValues(3, 7);
// console.log(result);

// Note: Solve the equation: (a2 + 2ab + b2):

// function handleSquareValue(num) {
//     return num * num;
// };

// function solveEquation(a, b, sqHandler) {
//     // console.log("a: ", a);
//     // console.log("b: ", b);
//     // console.log(sqHandler(a));

//     var equation = sqHandler(a) + (2 * a * b) + sqHandler(b);
//     return equation;
// };

// // solveEquation(4, 2, handleSquareValue);
// var result = solveEquation(4, 2, handleSquareValue);
// console.log(result);










// function callName(name1, name2) {
//     var fullName = name1 + " " + name2;
//     return fullName;
// };

// var result = callName("Muhammad", "Ahmed");
// console.log(result);



// Note: Solve the equation: (a2 + b2 + c2 + 2ab + 2bc +2ca).

// function handleSquare(num) {
//     return num * num;
// };

// function solveEquation(a, b, c, squareHandler) {
//     // console.log(a, b, c);
//     // console.log(squareHandler(a));

//     var equation = squareHandler(a) + squareHandler(b) + squareHandler(c) + (2 * a * b) + (2 * b * c) + (2 * c * a);
//     console.log(equation);
// };

// solveEquation(4, 2, 6, handleSquare);

function findFactorial(num) {
    // console.log("Num: ", num);
    var count = 1;

    for (var i = 1; i <= num; i++) {
        // console.log(i);

        count = count * i;
    };

    return count;
}

var factorialNum = 5;
var result = findFactorial(factorialNum);
console.log(result);