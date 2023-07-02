// var allH1El = document.getElementsByTagName("h1");
// console.log(allH1El);

// for ( var i = 0; i < allH1El.length; i++ ) {
//     console.log(allH1El[i]);
// };

// var specificEls = document.getElementsByClassName("header");
// console.log(specificEls[2].innerHTML); 

// for ( var i = 0; i < specificEls.length; i++ ) {
//     // console.log(specificEls[i]);
//     specificEls[i].style.color = "red";
// };

// console.log(document.childNodes);
var childs = document.childNodes;
var divEl = document.getElementById("container");

var divChilds = divEl.childNodes
// console.log(divChilds);

// for ( var i = 0; i < childs.length; i++ ) {
//     console.log(childs[i]);
// };

for (var i = 0; i < divChilds.length; i++) {
    console.log(divChilds[i]);
};