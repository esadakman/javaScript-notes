// console.log ("************'Loops'************");

/* for(let i=1; i<=10; i++){
console.log("Merhaba"); 
} */

// ! Math.floor() => sürekli aşağıya yuvarlar
// ! Math.ceil() => sürekli yukarıya yuvarlar
// ! Math.round() => değerine göre yuvarlar
// ! Math.trunc() => kesirli sayının tam kısmını alır
/* for (let i=1 ; i<=30 ;i++){
    const randomSayi = Math.trunc(Math.random() * 100) + 1;
    console.log(randomSayi);
}

console.log(`Program bitti`); */

/* // ? 1 den n kadar sayıları toplayan kodu yazınız

const n = prompt("n sayisini giriniz:")

let toplam = 0
for(let i=1 ; i<=n ; i++){
    toplam = toplam + i;
}

console.log(toplam); */

// Örnek: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.3

// console.log("************'WHILE'************");

// let i = 1;
// while (i <= 5) {
//   console.log("Merhaba", i);
//     i++;
// }

// ! while'da i++'yi yazmayı unutmamalıyız

// console.log("Bitti");

// console.log("************'DO WHILE'************");

// let i = 1;

// do {
//     console.log("Merhaba-", i);
//     i++;
// } while (i<=5);

// let not = prompt('Lütfen notunuzu giriniz (0-100):');

// while (not < 0 || not > 100) {
//   alert('Girdiğiniz not 0-100 arasında olmalıdır');
//   not = prompt('Lütfen notunuzu giriniz (0-100):');
// }
// console.log('Girdiğiniz not:', not);

// let not;
// do {
//   not = prompt("Lütfen notunuzu giriniz (0-100)"); // condition dışı girişlerde tekrar giriş ister
//   if (not < 0 || not > 100){
//       alert("Girdiğiniz not 0-100 arasında olmalıdır");
//   }
// } while (not < 0 || not > 100);
// console.log("Girdiğiniz not:", not);

// ?===================ASAL===================
// ! Çözüm-1
// let x = prompt('lütfen bir sayı');
// let sayac = 0
// for(let i =2; i < x; i++){
//   if (x%i == 0) {
//     sayac += 1
//   }
// }
// if (sayac > 0){
//   console.log(`Yazdıgınız sayı ${x} asal degildir`);
// }
// else {
//   console.log(`Yazdıgınız sayı ${x} asaldır`);
// }

// ! Çözüm-2
// let x = prompt('lütfen bir sayı');
// for(let i =2; i < x; i++){
//   if (x%i == 0) {
//     console.log(`Yazdıgınız sayı ${x} asal degildir`);
//   }
//   else{
//     console.log(`Yazdıgınız sayı ${x} asaldır`);
//   }
// }

//? ÖDEV: Klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.
// ! Çözüm-1

// let grade;
// do {
//   grade = prompt("Enter your score");
//   if (grade < 0 || grade > 100) {
//     alert("Please enter a grade between 0-100");
//   } else {
//     console.log(`Your grade is ${grade}`);
//   }
// } while (grade.toLowerCase() !== "q");

// ! Çözüm-2
// const grade = prompt("Please Enter your score:");
// do {
//   grade = prompt("Please Enter your score:");
// } while (grade.toLowerCase() !== "q");

// ? JS Ödev 2: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// ! Çözüm-1
// let x = +prompt("please enter a number:");
// prime = "";
// let counter = 0;
// for (i = 2; i < x; i++) {
//   if (x % i == 0) {
//     counter++;
//   }
// }
// if (counter == 0) {
//   prime = `${x} is a prime number`;
// } else {
//   prime = ` ${x} is not a prime number`;
// }
// console.log(prime);

// JS Ödev 1 , Ödev 2  ve Matthew hocanın tahminOyununa artır yerine eklememizi istediği (xx -- yy)aralık durumu
