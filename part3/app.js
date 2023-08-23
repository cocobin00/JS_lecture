// 함수, Function
function logger() {
  console.log("logging...");
}

logger(); // logging...
logger(); // logging...
logger(); // logging...

function buySomeFruits(bananaCount, lemonCount) {
  const fruits = `바나나 ${bananaCount}개, 레몬 ${lemonCount}개를 샀다.`;
  return fruits;
}

const bananaAndLemon = buySomeFruits(10, 5);
console.log(bananaAndLemon); // 바나나 10개, 레몬 5개를 샀다.
