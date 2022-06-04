// ! if statement example
// check if the n1 is positive

// const n1 = +prompt(`Enter a number:`);
// console.log(n1, typeof n1);

//     if (n1 > 0) {
//         console.log(`${n1} is positive`);
//     } else {
//         console.log(`${n1} is either negative or 0`);
//     }

/* const n1 = +prompt(`Enter a number:`);
console.log(n1, typeof n1);

    if (n1 > 0) {
        console.log(`${n1} is positive`);
    } else if (n1 < 0) {
        console.log(`${n1} is negative.`);
    }
    } else {
        console.log(`The number is  0`);
    } */

// ! example 2 chest size
/* const csize = prompt(`Enter your chest size:`);

if (csize < 34 && csize >= 32){
    console.log(`Your size is XS`);
}else if (csize < 38 && csize >= 35){
    console.log(`Your size is S`);
}
else if (csize < 41 && csize >= 38) {
    console.log(`Your size is M`);
}
else if (csize < 44 && csize >= 41){
    console.log(`Your size is L`);
}
else if (csize < 47 && csize >= 44){
    console.log(`Your size is L`);
}
else if (csize < 50 && csize >= 47){
    console.log(`Your size is L`);
}else{
    console.log(`Wrong size`);
}
 */

// ! example 2three number comparasion

// const n1 = prompt("Enter the first number:")
// const n2 = prompt("Enter the second number:")
// const n3 = prompt("Enter the third number:")

// if (n1 > n2 && n1 > n3){
//     console.log(`n1 is the greatest among n2 and n3`);
//     console.log(`${n1} is the greatest among ${n2} and ${n3}`);
// } else if (n2 > n1 && n2 > n3){
//     console.log(`n2 is the greatest among n1 and n3`);
//     console.log(`${n2} is the greatest among ${n1} and ${n3}`);
// }else if (n3 > n1 && n3 > n1){
//     console.log(`n3 is the greatest among n1 and n2`);
//     console.log(`${n3} is the greatest among ${n1} and ${n2}`);
// }else{
//     console.log(`All numbers are equal`);
// }

// ! ternary example
// console.log(`------------------\n ternary if statements\n ------------------`);

// const age = 23
// let result = ``
// const isLegal = age >= 18 ? true : false;
// console.log(isLegal);

// if (age >= 18) {
//     result = `You are eligible to vote.`
// } else {
//     result = `You are not eligible to vote.`
// }

// result =
// age >= 18 ? `You are eligible to vote.` : `You are not eligible to vote.`
// console.log(result);

/* const n1 = +prompt(`Enter a number:`);
console.log(n1, typeof n1);

    if (n1 > 0) {
        console.log(`${n1} is positive`);
    } else if (n1 < 0) {
        console.log(`${n1} is negative.`);
    }
    } else {
        console.log(`The number is  0`);
    } */

// __________evde deneme____________
// const n1 = -4;
// const result = n1 >= 0 ? (n1 == 0 ? `zero` : `${n1} is positive`): `${n1} is negative.`;
// console.log(result);

// const n1 = -4;
// const result = n1 >= 0 ? (n1 == 0 ? `zero` : `${n1} is positive`): `${n1} is negative.`;
// age >= 18 ? `You are eligible to vote.` : `You are not eligible to vote.`
// console.log(result);

// evaluate if a human can drive a car or not
// let canDrive = true;
// const hasDriversLicense = true;
// const hasGoodVision = true;

// const isHandicapped = true;
// const usingRegularCar = false;
// // const usingDisabledCar = true;

// let canDrive =  hasDriversLicense && hasGoodVision ? (!isHandicapped && usingRegularCar ? `can drive regular car` : `can  drive disabled car`) : `can not drive`;
// console.log(canDrive);

// result =
//   hasDriversLicense && hasGoodVision
//     ? !isHandicapped
//       ? 'can drive'
//       : !usingRegularCar
//       ? 'can drive'
//       : 'cannot drive'
//     : 'cannot drive';
// console.log(result);

// Switch case
/* console.log(`--------------------------------\n switch case statements\n -------------------------------`); */

// let day = prompt(`What is the day  today`);
// if (day.toLowerCase() == "monday" || day.toLowerCase() ==  "tuesday" || day.toLowerCase() ==  "wednesday" || day.toLowerCase() ==  "thursday" || day.toLowerCase() ==  "friday"){
//     console.log(`${day} is a working day`);
// }
// else if (day.toLowerCase() == "saturday" || day.toLowerCase() ==  "monday") {
//     console.log(`${day} is a weekend`);
// }
// else {
//     console.log(`Invalid day`);
// }

// ! example-5  cw weekly program :exclamation:your turn :technologist:
// pazartesi salı çarşamba perşembe in class
// cuma team work
// cumartesi inclass + workshop
// pazar self study
// default yanlış gün girildi.

// let text;
// let day = prompt(`What is the day  today`);
// switch (day.toLowerCase()) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//         text = `In-Class`
//     case "friday":
//         text = `Teamwork`
//     case "Saturday":
//         text = `In-Class + Workshop`
//     case "Sunday":
//         text = `Self study.`
//     break;
//     default:
//         text = `${day} is not a day`
// }
// console.log(text);

// let text;
// let fruit = prompt(` enter your favorite fruit `)
// // banana, lime, lemon, apple, orange, default

// switch (fruit.toLowerCase()) {
//     case "banana":
//         text = `I like banana!`
//     case "lime":
//     case "lemon":
//     case "orange":
//         text = `I am not a fan of ${fruit}!`
//     case "apple":
//         text = `I like apple!`
//         break;
//     default:
//         text = `I don\'t like fruit!`;
// }
// console.log(text);

/* let dayCount; 
const year =  prompt(`What year is it`);
const month = prompt(`Enter month to check number of days`);
switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        dayCount = `${month} has 31 days`
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        dayCount = `${month} has 30 days`
        break;
    case "february":
        // if (year % 400 === 0 && year % 4 === 0){
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
            dayCount = `${month} has 29 days`
        } else {
            dayCount = `${month} has 28 days`
        }
        break;
    default:
        console.log("invalid month entered");    
}
console.log(dayCount); */

(path = "ad"), "fs", "ds"; //
pathInfo = "";
const pathSelected = prompt(
  `Which path would you like to attend?\nad → aws-devops\nfs → full-stack\nds →data-science`
);
if (pathSelected.toLowerCase() == "ad") {
  pathInfo = `Your path is ${pathSelected}`;
} else if (pathSelected.toLowerCase() == "fs") {
  pathInfo = `Your path is ${pathSelected}`;
}
else if (pathSelected.toLowerCase() == "ds") {
  pathInfo = `Your path is ${pathSelected}`;
} else {
    console.log("Invalid path name. Please enter again");
}
console.log(pathInfo);

