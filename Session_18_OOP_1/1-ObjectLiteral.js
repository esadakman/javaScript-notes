//* ======================================================
//*                    (OOPS)
//* ======================================================

//* Object Literals

const book = {
  title: "The Brothers Karamazov",
  author: "Dostoyevski",
  year: 1880,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// console.log(book);
// console.log(book.getSummary());
// console.log(book.toString());

const book2 = {
  title: "The Lily of the Valley",
  author: "Honore de Balzac",
  year: 1835,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2);
console.log(book2.getSummary());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)
