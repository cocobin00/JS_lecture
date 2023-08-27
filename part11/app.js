// Object Literal
// 1.
const objectName = {
  a: 1,
  b: "bb",
};

const outsideObject = {
  objectName: objectName,
};

console.log(outsideObject.objectName); // { a: 1, b: 'bb' }

const es6OutsideObject = {
  objectName,
};

console.log(es6OutsideObject.objectName); // { a: 1, b: 'bb' }

// 2.
const objectMethods = {
  method1: function () {
    console.log("this is method");
  },
};

objectMethods.method1(); // this is method

const es6ObjectMethods = {
  method1() {
    console.log("this is method es6");
  },
};

es6ObjectMethods.method1(); // this is method es6

// 3.
const arr = ["a", "b", "c"];
const objectWithOperation = {
  [arr[0]]: "this is a",
  [`${1 + 3 + "ha"}`]: "this is 4ha",
};

console.log(objectWithOperation); // { a: 'this is a', '4ha': 'this is 4ha' }

//optional chaining
const weekdays = {
  mon: {
    open: 10,
    close: 22,
  },
  tue: {
    open: 11,
    close: 20,
  },
};

console.log(weekdays.mon); // { open: 10, close: 22 }
console.log(weekdays.mon.open); // 10
console.log(weekdays.wed); // undefined
// console.log(weekdays.wed.open); // TypeError

console.log(weekdays.wed?.open); // undefined
// == if (weekdays.wed) console.log(weekdays.wed.open); // 아무것도 출력 x

const thisIsNull = null;
// console.log(thisIsNull.a); // TypeError
console.log(thisIsNull?.a); // undefined

// objectMethods.method2(); // TypeError
objectMethods.method2?.() ?? console.log("no method"); // no method
