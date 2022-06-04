//* =====================================================
//*                     FOR LOOP
//* ======================================================

// console.log("******* LOOPS IN ARRAYS ******");

// const islemler = [-3000, 4500, -2200, -6000, 9000];

// const islemlerToplamı = () => {
//   let yatirma = 0;
//   let cekme = 0;
//   for (let i = 0; i < islemler.length; i++) {
//     if (islemler[i] >= 0) {
//       yatirma += islemler[i];
//     } else {
//       cekme += islemler[i];
//     }
//   }
//   return `Toplam yatirma ${yatirma}, toplam cekme ${cekme}  `;
// };

// console.log(islemlerToplamı());

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
// *--------------------------------------------------------

const ogrenciler = [
  "ahmet",
  "mehmet",
  "ismet",
  "saffet",
  "ahmet",
  "nur",
  "can",
  "nur",
  "mehmet",
  "cem",
];

// const ogrenciBul = (isim) => {
//   let sayac = 0;
//   for (let i in ogrenciler) {
//     if (ogrenciler[i] === isim) {
//       sayac++;
//     }
//   }

//   if (sayac === 0) {
//     return `${isim} bulunamadı`;
//   } else {
//     return `${isim}, ${sayac} adet bulundu`;
//   }
// };

// let ogrIsim = prompt("Ogrenci adini giriniz ").toLowerCase();
// console.log(ogrenciBul(ogrIsim));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const ogrenciBulForOf = (isim) => {
  let sayac = 0;
  for (let ogrenci of ogrenciler) {
    ogrenci === isim ? sayac++ : null; // ! Ternary
    // ! Short-circuit yöntemi: && => koşul doğruysa ifadeyi çalıştırır
    // ogrenci === isim && sayac++;
    // ! Short-circuit yöntemi: || => koşul yanlışsa ifadeyi çalıştırır
    // ogrenci === isim || sayac--; //
  }
  //   return !sayac ? `${isim} bulunamadı` : `${isim}, ${sayac} adet bulundu`;
  return sayac ? `${isim}, ${sayac} adet bulundu` : `${isim} bulunamadı`;

  //   if (sayac === 0) {
  //     return `${isim} bulunamadı`;
  //   } else {
  //     return `${isim}, ${sayac} adet bulundu`;
  //   }
};

let name = prompt("Ogrenci adini giriniz ").toLowerCase();
console.log(ogrenciBulForOf(name));
