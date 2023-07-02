// var companyInfo = {
//     companyName: "QBS Tech",
//     employeesLength: "150",
//     multipleDepartments: true,
//     employees: ["ahmed", "bilal", "hammad", "ahmed"],
//     companyIntro: function () {
//         // console.log(this);
//         return this.employees.indexOf('ahmed');
//     }
// };

// console.log(companyInfo.companyIntro());


// Note: Advance JS class topic:

// class Employee {
//     constructor(myName, title) {
//         this.name = myName;
//         this.title = title;
//     }

//     department = "IT";
//     companyLocation = "Shahrah e faisal"
//     // fullName = function () {
//     //     return "Muhammad " + this.name
//     // }
// };

// var addNewEmployee = new Employee("Ahmed", "Software Engr");
// delete addNewEmployee.department;
// console.log(addNewEmployee);
// console.log(typeof (addNewEmployee));

// console.log(addNewEmployee);
// var addAnotherEmployee = new Employee("Bilal", "UI Developer");
// console.log(addAnotherEmployee);

/*
class Company extends Employee {
    // constructor() {
    // super();
    // this.company = companyName;
    // this.category = category;
    // this.employeesLength = empLength;
    // this.name = name;
    // this.title = title;
    // };



    constructor(myName, myTitle, category, companyName) {
        super();
        this.name = myName
        this.title = myTitle;
        this.companyCategory = category;
        this.companyName = companyName;
    };
};
*/

// var addNewCompany = new Company("10 Pearls", "Software Development", "500", "Asad", "Back-End Dev");
// console.log(addNewCompany);

// var addNewCompany = new Company("Hammad", "Director", "Software Development", "10 Pearls");
// console.log(addNewCompany);

var headingEl = document.getElementById("heading");

// function validateHandler() {
//     headingEl.innerHTML = "Please enter your name!";

//     setTimeout(function () {
//         headingEl.innerHTML = "";
//     }, 3000);
// };



// var date = new Date();
// console.log(date)
// headingEl.innerHTML = date.toLocaleTimeString();

setInterval(function () {
    var date = new Date();
    headingEl.innerHTML = date.toLocaleTimeString();
}, 1000);