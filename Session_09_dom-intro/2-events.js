//* ======================================================
//*                        EVENTS
//* ======================================================

console.log('****** EVENTS *******');

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

// ? Method 3 (Only JS)
// ? ------------------


// document.getElementById("header").onmouseover = function(){
    // document.getElementById("header").style.color = "red"
// }

const header = document.getElementById("header");

header.onmouseover = function (){
    header.style.color = "red";
}

header.onmouseout = function (){
    header.style.color = "black";
}

// ? Method 4 (Only JS - ADDEVENTLISTENER)
// ? ------------------
const myImg = document.querySelector("img");

// myImg.addEventListener("mouseover", ()=> {
//     // myImg.style.transform = "translateX(50px)"
//     myImg.style.transform = "scale(1.05)"
// })
// myImg.addEventListener("mouseout", ()=> {
//     myImg.style.transform = "scale(1)"
// })


// *----------------------------
// * Example-2 (Button onclick())
// *----------------------------

const button = document.querySelector('#btn');


// button.addEventListener("click", function (){
//     document.querySelector("body").style.backgroundImage ="linear-gradient(to right, purple, yellow )";
//     button.textContent = "Search";
// })

button.addEventListener("click", function (event){
    console.log(event.target);
    document.querySelector("body").style.backgroundImage ="linear-gradient(to right, purple, yellow )";
    button.textContent = "Search";
})