// 일급객체 : 일반 객체처럼 모든 연산이 가능한것. 
// 함수의 매개 변수로 전달, 함수의 반환값, 할당 명령문, 동일 비교 대상 

// 외부의 action 값
const add = (a,b) => a + b;
const multiply = (a,b) => a * b;
/*
 더하고 싶은지 곱하고 싶은지 해당 함수 에대한 action 을 외부로 받아온다. 
 나중에 함수안에 호출. result라는 변수에 해당action 의 값을 받아와 a , b 인자의 값을 넣고
*/
function calculater(a,b,action) {
    /* if (a < 0 || b < 0) {
        return; 
    }
    이렇게 되면 action 이라는 콜백은 호출되지 않는다. 
    */
    let result = action(a,b);
    console.log(result);
    return result; 
}
// add 를 호출하지  않았기 때문에, 이름만 전달 한것 이므로 외부의 add 참조값을 전달. 
// 어떤 값을 전달하느냐에 따라 실행되는 함수가 달라짐. 
// 전달된 action은  콜백 함수이다. 
// 함수를 가리키고 있는 함수의 참조값이 전달된다. 따라 필요한 순간데 호출이 나중에된다.

calculater(1,2, add);
calculater(1,2,multiply);
