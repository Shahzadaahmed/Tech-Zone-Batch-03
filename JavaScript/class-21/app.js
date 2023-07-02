var employeeData = {
    employeeName: "Ahmed",
    employeeTitle: "Software Engr",
    company: "10 Pearls",
    email: "ahmed@gmail.com",
    isPresentToday: function () { console.log('Yes!') }
};

employeeData.employeeName = "M Ahmed";
employeeData.carDetails = {
    carName: "Fx",
    hasCompanyCar: true
};
// employeeData.isPresentToday = function () { console.log("Yes!") };
// employeeData.isPresentToday();
// console.log(employeeData.isPresentToday());
// console.log(typeof (employeeData));

delete employeeData.email;

employeeData.employeeArr = ["John", "Alex", "Trish"];
// console.log(employeeData);

if (!employeeData.hasOwnProperty("employeeArr")) {
    if (employeeData.employeeArr.length > 0) {
        for (var i = 0; i < employeeData.employeeArr.length; i++) {
            console.log(employeeData.employeeArr[i]);
        };
    }
}

// var propExist = employeeData.hasOwnProperty("a");

// var propExist = "employeeTitle" in employeeData;
// console.log(propExist);