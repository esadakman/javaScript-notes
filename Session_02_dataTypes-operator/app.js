// let a ;
// console.log(a);
// console.log(b);
// console.log("Hello");

// console.log(a);
// var a = 3;
// var aa = 3;
// console.log(a);

// console.log(b);
// let b = 4;  // değişkenlerimizi baştan belirlemeliyiz, let de undefined veriyor sonuç. Let'le değer verince yine de error veriyor
// undefined bir error değildir
// console.log(b);

// let c = "2";
// let d = 2;

// console.log(typeof c);
// console.log(typeof d);

// let e = prompt("enter something");
// let e = +prompt("enter something"); // başına enter gelince type of'umuz sayı girince number olur

// console.log(typeof e);

//  Null
//  Daha sonra kullanacağımız değere null atayabiliriz
//  Null'un type ofu object çıkar(bug)

// let f = null;
// console.log(typeof f);

//  Number

// let g = 3.15;
// let h = 1_000_000;
// okunulabilirliği artırmak üzere "_" kullanabiliriz


// console.log(g);
// console.log(h);

// console.log(typeof g);
// console.log(typeof h);

// let i = 999_999_999_999_999;
// console.log(i);
// 15 digitten sonra yanlış çıktı verebiliyor javascript
// let j = 999_999_999_999_999_123;
// console.log(j);



// let k = +prompt("bir sayı giriniz :")

// console.log(typeof k, k);

// console.log(isNaN (k));

// Bir NaN'ı tespit etmek için isNaN kullanırız


// Number girene kadar soruyor
// let x; 

// do {
//     x = prompt("Enter a Number :")
// } while (isNaN(x));

// console.log(x * x);


// console.log(015+ 025);
// console.log(017 + 025);

// let l = 0.1 + 0.2;
// console.log(l);
// toFixed sayesinde sayımız stringe döndü başına +"+" koyarsak yeniden sayı olur 
// console.log(l.toFixed(2));
// console.log(+l.toFixed(2));

// String

// let m = `Hello World`
// let n = `Merhaba Dünya`
// let o = `Merhaba JS`

// console.log(typeof m);
// console.log(typeof n);
// console.log(typeof o);

// let p = `Merhaba ${1+2} `;
// console.log(p);

// let userName = `Mark`;

// console.log(`Hi ${userName}`); 

// const myCar = {
//     make: 'Ford',
//     model: 'mustang',
//     year: 1965,
//     color: 'Black'
//     };

// console.log(myCar);

// myCar.color = `Red`;

// console.log(myCar);
// obje'ye yeni değer girmek için;
// myCar.sunRoof = true;

// console.log(myCar);

// myCar.age = function(current) {
//     console.log(current - this.year);
// }
// console.log(myCar);

// myCar.age(2022);
// Objeden değer silmek için
// delete myCar.sunRoof;

// console.log(myCar);

// Operators

