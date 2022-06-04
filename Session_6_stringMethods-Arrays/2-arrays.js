// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanımlama
//* ---------------------------------------------------------

// ! 1:yöntem (Array literal) - Tercih edilen yöntem
const isimler = ["ahmet", "mehmet", "ismet", "saffet"];
console.log(isimler);
console.log(isimler.length);

// ! 2. Yöntem (Object Constructor)
const diller = new Array("Python", "Java", "C++", "JS", "Go");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

const sayilar = new Array(10);
//! 10 elemanlık boş bir array oluşturdu
console.log(sayilar);

//* Diziden Veri Okuma-Yazma
//* ---------------------------------------------------------

// ! Okuma
const java = diller[1];
console.log(java);

//!Diziye yazma
isimler[2] = "Canan";
console.log(isimler);

// ! Hata,const keyword'u ile tanılanmış bir diziye tamaıyla bir atama yapılmaz

// isimler = [`Can`, `Canan`, `Cavidan`];
// console.log(isimler);
// ! Uncaught TypeError: Assignment to constant variable.

const yaslar = [22, 18, 15];
const kisiler = ["Ahmet", "Yılmaz", 2022, 2022 - 1970, true, 5.6, yaslar];
console.log(kisiler);

console.log(kisiler[6][1]);

const sonYas = kisiler[6][2]++;
console.log(sonYas, kisiler);

//? ===========================================================
//?  DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
//? ===========================================================

const cars = [`BMW`, `Porsche`, `Mercedes`, `Fiat`];

// * pop() son elemanı siler ve sildiği elemanı döndürüyor
const deleted = cars.pop();
console.log(cars, "silinen", deleted);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayısını donduruyor
const n = cars.push("Volvo");
console.log(cars, n);

// * unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini döndürür
const boyut = cars.unshift(`Audi`);
console.log(boyut, cars);

//* dizinin 0. index elemanını siler ve silinen elemani dondurur.

const silinen = cars.shift();
console.log(silinen, cars);

//* reverse() Dizinin tamamini ters sıraya çevirir
console.log(cars.reverse());
console.log(cars);

//* sort() Diziyi alfabetik olarak sıralar
console.log(cars.sort());

const rakamlar = [3, 5, 1, 10, 55];
console.log(rakamlar); //! alfabetik sıraladığı için rakamlarda doğru sonuç çıkmayabilir

//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu dizini her bir elemanına uygular. Bu sayede küçük sayılar ile büyük sayıları yer değiştirerek sıralama işlemini gerçekleştirir

rakamlar.sort((a, b) => a - b);
console.log(rakamlar);

cars.splice(1, 0, "Vosvos");
console.log(cars); // ! 1. indis'e Vosvos değeri eklenir (elman sayısı bir artar)

cars.splice(2, 1, "Anadol");
console.log(cars); // ! 2. indiste kini Anadol olarak değiştirir ( eleman sayısı değişmez)

cars.splice(2, 2, "Seat");
console.log(cars); // ! 2. indisten itibaren 2 indisi silere Seat olarak değiştirir ( eleman sayısı azalır)


//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, '2', 'üc', 2, 'bes', 5];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes('5')); //false
console.log(sayilar1.includes(5)); //true

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

//* ilk eslesen indeksi dondurur.
const ikiIndeks = sayilar1.indexOf(2);
console.log("2'nin son indeksi:", sayilar1.lastIndexOf(2)); //5
console.log("2'nin son ilk indeksi:", ikiIndeks); //2

//* Ornek
//*-----------------------------------------------------------
const arananString = prompt('Aranan sayiyi girinz:');
const arananNumber = Number(arananString);

let bulunduMu = false;
if (sayilar1.includes(arananString)) {
  console.log("Arananın String'in indeksi:", sayilar1.indexOf(arananString));
  bulunduMu = true;
}
if (sayilar1.includes(arananNumber)) {
  console.log('Arananın Sayinin indeksi:', sayilar1.indexOf(arananNumber));
  bulunduMu = true;
}

if (!bulunduMu) {
  console.log('Aranan bulunamamıştır');
}

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.

// const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];

const stringSayilar1 = sayilar1.join(' ');
console.log(stringSayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

const stringSayilar2 = sayilar1.toString();
console.log(stringSayilar2);

//* slice()
//*-----------------------------------------------------------

const arabalar = ['bmw', 'mercedes', 'audi', 'ferrari', 'anadol'];
const sliced1 = arabalar.slice(2);
console.log(sliced1);

const sliced2 = arabalar.slice(1, 3); // start: inclusive, stop :exclusive
console.log(sliced2);

//* concat()
//*-----------------------------------------------------------
const yazilar = ['a', 'b', 'ad', 'soyad', 'yas'];
const numbersArray = [3, 5, 1, 4, 7];
const birlesik = yazilar.concat(
  true,
  numbersArray,
  false,
  ['a', 'b', 'c'],
  [['x', 'y', 'z']] //nested
);
console.log(birlesik);