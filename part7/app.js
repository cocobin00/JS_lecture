"strict mode";

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    const output = `${firstName}님, 당신은 ${age}살 입니다. 그리고 당신은 ${birthYear}년에 태어났습니다.`;
    console.log(output);
    // wen님, 당신은 35살 입니다. 그리고 당신은 1990년에 태어났습니다.

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      const firstName = "Kevin";

      const str = `${firstName}, 당신은 밀레니얼입니다.`;
      console.log(str); // Kevin, 당신은 밀레니얼입니다.

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // true
    console.log(add(2, 3)); // 5
  }
  printAge();

  return age;
}

const firstName = "Owen";
calcAge(1990);
// console.log(age); // ReferenceError
