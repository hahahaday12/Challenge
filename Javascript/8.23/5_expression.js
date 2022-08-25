// "문" 과 "식" 의 차이 
/*
함수 선언문 function name() { }
함수 표현식 const name = function () { }
*/
let add = function (a,b) {
    return a + b;
};
console.log(add(1,2))
// 함수도 객체이기 때문에 다른 변수에 할당하는게 가능하다. 따라 인자 a,b를 받아 더해 리턴.

// 조금더 편하게 코드를 쓰기 위해 화살표 함수
let add1 = (a, b) =>{
    return a + b
};
console.log(add(1,2));

