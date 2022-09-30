// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("******* STRING METHODS ********");

// ! Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir
const str1 = `Clarusway`;
const str2 = `Hello`;
const str3 = `World`;

console.log(typeof str1);
const str4 = str1 + str2; // string concat işlemi
console.log(str4, typeof str4);

console.log(str4.concat(str3));

// ! Non-primitive versiyon
const str5 = new String("Non-Primitive String");
console.log(str5, typeof str5); // bunun type-of'u object çıkıyor

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//* ----------------------------------------------------------
//*  concat() - immutable
//* ----------------------------------------------------------

const s1 = `hello`;
const s2 = ` world`;
const s3 = s1.concat(s2);
console.log(s3);

console.log(s3.concat(" Clarusway", s2));

console.log(s3, s2);

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------

console.log(s3.charAt()); // ! prantex içine değer girilmediği için 0. char'ı getirdi bize
console.log(s3.charAt(4)); //! o
console.log(s3.charAt(s3.length - 1)); // ! son indexi getirmek için

//* ----------------------------------------------------------
//* includes()
//* ----------------------------------------------------------

const word = "To be or not to be, that is the question ";

console.log(word.includes("to be")); // ! true
console.log(word.includes("That")); // ! false (case sensitive'dir)
console.log(word.includes(``)); // ! aslında derleyiciler her karakterden sora null değer basıyor, o yüzden true verdi
console.log(word.includes("to be", 14)); // ! False 14. indexen sonra arar kelimeyi
console.log(word.includes("to be", 13)); // ! True 13. indexen sonra arar kelimeyi

//* ----------------------------------------------------------
//* indexOf() , lastIndexOf()
//* ----------------------------------------------------------

const tobeIndex = word.indexOf(`or`); // ! index değeri gönderir cevap olarak
console.log(tobeIndex);
console.log(word.indexOf("be")); // ! ilk gördüğü indexin değerini gönderir
console.log(word.lastIndexOf("be")); // ! son gördüğü indexin değerini gönderir
console.log(word.lastIndexOf("BE")); // ! negatifse yok anlamına gelir

//* ----------------------------------------------------------
//* startsWith() , endsWith()
//* ----------------------------------------------------------

const word2 = `Salına salına sinsice :!`;

console.log(word2.startsWith("sa")); // !false
console.log(word2.startsWith("sa", 7)); // ! true 7'den sonra arar
console.log(word2.endsWith("!")); // !

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith)
//* ----------------------------------------------------------

// const oku = `Oku baban gibi, saf olma`;
// console.log(oku.replace("saf", "akilli")); // ! parantez içine ilk değiştireceğmiz değeri sonra değiştirmek istediğimiz değeri giriyoruz
// console.log(oku);

let oku = "Oku Baban gibi, saf olma";
console.log(oku.replace("saf olma", "akıllı ol"));
oku = oku.replace("saf olma", "akilli ol");
console.log(oku);

// ! detaylı değiştirme için regex kullanılabilir

console.log(oku.replace(/AKILLI/i, "Zeki")); // ! büyük harf olduğu için normalde anlamaz ama /i yazarak case sensitivliği kapatabiliriz

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------

const veysel = "Uzun ince bir yoldayım yürüyorum gündüz gece..";
const sliced = veysel.slice(33);
console.log(sliced, typeof sliced);

console.log(veysel.slice(17, 30));
console.log(veysel.slice(-10)); // ! slice'da - değeri geçerlidir
console.log(veysel.slice(-26, -9)); // ! -'de de aralık verilebilir
console.log(veysel.substring(17, 30)); // !
console.log(veysel.substring(-26, -9)); // ! substring 'de negatif index kullanılmıyor

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------

const tarkan = `gel gündüzle gece olalım`;
console.log(tarkan, typeof tarkan);
const splited = tarkan.split(" "); // ! boşluklara göre ayırdı ve arraya çevirdi
console.log(splited, typeof splited);

const gece = splited[2];
console.log(gece);

const chars = tarkan.split(``);
console.log(chars); // ! null karakterine göre harfleri ayırarak bir char dizisi oluşturdu

const copyTarkan = tarkan.split();
console.log(copyTarkan, typeof copyTarkan); // ! String'i arraya çevirdi

//* ÖDEV
//* ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE
// * İlk linkin en sonundaki karakterleri alıp,  ikinci linkin sonuna ekliyeceğiz

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------

const ramazan = `       Hoş geldin ya şehri Ramazan         `; // ! aradaki boşlukları kaldırmak için
console.log(ramazan.length);
console.log(ramazan.trim());
console.log(ramazan.trim().length);
