var firstNameEl = document.getElementById("firstName");
var lastNameEl = document.getElementById("lastName");
var titleEl = document.getElementById("title");
var emailEl = document.getElementById("email");
var cityEl = document.getElementById("city");

var showFirstName = document.getElementById("data1");
var showLastName = document.getElementById("data2");
var showTitle = document.getElementById("data3");
var showEmail = document.getElementById("data4");
var showCity = document.getElementById("data5");

function clearAll() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("title").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
};

function submitForm() {
    if (!firstNameEl.value || !lastNameEl.value || !titleEl.value || !emailEl.value || !cityEl.value) {
        alert("All fields are required!");
    }

    else {
        showFirstName.innerHTML = firstNameEl.value;
        showLastName.innerHTML = lastNameEl.value;
        showTitle.innerHTML = titleEl.value;
        showEmail.innerHTML = emailEl.value;
        showCity.innerHTML = cityEl.value;

        clearAll();
    };
};