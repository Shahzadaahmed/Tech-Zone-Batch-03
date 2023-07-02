let container = document.getElementById("container");

const apiCall = async () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/photos";
    // console.log(apiUrl);

    try {
        let response = await fetch(apiUrl);
        // console.log(response);
        let dataInJson = await response.json();
        // console.log(dataInJson);

        if (dataInJson.length > 0) {
            container.innerHTML = dataInJson.map((item, index) => {
                // console.log(item);
                return (
                    `<div>
                        <h2> ${item.title} </h2>
                        <img src="${item.thumbnailUrl}" alt="API-Image" title="API-Image" height="50px" width="50px" />
                     </div>`
                );
            });
        }
    }

    catch (error) {
        console.log(`Error while api integration: ${error}`);
    };
};

// apiCall();

let dummyData = [
    {
        id: 1,
        userName: "John",
        title: "UI Developer"
    },

    {
        id: 2,
        userName: "Smith",
        title: "Web Developer"
    },

    {
        id: 3,
        userName: "Andy",
        title: "Front End Developer"
    },

    {
        id: 4,
        userName: "George",
        title: "Back End Developer"
    },

    {
        id: 5,
        userName: "Trish",
        title: "Designer"
    },
];

// console.log(dummyData);

// container.innerHTML = dummyData.map((item, index) => {
//     // console.log(item);

//     return (
//         `<h1>
//             <span> ${item.userName}: </span>
//             <br />
//             <span> ${item.title} </span>
//             <hr />
//         </h1>`
//     );
// }).join("");



// function running() {
//     console.log("App loaded successfully!");
// };
// window.onload = running();

console.log("Data Loaded!");

const refreshPage = () => {
    window.location.reload();
};