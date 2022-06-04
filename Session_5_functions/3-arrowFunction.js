// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

//* Örnek1:
//*************************************************************/

//!  1.YÖNTEM:

// function topla(a, b) {
//   return a + b;
// }

//!  2.YÖNTEM:

// const topla = function (a, b) {
//   return a + b;
// };

//!  3.YÖNTEM:

// const topla = (a, b) => a + b;
// const usAl = (t, u) => t ** u;
// ! arrow fonksiyonlarda eğer tek bir ifade kullanılırsa süslü paranteze ihtiyaç olmaz ve dolayısıyla return gerekmez, aksi takdirde gerekir

// const usAll = (t, u) => {
//   return t ** u;
// };

// console.log(`Sonuç:`, topla(5, 3));
// console.log(`Sonuç:`, usAl(5, 3));
// console.log(`Sonuç:`, usAll(5, 4));

// ! ok fonksiyonunda birden fazla ifade ise fonksiyonda süslü parantez kullanmalıyız. Ve gerekiyorsa returm kullanmalıyız

// const menu = (times) => {
//   console.log("============================");
//   console.log(" JavaScript çok kolaymış ");
//   console.log("============================");
//   return times * 2;
// };

// console.log(menu(2));

//* Örnek2:
//*************************************************************/

// const tekMi = (n) => (n % 2 === 1 ? `Tektir` : `Cifttir`);
// const tekMi = (n) => (n % 2 ? `Tektir` : `Cifttir`);

// console.log(tekMi(3));

const r = prompt(`yarıçapı giriniz`);
const h = prompt(`yüksekliği giriniz`);

const hacimHesapla = (r, h) => Math.PI * r * r * h;

// ! trunc tam kısmı alır, toFixed virgülden sonra istenilen basamak kadar yazdırır aynı zamanda stringe çevirir
console.log(`Silindirin hacmi :`, Math.trunc(hacimHesapla(r, h)));
console.log(`Silindirin hacmi :`, hacimHesapla(r, h).toFixed(1));
