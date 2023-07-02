// let slides = document.getElementsByClassName("slider-images");
// // console.log(slides);
// let startingPoint = 1;

// const showSlider = (count) => {
//     // console.log(count);

//     if (count > slides.length) {
//         count = 1;
//     }

//     else if (count < 1) {
//         count = slides.length;
//     };

//     for (let i = 0; i < slides.length; i++) {
//         // console.log(slides[i]);
//         slides[i].style.display = "none";
//     };

//     slides[count - 1].style.display = "block";
// };

// showSlider(startingPoint);

// const playSlider = () => {
//     startingPoint++;
//     showSlider(startingPoint);
// };

// setInterval(playSlider, 2000);


// let btnEl = document.getElementById("btn");
// console.log(btnEl);

// btnEl.addEventListener("click", () => {
//     console.log('Working!');
// });

// window.addEventListener("load", () => {
//     console.log('Body loaded!')
// });



let inputEl = document.getElementById("input-el");
let emailEl = document.getElementById("email");

// inputEl.addEventListener("keypress", () => {
//     console.log("You press enter key");
//     emailEl.focus();
// });


inputEl.addEventListener("keypress", (e) => {
    // console.log(e);

    if (e.key == "F2") {
        console.log('f2 key pressed');
    }

    else {
        console.log('Any other key press!');
    }
});