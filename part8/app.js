console.log(this); // {}

const calcAge = function (birthYear) {
  console.log(this);

  const isMillenial = () => {
    console.log(this);
  };
  isMillenial();
};
calcAge(1990);

const calcAgeArrow = (birthYear) => {
  console.log(this);
};

calcAgeArrow(1992); // {}

const profile = {
  firstName: "Kevin",
  year: 1992,
  calcAge: function () {
    console.log(this);
    return 2033 - this.year;
  },
  greet: () => console.log(`안녕, ${this.firstName}야`),
  greet2: function () {
    console.log(`안녕, ${this.firstName}야`);
  },
};

profile.greet(); // 안녕, undefined야
profile.greet2(); // 안녕, Kevin야
profile.calcAge(); // { firstName: 'Kevin', year: 1992, calcAge: [Function: calcAge] }
/* {
  firstName: 'Kevin',
  year: 1992,
  calcAge: [Function: calcAge],
  greet: [Function: greet],
  greet2: [Function: greet2]
} */
console.log(profile.calcAge()); // 41

const anotherProfile = {
  firstName: "Sara",
  year: 1986,
};

anotherProfile.calcAge = profile.calcAge;
console.log(anotherProfile.calcAge());
// { firstName: 'Sara', year: 1986, calcAge: [Function: calcAge] }
// 47

const foo = profile.calcAge;
console.log(foo()); // NaN
