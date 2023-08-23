// Operator

// 할당 연산자 (Assignment Operators)
const myAppleCount = 5;
const yourAppleCount = 10;
const totalAppleCount = myAppleCount + yourAppleCount;

let appleCount = 4;
appleCount += 10;
console.log(appleCount);

appleCount -= 5; // appleCount = appleCount - 5;
console.log(appleCount);

appleCount *= 2; // appleCount = appleCount * 2;
console.log(appleCount);

appleCount /= 3; // appleCount = appleCount / 3;
console.log(appleCount);

// 타입 변환과 타입 강제
const birthYear = "1990"; // string
console.log(Number(birthYear) + 10); // 2000
console.log(Number("Hello")); // NaN
console.log(String(30), 30); // 30 30 // String Number

// Number가 연산을 위해 강제적으로 String으로 변환됨
console.log("나는 " + 30 + "살입니다."); // 나는 30살입니다.
// String이 연산을 위해 강제적으로 Number로 변환됨
console.log("20" - 5.5);

// 비교 연산자 (Comparison Operators)
const stringThree = "3";
const numberThree = 3;
// 값이 같은지만 비교  // Not Good
console.log(stringThree == numberThree); // true
// 값과 타입이 모두 완벽하게 같아야함   // Good
console.log(stringThree === numberThree); // false

const stringIsTrue = "true";
const booleanIsTrue = true;
const numberIsTrue = 1;
console.log(stringIsTrue === booleanIsTrue); // false
console.log(booleanIsTrue == stringIsTrue); // false  // 1 == NaN

// 산술 연산자 (Arithmetic Operators)
let num = 3;
num++;
console.log(num); // 4
num--;
console.log(num); // 3

// 논리 연산자 (Logical Operators)
const a1 = true && true; // true
const a2 = true && false; // false
const a3 = false && true; // false
const a4 = false && 3 == 4; // false
const a5 = "Cat" && "Dog"; // "Dog"  // true && "Dog" -> "Dog"
const a6 = false && "Cat"; // false
const a7 = "Cat" && false; // false

const o1 = true || true; // true
const o2 = false || true; // true
const o3 = true || false; // true
const o4 = false || 3 == 4; // false
const o5 = "Cat" || "Dog"; // "Cat"
const o6 = false || "Cat"; // "Cat"
const o7 = "Cat" || false; // "Cat"

// 삼항 연산자 (Conditional Operators)
const age = 17;
const AdultCheck = age >= 18 ? "성인" : "미성년";
/* if(age >= 18) return "성년";
else return "미성년" */
