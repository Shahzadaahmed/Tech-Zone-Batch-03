// var heading1El = document.getElementById("heading_1");
// console.log(heading1El);

// var hasAtt = heading1El.hasAttribute("title");
// console.log(hasAtt);

// var getAtt = heading1El.getAttribute("title");
// console.log(getAtt);

// heading1El.setAttribute("class", "header-class");

// var attList = heading1El.attributes;
// console.log(attList);
// console.log(attList.length);

// var divEl = document.getElementById("container");
// var child_2 = divEl.children[1];
// divEl.removeChild(child_2);
// console.log(child_2);

// var h1El = document.createElement("h1");
// // console.log(h1El);

// var h1TextVal = document.createTextNode("ahmed");
// // console.log(h1TextVal);

// h1El.appendChild(h1TextVal);
// console.log(h1El);

// Note: Todo list app...!

var inputEl = document.getElementById("user-input");
var addBtnEl = document.getElementById("add-btn-el");
var listContainer = document.getElementById("list-container");
var targetEl;

// Note: Update item function...!
function updateItem() {
    // console.log(inputEl.value);
    // console.log(targetEl);

    targetEl.previousSibling.previousSibling.nodeValue = inputEl.value;
    addBtnEl.innerHTML = "Add Item";
    addBtnEl.setAttribute("onclick", "addItem()");
    document.getElementById("user-input").value = "";
};

// Note: Edit item function...!
function editItem(el) {
    // console.log(el.previousSibling.previousSibling.nodeValue);

    targetEl = el;
    var previousVal = el.previousSibling.previousSibling.nodeValue;
    inputEl.value = previousVal;
    addBtnEl.innerHTML = "Update Item";
    addBtnEl.setAttribute("onclick", "updateItem()");
};

// Note: Function to delete all items...!
function deleteAll() {
    listContainer.innerHTML = "";
};

// Note: Delete item function...!
function deleteItem(el) {
    // console.log(el.parentNode);

    var targetEl = el.parentNode;
    listContainer.removeChild(targetEl);
};

// Note: Add item function...!
function addItem() {
    var generateLiEl = document.createElement('li');
    var delBtnEl = document.createElement("button");
    var editBtnEl = document.createElement("button");

    var liTextVal = document.createTextNode(inputEl.value);
    var btnTextVal = document.createTextNode("Delete Item");
    var editBtnTextVal = document.createTextNode("Edit Item");

    delBtnEl.setAttribute("onclick", "deleteItem(this)");
    editBtnEl.setAttribute("onclick", "editItem(this)");

    delBtnEl.appendChild(btnTextVal);
    editBtnEl.appendChild(editBtnTextVal);
    generateLiEl.appendChild(liTextVal);
    generateLiEl.appendChild(delBtnEl);
    generateLiEl.appendChild(editBtnEl)
    listContainer.appendChild(generateLiEl);

    document.getElementById("user-input").value = "";
};











// Testing!
// var testingH1 = document.getElementById('testing-header');
// var subHeader = document.getElementById("sub-header");
// console.log(subHeader);