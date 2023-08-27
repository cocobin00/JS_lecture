// Map
const thisIsMap = new Map();
thisIsMap.set(1, "this is 1");
thisIsMap.set(true, "this is boolean");
thisIsMap.set("aa", "this is aa");
console.log(thisIsMap);
/* Map(3) {
  1 => 'this is 1',
  true => 'this is boolean',
  'aa' => 'this is aa'      
} */
console.log(thisIsMap.get(true)); // this is boolean
console.log(thisIsMap.get(2)); // undefined

for (const element of thisIsMap) {
  console.log(element);
}
/* [ 1, 'this is 1' ]
[ true, 'this is boolean' ]
[ 'aa', 'this is aa' ] */

thisIsMap.delete(1);
console.log(thisIsMap); // Map(2) { true => 'this is boolean', 'aa' => 'this is aa' }

// Set
const thisIsSet = new Set();
thisIsSet.add("pizza");
thisIsSet.add("pasta");
thisIsSet.add(1);
thisIsSet.add(true);
console.log(thisIsSet); // Set(4) { 'pizza', 'pasta', 1, true }
thisIsSet.add("pizza");
console.log(thisIsSet); // 이미 들어간 원소를 다시 추가하면 추가가 되지 않고 그대로임

console.log(thisIsSet.has("pizza")); // true
console.log(thisIsSet.has("chicken")); // false

for (const element of thisIsSet) {
  console.log(element);
}
/* pizza
pasta
1
true */
