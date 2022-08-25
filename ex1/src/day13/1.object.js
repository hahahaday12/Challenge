// 객체를 이용하고 원리를 알기 위해 조금더 공부 하고 정리 한것이다. 
const students = {
  apple: "사과",
  banana: "바나나",
  orange: "오렌지",
}

//console.log(students) 객체들이 다 보여짐 
// console.log(students.apple); 원하는 객체만 불러올수 있음. 
// 하지만 여러 객체를 각자 불러올때는 (students.apple, students.banana, students.orange) 이렇게 앞에 최상위것 적어야댐

//const apple = students.apple;
// 이렇게 중괄호로 하나의 값안에 객체를 넣어주면 된다. 
const { apple, banana, orange } = students;


console.log(apple) // 사과
console.log(banana) // 바나나
console.log(orange) // 오렌지 


// 1. import br from "react-router-dom"
// react-router-dom 라이브러리를 통째로 br이라는 이름으로 가지고 온다

// 2. import { BrowserRouter } from "react-router-dom"
// react-router-dom 라이브러리 중에서 {}안에 있는 애를 가지고 온다 . 중괄호를 사용하여 키 값으로 가지고 온다. 

// 1번을 선택했다면 br.BroweRouter
// export명이 맞지 않으면 에러가 나는 경우가 있음

// 2번은 선택하면 BroweRouter

const number = ["일번", "이번", "삼번"];

console.log(number[0]); // 인덱스 번호사용  일번 
const [one, two, three] = number;

console.log(one); // 일번 출력이 된다. 

// 배열은 키 값이 아닌, 인덱스 순서로 값을 받아올 수 있음
// 순서대로

const dog = {
  name: "해리",
  age: 10,
  weight: 5
}

// 
const desDog = ( name, age, weight ) => {
  console.log(`우리집 강아지의 이름은 ${name}입니다. 그리고 나이는 ${age}살이고
  무게는 ${weight}kg 입니다.`)
}
desDog(dog.name, dog.age, dog.weight); // 하나하나의 객체를 가져오려면 dog 앞에 상위객체를 붙여줘야함. 
// 전체 객체로 불러오려면 어떻게 해야할까?
desDog(dog);
// 이렇게 dog 하나의 값으로 전체를 불러오고 싶으면?

// 정답!!! 바로 중괄호안에 객체로 담아주면 된다. 


/* 
문자열과 변수 쓰는 방법

`안녕하세요 ${name}입니다`
"안녕하세요" + name + "입니다"
"안녕하세요", name, "입니다"
*/

//desDog(dog.name, dog.age, dog.weight);
desDog(dog);

// 매개변수로 객체를 전달했고
// 함수의 정의문에서 {}를 사용하여 해당 객체의 키값의 value를 가지고올 수 있다.