// Closure
// 1.
const passengerBooking = function () {
  //passengerBooking : 고차 함수
  let passengerCount = 0;

  return function () {
    passengerCount++; // passenger count 하나 추가

    console.log("passengerCount", passengerCount);
  };
};

const booker = passengerBooking();

// 2.
booker(); //=> passengerCount 1
booker(); //=> passengerCount 2
booker(); //=> passengerCount 3
