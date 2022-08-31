// 📌 2.1 Hello world 📌
/*
<script>
    alert( "안녕하세요 ");
</script>
> html 안에 스트립트는 이렇게 작성 
*/

// 외부 스크립트 작성. src 이용해서.
/* 
<script src="/path/to/script.js"></script>
*/

//  안됨 src 안에.
/*
<script src="file.js">
  alert(1);  
</script>
*/

// 📌 2.2 코드구조 📌
/*
1. 문 -> 어떤 작업을 수행하는 문법구조, 명령어 를 의미
서로 다른 문은 세미콜론으로 구분 
ex) 
alert('Hi');
alert('Hello');

2. 세미콜론 -> 줄 바꿈 있으면 세미콜론 생략 가능 

3. 주석 
// 한줄 주석 
/* 여러줄 주석 */


// 📌 2.3 엄격 모드 📌
/*자바스크립트는 오류를 어느정도 무시하고 넘어갈 수 있습니다.
이것이 편하게 코딩을 할 수 있게 하지만, 때로는 심각한 버그를 만듬. 
strict 모드는 이러한 실수를 에러로 변환하여 즉시 수정할 수 있게 합니다.
맨 상위에 "use strict" 을 써준다. 
*/

// 📌 2.4  변수와 상수📌
/*
💙상수💙

자바스크립트는 사용자나 서버로부터 입력 받은 정보를 처리하는 방식
으로 동작. 
변수는 이러한 정보를 저장하는 용도. = 데이터를 저장할때 쓰임.

ex)
## let을 이용해 변수 생성. 
let message -> message 라는 변수 생성

## = 을 이용해 변수안에 데이터 저장 
let message = "hi";

## 여러줄 변수 선언 가능 
let user = 'John';
let age = 25;
let message = 'Hello';

## 하나의 변수 값에 여러개의 데이터를  넣기 가능  단 이전 데이터는 제거
let message;

message = "Hi";

message = "Javascript"

## 변수 두개 선언후, 데이터를 다른 변수에다가도 복사 할수 있음.
let Hello = "Hello world";
let message;
message = Hello;  
-> 두 변수는 같은 데이터를 가진다.  변수는 한번만 선언 

## 변수명 규칙 
-> 문자 , 숫자 , 기호 $ , _ 만 들어갈수 있음.
-> 대소문자 구별 
-> 예약어 금지 (예약어 목록)

💙상수💙
const 로 선언한 변수 = 상수 
* 상수는 재 할당할수 없음. 주로 변하지 않은 값을 쓸때 const를 쓴다. 

# 대문자 상수 
기억하기 힘든 값을 변수에 할당헤 별칭으로 사용하는것. 
ex) 색 표기법에 대한 상수 만들기 

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
alert(color);

*/


let one, two ;

one = "John";

one = two;

alert(two); // John 이 출력 


// 📌 2.5  자료형 등등 📌
/*
자바스크립트에서 값은 항상 문자열이나 숫자형 같은 특정한 자료형에 속한다. .
자바스크립트의 변수는 자료형에 관계없이 모든 데이터 일수있다. .
따라, 변수는 어떤 순간에는 문자열 다른 순간에는 숫자 가능

💙자료형💙

let message = "hello";  순간에는 문자열 
message = 1234556;  순간에는 숫자 

-> 변수에 저장되는 값의 타입들을 언제든 바꿀수 있다 = 🔥 동적 타입 언어🔥 

💙문자형💙
> 문자열을 따옴표로 묶는다 . 
" " 큰 / ' ' 작은 / ` ` 백틱  
let str = "Hello";

> 역 따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 
아래와 같이 원하는 변수나 표현식을 문자열 중간에 넣을수 있다. 

ex) 
let name = "John";

alert ('Hello, ${name}!');
alert (`the result is ${1 + 2}`);

💙불린형💙 
> 논리 연산자 
-> 몸집을 불려,,? 아니 뭐래 
불린형 = 논리형 ( 진실 vs 거짓 )  (true vs false)

ex) 
let nameFieldChecked = true; // 진실 . 확인됨 checked
let ageFieldChecked = false;  // 거짓. not  checked

## 불린형은 비교값 저장할때도 사용된다..

ex)
isNumber = 4 > 1;
alert ( isNumber ) // true.

💙Null값💙 
자바스크립트에서의 null 값은 의미가 다름 !!!!!!!
🚩 다른 곳에서의 null 값은, 어느 자료형에도 속하지 않은 값 , null 값만 포함하는 별도의 자료형 
🚩  자바스크립트 에서의 의미!
-> 존재하지 않는 값, 비어있는 값, 알수 없는 값. 

💙undefined값💙 
> 변수는 할당 되었지만 값은 할당되지 않았을때 undefined .

💙객체형 , 심볼형💙 
> 
## 객체형
 -> 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부릅니다. 
반면 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.

## 심볼형
->  고유한 식별자 

💙type of 연산자💙 
-> 인수의 자료형을 반환.  변수의 자료형을 빨리 알고 싶을때 
ex)
typeof true // "boolean"
typeof Symbol("id") // "symbol"
*/

// 📌 2.6  alert, prompt, confirm을 이용한 상호작용 📌

/*
alert, prompt, confirm -> 브라우저 환경에서 사용되는 최소한의 사용자 인터페이스 기능

## alert
> 메세지가 있는 작은 모달창  
ex) alert("Hello");


## prompt
> 두개의 인수를 받음 사용자에게 텍스츠 입력 메세지와 동시에 입력창 제공.
>  사용자가 입력한 문자열 반환 , 취소 또는 esc null 값 반환.

prompt 함수는 두개의 인수를 받는 다 (사용자에게 보여줄 문자열,[입력 필드의 초깃값(선택값)])
ex) result = prompt(title, [default]);

## confirm 컨펌 대화상자
> 사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여짐.  
사용자가 확인 버튼을 누르면 true를, 취소 버튼이나 Esc를 누르면 false를 반환.

let isfeel = confirm("기분이 좋은가요?"); //  
alert( ); // 확인 버튼을 눌렀다면 true가 출력된다 
*/


// 📌 2.7 형변환 📌
/*
함수와 연산자에 전달되는 대부분 적절한 자료형으로 자동 변환되는데 
이것을 "형 변환(type conversion)" 이라고 한다. 

## 문자형으로 변환 > 문자형으로의 형 변환은 문자형의 값이 필요할 때
alert 의 메서드는 매개변수로 문자형을 받음. 
만약 다른 형의 값을 전달받으면 문자형으로 자동 형변환 된다. 

ex) 
let value = true 
alert(type of value); // boolean

value = String(value); // 문자열인 "true" 가 저장됨. 
alert(typeof value); // string


## 숫자형으로 변환 

ex) 
(1) alert( "6" / "2" ); // 3, 문자열이 숫자형으로 자동변환된다.

(2)
let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환.

alert(typeof num); // number


## 불린형으로 변환 
> 논리 연상을 수행할때 발생. Boolean(value)를 호출하면 
명시적으로 불리언으로의 형 변환을 수행할 수 있다.
💥자바스크립트에선 비어 있지 않은 문자열은 언제나 true💥

ex) Boolean(value)를 호출 하면 명시적으로 형 변환 가능. 
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(true)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 공백이 있는 문자도 비어있는 문자열이 아님 . (true)
*/

// 📌 🚩🚩🚩🚩2.8 기본 연산자와 수학 🚩🚩🚩🚩🚩 📌
/*

단항: 
> 피연산자를 하나만 받는 연산자는 단항(unary) 연산자. 피연산자의 부호를
뒤집는 단항 마이너스 연산자 -는 단항 연산자의 대표적인 예입니다.
ex)
let a = -1;
console.log( -a ); 
// 1 이 출력됨.  이 피연산자 하나로 값을 뒤집을수 있음. 
> 피연산자 하나로 값을 뒤집을수 있는 경우. 


이항:
> 두개의 피연산자를 받는 연산자는 "이항" 연산자. -연산자는 이항 연산자로도 쓰임 가능. 
ex)

let x = 1, y = 3;
alert( y - x );  // 2     

🔥 단항이랑 이항의 - 는 다른 의미! 

피연산자: 연산자가 연산을 수행하는 대상입니다. 5 * 2에는 왼쪽 피연산자 5와 오른쪽 피연산자 2, 
총 두 개의 피연산자가 있습니다. 
'피연산자’는 '인수(argument)'라는 용어로 불리기도함. 



















*/