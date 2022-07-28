// 배열을 통해 주어진 값들을 filter를 통해 3 보다 큰 수

const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter(number => number < 4);

console.log(numbers);
// [1, 2, 3, 4, 5];

console.log(result);
// [1, 2, 3]

// 배열을 통해 주어진 값들의 filter 을 통해 조건에 맞는 'Banana' 찾기

const fruits  = ['Banana','Apple','Strowberry','Mango'];
const resultt = fruits.filter(fritus => fritus === 'Banana');

console.log(fruits );
// fruits  전체가 출력
console.log(resultt);
// filter 로 걸러진 값들만 출력

