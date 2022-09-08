// 만들어진 함수는 메모리 어딘가에 할당이 되어있음.
function add (a, b){
    return a + b;

}
// sum 이라는 변수에 add를 할당하게 되면, add 라는 메모리 주소를 그대로 할당하는것.
// 따라 sum 과 add는 동일한 함수 정의를 가르키고 있다.
const sum = add;

console.log (sum(1,2)); // sum 으로 해도 3이 출력이되고 
console.log (add(1,2))  // add 라고 해도 3이 출력이 된다. 

/* 
🐾중요 포인트!!!!!
함수 이름 자체는 함수를 가르키고 있는 변수와 동일한다. 
따라 함수의 이름을 어딘가 할당한다는 것은, 함수를 가르키고 있는 메모리 주소를 복사 한것과 같다*/