const koreanAir = {
  airline: "KoreanAir",
  iataCode: "KAL",
  booking: [],
  book(flightNum, name) {
    console.log(this);
    console.log(
      `${name}이 ${this.airline} 항공의 ${this.iataCode}${flightNum} 예약했습니다.`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

koreanAir.book(123, "Owen");
koreanAir.book(456, "Kim");
/* Owen이 KoreanAir 항공의 KAL123 예약했습니다.
{
  airline: 'KoreanAir',
  iataCode: 'KAL',
  booking: [ { flight: 'KAL123', name: 'Owen' },
    { flight: 'KAL456', name: 'Kim' }],
  book: [Function: book]
}
Kim이 KoreanAir 항공의 KAL456 예약했습니다. */

const asiana = {
  airline: "Asiana",
  iataCode: "ASA",
  booking: [],
};

const book = koreanAir.book;
// book(23, "Sara"); // TypeError // 참조하는 this가 다름

book.call(asiana, 23, "Sara");
/* { airline: 'Asiana', iataCode: 'ASA', booking: [] }
Sara이 Asiana 항공의 ASA23 예약했습니다. */
console.log(asiana);
/* {
  airline: 'Asiana',
  iataCode: 'ASA',
  booking: [ { flight: 'ASA23', name: 'Sara' } ]
} */
book.call(koreanAir, 455, "John");
console.log(koreanAir);
/* John이 KoreanAir 항공의 KAL455 예약했습니다.
{
  airline: 'KoreanAir',
  iataCode: 'KAL',
  booking: [ { flight: 'KAL455', name: 'John' } ],
  book: [Function: book]
} */

const flightData = [222, "George"];
book.apply(asiana, flightData);
book.call(asiana, ...flightData); // == book.call(asiana, 222, "George")
console.log(asiana);
/* George이 Asiana 항공의 ASA222 예약했습니다.
{
  airline: 'Asiana',
  iataCode: 'ASA',
  booking: [{ flight: 'ASA222', name: 'George' } ]
} */

const bookASA = book.bind(asiana);
bookASA(66, "Rebecca");
console.log(asiana);
/* Rebecca이 Asiana 항공의 ASA66 예약했습니다.
{
  airline: 'Asiana',
  iataCode: 'ASA',
  booking: [{ flight: 'ASA66', name: 'Rebecca' }]
} */
