let myAddress = "Seoul";
let oldMyAddress = myAddress;
myAddress = "Busan";
console.log(myAddress, oldMyAddress); // Busan Seoul

const profile = {
  address: "Seoul",
};
const afterProfile = profile;
afterProfile.address = "Busan";
console.log(profile); // { address: 'Busan' }
console.log(afterProfile); // { address: 'Busan' }

const profile2 = {
  address: "Seoul",
  family: ["Tony", "Chris"],
};

// 얕은 복사
const profile2Copy = Object.assign({}, profile2);

profile2.address = "Daegu";
console.log(profile2); // { address: 'Daegu', family: [ 'Tony', 'Chris' ] }
console.log(profile2Copy); // { address: 'Seoul', family: [ 'Tony', 'Chris' ] }

profile2Copy.family.push("Levin");
console.log(profile2); // { address: 'Daegu', family: [ 'Tony', 'Chris', 'Levin' ] }
console.log(profile2Copy); // { address: 'Seoul', family: [ 'Tony', 'Chris', 'Levin' ] }
