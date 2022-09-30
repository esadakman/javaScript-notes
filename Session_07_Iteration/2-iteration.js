//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log("****** ITERATION **********");
//*Dizideki herbir fiyati konsola bastiriniz.

// const fiyatlar = [100, 250, 50, 89];

//! -------------- ÖDEV -------------------
//! fiyatlar dizisinde her bir fiyata %10 zam yapalım.

// * Dizideli her bir fiyati konsola bastiriniz.

// fiyatlar.forEach(yazdir);

// function yazdir(v) {
//   console.log(v);
// }

// console.log("******************************");

// ! arrow function kullanılarak çözüm
// fiyatlar.forEach((value) => console.log(value));

// * Fiyatların toplamını yazdırın

// let toplam = 0;
// fiyatlar.forEach((fiyat) => (toplam += fiyat));
// console.log(`toplam ${toplam}`);

// ! NOT: forEach metodu void bir metodtur
// ! (Yani değer döndürmez, return yok)

// console.log(fiyatlar.forEach(fiyat) => (toplam += fiyat)); // ! undefined

//  *------------------------ Örnek -------------------------

// let toplam1 = 0;

// fiyatlar.forEach((deger, indis, dizi) => {
//   toplam1 += deger;
//   console.log(`${indis}.iterasyon toplamı:${toplam1}`);
//   dizi[indis] = deger + 10;
// });

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

// console.log(isimler);
// console.log(isimler.map((isim) => isim.toLocaleUpperCase()));

// const kucukIsimler = isimler.map((isim) => isim.toLocaleLowerCase());
// console.log(kucukIsimler);

// * -----------------------------ÖRNEK_______________

// const buyukIsimler = isimler.map((isim, i, dizi) => {
//   dizi[i] = isim.toLocaleLowerCase(); // ! Orjinal diziyi değiştirdik
//   return isim.toLocaleUpperCase();
// });

// console.log(buyukIsimler);

// ! tüm isimleri büyük harfe çevirip konsolda yazdırınız
// isimler
//   .map((isim) => isim.toLocaleUpperCase())
//   .forEach((name) => console.log(name));

// =======================================================
//                     FILTER METHOD
// *=======================================================

console.log("**************FILTER****************");

// ! Ahmetleri seçip büyük harfe çevirdik
// isimler
//   .filter((x) => x === "ahmet")
//   .map((x) => x.toLocaleUpperCase())
//   .forEach((x) => console.log(x));

// * fiyatlar arrayinde fiyatı 250 TL den az olnaları ayri bir diziye saklayalım

// const kucuk250 = fiyatlar.filter((f) => f < 250);
// console.log(kucuk250);
