// var userInfo = {
//     employeeName: "Ahmed",
//     company: "QBS Tech"
// };

// var arr = ["a", "b", "c"];
// console.log(arr);

// var covenrtArrToStr = JSON.stringify(arr);
// console.log(covenrtArrToStr);

// console.log(userInfo);

// var dataInStr = JSON.stringify(userInfo);
// console.log(dataInStr);
// console.log(typeof (dataInStr));

// localStorage.setItem("User", dataInStr);
// localStorage.setItem("List" , covenrtArrToStr);

// Note: Getting data from LS...!

// var fetchUser = localStorage.getItem("User");
// console.log(fetchUser);

// var dataInJSON = JSON.parse(fetchUser);
// console.log(dataInJSON);

// if (dataInJSON) { document.write(dataInJSON.employeeName) };

// function clearData() {
//     localStorage.clear();
// };
// Key: UsersList

function signUpUser() {
    if (localStorage.getItem("UsersList") != null) {
        console.log('Yes');
    }

    else {
        var arr = [];
        var arrToStr = JSON.stringify(arr);
        localStorage.setItem("UsersList", arrToStr);
    };
};