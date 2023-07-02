// let inputEl = document.getElementById("user-input");
// let listEl = document.getElementById("ul");

// inputEl.addEventListener("keypress", (e) => {
//     if (e.key == "Enter") {
//         let val = inputEl.value
//         console.log(val);
//         document.getElementById("user-input").value = "";
//         document.getElementById("user-input").focus();

//         let liEl = document.createElement("li");
//         let liText = document.createTextNode(val);
//         liEl.setAttribute( "class" , "li-tag" );

//         liEl.appendChild(liText);
//         listEl.appendChild(liEl);
//     };
// });

// console.log(navigator);


const bidDataHandler = (arr, num) => {
    // console.log(`Array: ${arr}`);
    // console.log(`Number: ${num}`);

    let updatedArr = [];

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);

        if (arr[i] > num) {
            // console.log(arr[i]);
            updatedArr.push(arr[i]);
        };
    };

    console.log(updatedArr);
};

bidDataHandler([2, 4, 6, 8, 10], 3);