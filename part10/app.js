const restaurant = {
  name: "Super Pizza",
  location: "Rome, Italy",
  startMenus: ["Focaccia", "Bruschetta", "Garlic Bread"],
  mainMenus: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.startMenus[starterIndex], this.mainMenus[mainIndex]];
  },

  opening: {
    mon: {
      open: 11,
      close: 22,
    },
    tue: {
      open: 10,
      close: 20,
    },
    sat: {
      open: 12,
      close: 20,
    },
  },

  orderDelivery: function ({ startIndex, mainIndex, time, address }) {
    console.log(
      `주문 접수 ${this.startMenus[startIndex]}와 ${this.mainMenus[mainIndex]}. ${time}시간에 맞춰서 ${address}로 배송 해주세요.`
    );
  },
};

const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3

const [first, , third] = restaurant.startMenus;
console.log(first); // Focaccia
console.log(third); // Garlic Bread

console.log(restaurant.order(1, 2)); // [ 'Bruschetta', 'Risotto' ]
const [startMenus, mainMenus] = restaurant.order(1, 2);
console.log(startMenus, mainMenus); // Bruschetta Risotto

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [ 5, 6 ]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

const { name, opening } = restaurant;
console.log(name);
console.log(opening);
/* Super Pizza
{
  mon: { open: 11, close: 22 },
  tue: { open: 10, close: 20 },
  sat: { open: 12, close: 20 }
} */

// 변수의 이름(property)을 바꿔서 선언 // 바구조화 할당을 통해서 원하는 값 출력
const {
  name: restaurantName,
  opening: { mon, tue },
} = restaurant;
console.log(restaurantName);
console.log(mon); // { open: 11, close: 22 }

restaurant.orderDelivery({
  startIndex: 1,
  mainIndex: 2,
  time: "14:00",
  address: "Seoul, South Korea",
});
// 주문 접수 Bruschetta와 Risotto. 14:00시간에 맞춰서 Seoul, South Korea로 배송 해주세요.

const newArray = [5, 6, ...arr];
console.log(newArray); // [ 5, 6, 1, 2, 3 ]
const str = "Owen";
console.log([...str]); // [ 'O', 'w', 'e', 'n' ]
console.log(...str); // O w e n

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others); // [ 3, 4, 5 ]

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenus,
  ...restaurant.startMenus,
];

console.log(pizza); // Pizza
console.log(risotto); // Risotto
console.log(otherFoods); // [ 'Focaccia', 'Bruschetta', 'Garlic Bread' ]

const { sat, ...weeksdays } = restaurant.opening;

console.log(weeksdays); // { mon: { open: 11, close: 22 }, tue: { open: 10, close: 20 } }

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3)); // 5
console.log(add(2, 3, 5, 6)); // 16
add(54, 434, 323, 434, 55);
