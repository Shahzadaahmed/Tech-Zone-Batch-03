// var rightNow = new Date();
// // console.log(rightNow);
// // console.log(typeof rightNow);

// var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// var today = rightNow.getDay();
// // console.log(days[today]);


// var monthArr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
// var month = rightNow.getMonth();
// // console.log(monthArr[month]);


// var currentYear = rightNow.getFullYear();
// // console.log(currentYear);


// var date = rightNow.getDate();
// // console.log(date);


// var hour = rightNow.getHours();
// // console.log(hour);

// var mins = rightNow.getMinutes();
// // console.log(mins);


// var seconds = rightNow.getSeconds();
// // console.log(seconds);

// var time = hour + ":" + mins + ":" + seconds;
// // console.log(time);

// var dob = "25 December 2022";
// // console.log(new Date(dob));


// var time = rightNow.getTime();
// // console.log(time);


// var currentDate = rightNow.toLocaleDateString();
// // console.log(currentDate);
// // console.log(typeof currentDate);


// var currentTime = rightNow.toLocaleTimeString();
// // console.log(currentTime);
// // console.log(typeof currentTime);



// // Program...!
// var myYear = 1996;
// var currYear = new Date().getFullYear();
// var yearsOld = currYear - myYear;
// console.log(yearsOld);

// Note: many hours left in 16 dec 2022...!
var currentDate = new Date();
// console.log(currentDate);

var futureDate = new Date("16 December 2022 00:00:00");
// console.log(futureDate);

// Converting both dates in miliseconds...!
var currentDateInMS = currentDate.getTime();
// console.log(currentDateInMS);

var futureDateInMS = futureDate.getTime();
// console.log(futureDateInMS);

var calculateTimeInMS = futureDateInMS - currentDateInMS;
// console.log(calculateTimeInMS);


// Note: Days formula...!
var hoursFormula = calculateTimeInMS / (1000 * 60 * 60);
hoursFormula = Math.ceil(hoursFormula);
console.log(hoursFormula);