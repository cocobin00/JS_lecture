// Array
const fruit1 = "apple";
const fruit2 = "banana";
const fruit3 = "kiwi";
const fruits = [fruit1, fruit2, fruit3];
console.log(fruits); // [ 'apple', 'banana', 'kiwi' ]
console.log(fruits[2]); // kiwi
console.log(fruits.length); // 3
fruits[2] = "mango";
console.log(fruits); // [ 'apple', 'banana', 'mango' ]

const differentTypeArray = ["hello", 23, true, null];
console.log(differentTypeArray); // [ 'hello', 23, true, null ]

const birthYearArray = [1990, 1993, 1998];
const agesArray = birthYearArray.map((birthYearValue) => 2023 - birthYearValue);
console.log(agesArray); // [ 33, 30, 25 ]

// methods
const cars = ["hyundai", "bmw", "audi"];

// add element
cars.push("toyota"); // 맨 뒤
cars.unshift("kia"); // 맨 앞
console.log(cars); // [ 'kia', 'hyundai', 'bmw', 'audi', 'toyota' ]

// remove element
cars.pop(); // 맨 뒤
cars.shift(); // 맨 앞
console.log(cars); // [ 'hyundai', 'bmw', 'audi' ]

// get Index
console.log(cars.indexOf("bmw")); // 1  // 동일한 값 있을 때 가장 앞에 있는 인덱스로 출력
console.log(cars.lastIndexOf("bmw")); // 동일한 값 있을 때 맨 뒤의 인덱스로 출력

// is contain
console.log(cars.includes("audi")); // true
console.log(cars.includes("volvo")); // false

// 여러 개의 배열 연결
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [ 1, 2, 3, 4, 5, 6 ]

// Objects, key-value pair
const profile = {
  firstName: "Hyobin",
  lastName: "Park",
  age: 20,
  job: "developer",
  isMarried: false,
};

console.log(profile);
/* {
  firstName: 'Hyobin',
  lastName: 'Park',
  age: 20,
  job: 'developer',
  isMarried: false
} */

console.log(profile.firstName); // Hyobin
console.log(profile["firstName"]); // Hyobin

profile.age = 25;
console.log(profile.age); // 25

// 여러 개의 오브젝트 연결
const obj1 = {
  name: "Cobin",
  age: 20,
};

const obj2 = {
  address: "gyeonggi-do",
  job: "developer",
};

const combinedObject = {
  ...obj1,
  ...obj2,
};

console.log(combinedObject);

// Object Value
console.log(Object.keys(combinedObject).map((key) => combinedObject[key]));
// [ 'Cobin', 20, 'gyeonggi-do', 'developer' ]
