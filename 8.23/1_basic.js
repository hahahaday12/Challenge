/* 함수를 정의하고 호출하는 방법 */

function add (a,b) {
    return a + b; // 이 값을 result 라는 변수에 할당
}
const result = add(1,2)
// 함수가 실행되려면 무조건 호출해줘야 하는 로직이 있어야한다. 
add(1, 2);


// ex2)

function Name(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
// 결과값 1
let lastName = '김';
let firstName = '하은';
console.log(Name(firstName, lastName));

// 결과값 2
let lastName1 = '김';
let firstName1 = '은세';
console.log(Name(lastName1, firstName1))

// 이렇게 재사용하게 되는 함수들을 하나로 정해두면 취상위 한곳에서 바뀌어도 업데이트가 가능.