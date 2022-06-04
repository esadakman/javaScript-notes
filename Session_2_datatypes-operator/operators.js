// Operators

// let x = "Hello";
// let y = "World";

// console.log(x+y);

// z = 3;

// console.log(x + z);

// w = z++;
//  ++ önce yazdırıyor sonra değerini artırıyor ve azaltıyor
// console.log(w);

/* 
// Postfix Increment
let a = 10;
let b = a++; // a=11 b= 10
//Postfix Decrement
let a = 10;
let b = a--; //a=9 b=10
// PrefixIncrement
let a = 10;
let b = ++a; // a=11 b= 11
//Prefix Decrement
let a = 10;
let b = --a; //a=9 b=9 
*/

// let a = 10;

// console.log(a++);
// Süslü parantezde değerimizi yazarsak çıktı olarak değişken + değerimizi alabiliriz
// console.log({a});
// console.log(`a = ` ,a);

// let b = 8;

// console.log(b = a++);

// console.log({a},{b});

// Comprasion Operator

// let x = 5, y =`5`;

// console.log(x == y); // true dönüyor ama string ve number olduğuu için false dönmesi lazım. bu yüzden === kullanmalıyız
// console.log(x === y);

// let z = x != y;

// let zz = x !== y;

// console.log(z);
// console.log(zz);
// console.log(!false);

//  Logic Operators

// && ⇒ and operatoru. Hepsi true ise son true. false var ise ilk false döner
// || ⇒ or operatoru  Hepsi false ise son false, ya da ilk true döner

// console.log(Boolean(null));
// console.log(null == false);
// console.log(null == true);
// console.log(null === null);
// console.log(NaN === NaN);
// let a,b;
// console.log(a == a);

// Nullish 
let d;
let e = `Hello World`;
console.log(d ?? e);
console.log(e ?? d);

let f = null;

console.log(f ?? d);