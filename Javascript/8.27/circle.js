const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;


ctx.fillRect(210, 200, 15, 100);  // 왼쪽 팔
ctx.fillRect(350, 200, 15, 100);  // 몸통
ctx.fillRect(260, 200, 60, 200);  // 오른쪽 팔 

// 머리 부분을 만들기 위해선 arc 를 이용
// "arc"  = 이 속성 안에는 많은 argument가 있다 

// 처음쓸 argument 의 x 좌표 시작점
// ctx.arc(50, 50, 50, 0, 2 * Math.PI);

// 옆으로 이동 
ctx.arc(250, 100, 50, 0, 2 * Math.PI);  // 0 = 원의 starting angle / 2 * Math.PI = ending angel 원을 끝내는 angle
ctx.fill();

ctx.beginPath(); // 새로운 색을 채워넣어주기 위해 경로를 새로.
ctx.fillStyle = "white";
// 눈 만들어주기
/*
ctx.arc(260 + 10, 80, 8, 0, 2 * Math.PI);  // 완전한 원을 만들기 위해 
ctx.arc(220 + 10, 80, 8, 0, 2 * Math.PI);
*/

// 눈웃음 반원으로 만들어주기.
ctx.arc(260 + 10, 80, 8, 1 * Math.PI, 2 * Math.PI); // 2가 원 그럼 반원은 2의 반인 1
ctx.arc(220 + 10, 80, 8, 2 * Math.PI, 2 * Math.PI);

ctx.fill();
