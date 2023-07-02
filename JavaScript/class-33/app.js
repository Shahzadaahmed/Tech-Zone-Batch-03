// const dataHandler = (name1, name2, ...restParams) => {
//     console.log(name1, name2);
//     console.log(restParams);
// };

// dataHandler("ahmed", "bilal", "c", "d", "e", "f");

// const dataHandler = (...remainingElements) => {
//     console.log(remainingElements);
// };

// dataHandler("ahmed", "bilal", "c", "d", "e", "f");


// let arr1 = ["a", "b", "c"];
// let arr2 = ["x", "y", "x"];

// for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
// };

// console.log(arr1);

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let myName = "ahmed";
// let company = "10 Pearls";
// let data = {
//     qualification: "BS.CS",
//     single: true
// };

// let newData = {
//     name: myName,
//     company: company,
//     ...data
// }

// console.log(newData);

let infoData = [
    {
        id: 1,
        user: "ahmed",
        city: "Karachi"
    },

    {
        id: 2,
        user: "bilal",
        city: "Islamabad"
    },

    {
        id: 3,
        user: "Ali",
        city: "Lahore"
    },

    {
        id: 4,
        user: "Mehran",
        city: "Karachi"
    },

    {
        id: 5,
        user: "Shahzaib",
        city: "Islamabad"
    },

    {
        id: 6,
        user: "Noman",
        city: "Karachi"
    }
];

console.log(infoData);

// let filterData = infoData.filter((item) => {
//     // console.log(item);
//     return item.city.toLowerCase() == "abc";
// });

// console.log(filterData);


let list = document.getElementById("list");

const fetchCity = (cityName) => {
    console.log(cityName);

    let filterArr = [];
    let arr = [...infoData];
    // console.log(arr);

    arr.filter((item) => {
        // console.log(item);
        // return item.city.toLowerCase == "karachi";

        if (item.city.toLowerCase() == cityName.toLowerCase()) {
            filterArr.push(item);
        }
    });
    console.log(filterArr);

    list.innerHTML = cityName == 'home' ? infoData : filterArr
        .map((item, index) => {
            return (
                `
            <li> ${item.city} </li>
            `
            );
        }).join("");





    // let filterData = [...infoData].filter((item) => {
    //     // console.log(item);
    //     return item.city.toLowerCase == cityName.toLowerCase();
    // });
    // console.log(filterData);
};

list.innerHTML = infoData.map((item, index) => {
    return (
        `
        <li> ${item.city} </li>
        `
    );
}).join("");