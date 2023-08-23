// let (ES6), block scope
let age = 30;
age = 31;
console.log(age);

let defaultAge;
console.log(defaultAge);
defaultAge = 20;
console.log(defaultAge);

// const (ES6)
const birthYear = 1990;

// const는 초깃값을 반드시 할당해야함
// const defaultBirthYear;

// var (ES5), function scope
var address = "Seoul";
address = "Busan";
