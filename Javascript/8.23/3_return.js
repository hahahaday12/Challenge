// return 을 명시하지 않으면 자동적으로 undefined 가 반환되는 모습을 볼수 있다. 
function add(a,b){
    //return a + b; / undefined 출력

}
const result = add(1,2);
console.log(result);

// 조건에 맞는 결과 출력하기.  
function result1(num) {
    if (num < 0) {
        return;
    }
    console.log(num);
}
// 0 이하면 출력하고 싶지 않음. 따라 return 값을 이용해서.한다.
result1(12);
result1(-12);

/* 🐾중요 포인트!!!!!!!
함수 안에서 이 함수를 수행하는데 필요한 특정한 조건이 있다면 함수 도입부분에서 조건이 맞는지
 안맞는지 먼저 검사를 해준후, 아닐시 return 으로 함수를 즉시 종료있다
*/

