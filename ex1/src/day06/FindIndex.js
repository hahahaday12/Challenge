/*
findIndex 함수는 배열의 요소를 순차적으로 순회하면서 조건에 일치하는 요소의 인덱스를 반환합니다.
조건을 일치하는 경우가 없다면, -1을 반환합니다.
*/

// arr.findIndex(callback(element, index, array), thisArg)

// 예제 1. 배열의 요소에서 name 속성의 값이 'Apple'인 배열 요소의 인덱스를 반환하는 코드입니다.

const IndexFruits = [
  {name: 'Banana', number: 'A'},
  {name: 'Graps', number: 'B'},
  {name: 'Apple', number: 'C'},
  {name: 'FineApple', number: 'D'}
];

const returnIndex= IndexFruits.findIndex(function(item){ return item.name === 'Apple'})

console.log(returnIndex); // index 의 값 2 가 출력됨.
