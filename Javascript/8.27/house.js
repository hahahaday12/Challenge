const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 색을 채우기 전에 많은 선을 사용할수 있음. 

/*
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();
// fill 을 맨 아래 두면 위에있는 모든 선에 대해 색을 채운다. 중간에 있으면 그 위에껏만 채워짐
// fill 은 색을 채워 넣은것.  stroke 은 선만 있는것. 

// 위에 경로 끊어주고 새 경로 넣기 
ctx.beginPath(); 
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
*/

/* 내가 아래에서 red를 써주면 이 위에있는 도형에만 색이 변해야 하는데 전체색이 변함 왜?
이유: 전부 같은 경로의 일부기 때문 같은 경로 위에 많은 선을 그린다 생각해보면, style 변경에 전체경로에 다 영향끼친다.
*/
// setTimeout( () => {ctx.fill();}, 5000) -> 5초뒤에 빨간색으로 바뀜 

// Point!!  기본적인 코드에서 모든 단계들을 하나씩 다 해야한다. 선을 만들고 , 만들고 색 적용.
//  그린 그림들은 원하면 경로로 나눌수 있음 
// react function = 지름길  , 다음 방법은 react 사용하지 않음

// painbrush 의 시작 지점.
/*
ctx.moveTo(50, 50);
// 선을 하나 그어주자. 내가 있는 곳부터 , (x좌표에서 우리가 가고싶은곳 즉 x가 50에서 100 으로 선을 긋고있음
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50)
ctx.stroke();
*/

// !! moveTo를 사용해서 선을 긋지 않으면서 연필을 움직일 수 있고,lineTo를 이용해서 선을 그으면서 연필을 움직일수 있음.

// 이 로직을 이용해서 집을 하나 만들어보자. 
ctx.fillRect(200, 200, 50, 200);  // 오. 집기둥
ctx.fillRect(400, 200, 50, 200); // 왼. 집기둥
ctx.lineWidth = 2;  // 선의 굵기를 먼저 적어주고  , 그다음 stroke 의 크기를 정해주는게 낫다. 
ctx.fillRect(300, 300, 50, 100); // 집 문을 만들어주자 
ctx.fillRect(200, 200, 200, 20); // 기둥에 위에 천장을 만들어 줘야 한다. 200-400 까지의 선을 그어줘야하니 3번째200
// 삼각형 지붕. 맨 처음 왼쪽 기둥위에 그어질 연필이 위치해져야 한다. 
ctx.moveTo(200,200);
ctx.lineTo(325, 100); // 왼쪽 지붕의 선
ctx.lineTo(450, 200); // y가 200 인 선을 하나 그을것
ctx.fill();




