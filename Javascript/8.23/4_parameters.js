// 매개변수의 기본값을 무조건 undefined

function add(a,b) {
    console.log(a);
    console.log(b);
    // 3이라는 값을 출력하고 싶을때 arguments 를 적으면 add 에 있는 값들이 다 보여진다.
    console.log(arguments)
}
add();
/* add에 아무것도 할당하지 않으면 undefined가 나온다. 
a,b 의 매개변수 값으로 1,2 를 넣고 3까지 넣는다고 해도 a,b의 값만 출력된다. */
add(1,2, 3);

/* 🐾중요포인트!!!!
매개 변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨. 
*/