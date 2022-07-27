/*
find 함수는 배열의 요소를 순차적으로 순회하면서 조건에 일치하는 요소의 값을 즉시 반환. 
조건을 일치하는 경우가 없다면, undefined를 반환한다.
*/

// 사용 문법 : arr.find(callback(element, index, array), thisArg)

// 1. 배열 요소에서 name속성의 값이 'Apple'인 배열 요소의 값을 반환 코드.

const fruits = [
  {name: 'Banana', number: 'A'},
  {name: 'Graps', number: 'B'},
  {name: 'Apple', number: 'C'},
  {name: 'FineApple', number: 'D'}
];

const result = fruits.find( function(item){ return item.name === "Apple"})

console.log(result); //

/* 
2. 동일한 값이 존재하는 경우.
2번째 인덱스에서 name 속성의 값이 'Apple'인 요소가 존재하므로 
배열 요소의 값을 즉시 반환한다.
*/

const ffruits = [
  {name: 'Banana', number: 'A'},
  {name: 'Graps', number: 'B'},
  {name: 'Apple', number: 'C'},
  {name: 'FineApple', number: 'D'}
];

const result_2 = ffruits.find(function(item, index){
    console.log(`***${index}번째 index`);
    //***0번째 index
    //***1번째 index
    //***2번째 index
  
  return item.name === 'Apple'
});

console.log(result_2); // {name: 'Apple', number: 'C'}


/*
3. 일치하는 조건이 없을 때는 
 undefined 를 반환한다. 
*/
