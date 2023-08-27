"strict mode";

console.log(me); // undefined
// console.log(year); // ReferenceError

var me = "Owen";
let job = "engineer";
const year = 1993;

console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // ReferenceError
// console.log(addArrow(2, 3)); // ReferenceError

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

console.log(numProducts); // undefined
if (!numProducts) {
  deleteShoppingCart(); // 모든 상품 삭제
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log("모든 상품 삭제");
}
