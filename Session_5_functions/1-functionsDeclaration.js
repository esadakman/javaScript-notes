// ? console.log("************'Functions'************");

// !---------------------------------------------------
// ! 1. Yöntem : Function Declaration
// !---------------------------------------------------

console.log(`****** FUNC DECLARATION ****** `);

//* örnek1:

//! Declaration
//! Parametre almamış, bir şey döndürmez (void function)

// function yazdır() {
//   console.log("Hello, it's me. ");
// }

// yazdır(); // ! invoke
// yazdır(); // ! invoke

// console.log(typeof yazdır);

//* örnek2: Parametreli Fonksiyon
// *********************************************************************/

// function selamla(name) {
//   console.log(`Hello ${name} `);
// }

// selamla("esad");
// selamla("mark");
// selamla("there");

// ! Bir parametreyi çağırma sırasınad kullanmaz isek onun yerine default parametre atayabiliriz. Örnekte lastname'in deafault değerine "noname" atanmıştır.

// function selamla(name, lastname = "noname") {
//   console.log(`Hello ${name} ${lastname}`);
// }

// selamla("esad", "akman");
// selamla("mark");
// selamla("there");

//* Örnek3: Parametreli, Dönüş değeri

// function yaşhesapla(tarih, ad) {
//   console.log(`My name is ${ad} and i am ${2022 - tarih} years old`);
// }
// yaşhesapla(1996, "esad");

/* function calcAge(date, name) {
  const mesaj = `${name}in yaşı ${2022 - date}dir`;

  return mesaj;
}

const mesaj1 = calcAge(2001, "Elif");
console.log(mesaj1); */

// ! hardcoded
/* function calcAge1(year, name) {
  // const time = new Date().getTime();
  // console.log(time);
  const mesaj = `${name}in yaşı ${new Date().getFullYear() - year}dir`;

  return mesaj;
}

const mesaj2 = calcAge1(2001, "Elif");
console.log(mesaj2);
 */

//* Örnek4: tek çift

// function evenOdd(num) {
//   if (num % 2) {
//     console.log(`Your number ${num} is odd`);
//   } else console.log(`Your number ${num} is even`);
// }

// evenOdd(88);

function tekÇift(number) {
  return number % 2 === 0 ? ` ${number} çifttir` : ` ${number} tektir`;
}

function tekÇiftt(number) {
  return number % 2 ? ` ${number} tektir` : ` ${number} çifttir`;
}

console.log(tekÇiftt(8));
console.log(tekÇift(7));
