// var employeeData = {
//     employeeName: "Ahmed",
//     title: "Software Engr",
//     company: "10 Pearls"
// };

// employeeData.department = "IT";
// employeeData.employeeName = "M Ahmed";
// delete employeeData.company;

// console.log(employeeData);
// console.log(typeof (employeeData));


// var isPropExist = employeeData.hasOwnProperty("company");
// console.log(isPropExist);

// var isPropExist = "edepartment" in employeeData;
// console.log(isPropExist);




// var employeeData = {
//     employeeName: "Ahmed",
//     title: "Software Engr",
//     company: "10 Pearls",
//     employeeIntro: function () {
//         console.log(this);
//     }
// };

// console.log(employeeData.employeeIntro().company);
// employeeData.employeeIntro();



// var companyDetails = {
//     companyName: "QBS Tech",
//     companyType: "Software Development",
//     companyLocation: "Shahrah e faisal",
//     multipleDepartments: true,
//     employees: ["ahmed", "bilal", "ahsan"],
//     companyIntro: function () {
//         return this.employees[0].toUpperCase() + " works in " + this.companyName;
//     }
// };

// console.log(companyDetails.companyIntro());


// var user = {
//     userName: "Ahmed",
//     email: "ahmed@gmail.com",
//     date: new Date(),
//     amount: "10000"
// };

// console.log(user);
// console.log(typeof (user));

// var dataInStr = JSON.stringify(user);
// console.log(dataInStr);
// console.log(typeof (dataInStr));

// if (dataInStr) {
// localStorage.setItem("UserData", dataInStr);
// };



var fetchData = localStorage.getItem("UserData");
// console.log(fetchData);

if (fetchData) {
    var dataInJSON = JSON.parse(fetchData);
    console.log(dataInJSON);
}

function clearData() {
    localStorage.clear();
};