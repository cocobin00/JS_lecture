// 함수 선언식 Function Declaration
console.log(calcAge1(1990)); // 33

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

console.log(calcAge1(1990)); // 33

// 함수 표현식 Function Expression
// console.log(calcAge2(1992)); // 31 // ReferenceError

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

console.log(calcAge2(1992)); // 31

// 화살표 함수 Arrow Function
const calcAge3 = (birthYear) => {
  return 2023 - birthYear;
};

console.log(calcAge3(1994)); // 29
