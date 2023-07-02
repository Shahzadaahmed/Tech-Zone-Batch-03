// var userInput = Number(prompt("Enter 100 or 101"));
// var result = 201 - userInput;
// console.log(result);


// var password = "a23ali123456";

// if (password.charAt(0) > 0) {
//     console.log('Password should not start with 0');
// }

// else if (password.length < 8) {
//     console.log('Password length not enougth!');
// }

// else {
//     console.log(password);
// };

// var val = 16.76512;
// console.log(val.toFixed(3));

// var date = 0;
// // console.log(date);

// if ((date <= 15) && (date > 0)) {
//     console.log('Starting days of the month!');
// }

// else if ((date >= 16) && (date <= 31)) {
//     console.log('Last days of the month!');
// }

// else {
//     console.log('Invalid Date!');
// };



// var hours = new Date();
// hours.setHours(12);
// console.log(hours);

// function extractHours(date, hour) {
//     // console.log("Date: ", date);
//     // console.log("Hour: ", hour);

//     date.setHours(date.getHours() - hour);
//     console.log(date);
// };

// var rightNow = new Date();
// var myHour = 1;
// extractHours(rightNow, myHour);

// document.write("Hello JS");

// console.log(document);

// var h1Tag = document.getElementById("header");
// console.log(h1Tag);

// function changeContent() {
//     h1Tag.style.color = "red";
//     h1Tag.innerHTML = "Welcome to JS!";
// };

var allH1El = document.getElementsByTagName("h1");
// console.log(allH1El);

for (var i = 0; i < allH1El.length; i++) {
    // console.log(allH1El[i]);
    allH1El[i].style.color = "blue";
};