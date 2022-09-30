//* =====================================================
//*                     DOM SELECTORS
//* ======================================================

console.log("***** SELECTORS *****");

//* =====================================================
//*                     GETELEMENTBYID()
//* ======================================================

// * Example-1 (Paragraph Style)
// *----------------------------

const header = document.getElementById("header");

console.log(header);
header.style.color = "red";

// * Example-2 (Button Style)
// *----------------------------

const button = document.getElementById("btn");
btn.style.backgroundColor = "black";
btn.style.color = "yellow";
btn.style.fontSize = "2rem";
btn.style.padding = "0 2rem ";

//* =====================================================
//*                     GETELEMENTBYTAGNAME()
//* ======================================================

const img = document.getElementsByTagName("img");
console.log(img);
img[0].style.width = "250px";
img[0].style.border = "solid";
img[0].style.borderColor = "red";
img[0].style.transform = "rotate(-5deg)";

//* =====================================================
//*                     GETELEMENTBYCLASSNAME()
//* ======================================================

// * Example-4
// *----------------------------

const par = document.getElementsByClassName("par");
// par[0].textContent = "DOM Manipülasyonu";
// par[0].innerText = "DOM Manipülasyonu";
par[0].innerHTML = `<a href="https://www.clarusway.com">Clarus</a> `;
par[0].innerHTML += `<a href="https://www.clarusway.com">Clarus</a>`;

//* =====================================================
//*                     QUERYSELECTOR()
//* ======================================================

document.querySelector('title').textContent = 'JS09-DOM ❤️';

const myPars = document.querySelectorAll('p');
console.log(myPars); //? NodeList
myPars.forEach((p) => console.log(p.innerText));

const myPars1 = document.getElementsByClassName('par');
console.log(myPars); //? HTML Collection

//! HTML Collection'dan Array' e çevirme yöntemleri
//? 1.Array.from()
const myParsArray = Array.from(myPars1); //? Array.from ile diziye çevirilir.
console.log(myParsArray);
myParsArray.forEach((p) => console.log(p.innerText));

//? 2.Spread/rest
[...myPars1].forEach((p) => console.log(p.innerText));

//! querySelector ile CSS vari seçim yapmak mümkündür.
//! CSS Selector'lerin hepsini kullanmak mümkündr.
console.log(document.querySelector('section p a'));
