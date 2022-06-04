console.log("************'Function Expression'************");
// !==========================================
// ? **********'Function Expression'**********
// !==========================================

//* örnek1: Parametreli , Dönüş Değerli
// *********************************************************/

// console.log(tekÇift(7));
// ! function expression yöntemiyle bir func tanımlandığında önce tanımlamanın yapılması gerekir yoksa Uncaught ReferenceError  hatası alınır

// const tekCift = function (number) {
//   return number % 2 === 0 ? `${number} çifttir` : `${number} tekdir`;
// };

// console.log(tekCift(2));

//* örnek2: 3 sayının en büyüğü
// *********************************************************/

/* const greatest = function (x, y, z = -Number.MAX_VALUE) {
  let great;
  if (x >= y && x >= z) {
    great = x;
  } else if (y >= x && y >= z) {
    great = y;
  } else if (z >= x && z >= y) {
    great = z;
  } else {
    great = z;
  }
  return great;
};

console.log(`Greatest number is:`, greatest(3, 3, 3));
console.log(`Greatest number is:`, greatest(5, 3, 9));
console.log(`Greatest number is:`, greatest(2, 8, 2));
console.log(`Greatest number is:`, greatest(-2, -3));
 */

//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function (islem, s1, s2) {
  let sonuc;

  if (islem == "+") {
    sonuc = topla(s1, s2);
  } else if (islem == "-") {
    sonuc = cikar(s1, s2);
  } else if (islem == "*") {
    sonuc = carp(s1, s2);
  } else if (islem == "/") {
    sonuc = bol(s1, s2);
  }
  return sonuc;
};

const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};

console.log(hesapla("+", 3, 5));
console.log(hesapla("-", 3, 5));
