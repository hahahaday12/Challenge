


// 텍스트 입력창.  여기서 발생하는 이벤트는 상관없음으로 이벤트 함수 적지 않을것임. 
const textInput = document.getElementById("text");


// 마지막 이이지 삽입에 대한 로직. html accept="image/*" -> 어떤것 상관없이 이미지만 가져옴 png여부 ㄴㄴ
const fileInput = document.getElementById("file")


// 지정한 색상을 누르면, 캔버스 화면 자체가 그 색상으로 변경된다. 펜 ㄴㄴ 
const backChange = document.getElementById("fill-btn");

// 배경색 덮는  로직 
const destroyBtn = document.getElementById("destroy-btn");

// 버튼 누르면 지워지는 ? 로직
const eraserBtn = document.getElementById("eraser-btn");

// 이쁜 색을 누르면 바로 적응되게 끔 하는 로직
// ## const colorOptions = document.getElementsByClassName("color-option");

//## 위에 수정. Array.from 을 사용해서 배열로 생성
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);



// html에 있는 input 타입의 이벤트 리스너 추가, 함수연결 (컬러값 변홤)
const color = document.getElementById("color");

//  앞에 있는 input 에 대한 value 를 js에서 작성해 줄수 있다.
const lineWidth = document.getElementById("line-width");

// 1 번으로 적은 함수 로직.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;



canvas.width = CANVAS_WIDTH ;
canvas.height = CANVAS_HEIGHT;
// 맨처음 지정 : ctx.lineWidth = 2;

ctx.lineWidth = lineWidth.value;  // input의 value 값을 가져와 초기값으로 5를 넣어주게함.

let isPainting = false;
let isFilling = false;


// 유저가 마우스를 클릭한 채로 움직일때 그리도록 . 힌트 moveTo
/*
ctx.moveTo(200, 200);

ctx.lineTo(400, 400);
ctx.stroke();
*/
// (200, 200) ~ (400, 400) 으로 선하나 긋고 있다.
// moveTo 는 우리가 선을 긋지 않으면서 브러쉬를 움직이게 해준다. 
// 유저가 canvas 위에서 마우스를 움직일 때마다 moveTo를 호출, 유저가 움직일때마다 클릭하는곳에 시작점이 되어야함.

function onMove(event){
    // isPainting 이 true일때만 그려지게 되는것. 
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY); // 유저가 움직이는 쪽으로 선을 그어줌. 그선을 stroke.
        ctx.stroke();
        return;
    }
    ctx.beginPath();

    // ispainting 이 false 면 붓만 움직일 것.
    ctx.moveTo(event.offsetX , event.offsetY);
}

// 마우스를 눌렀을대 유저가 그림을 그릴수 있게 변수 하나를 선언.
function startPainting(){
    isPainting = true;
}

// 마우스를 땔때 실행되는 로직 . 이 로직이 실행되지 않으면 캔버스 밖으로 나갔다 다시 들어와도 선이 계속 그려짐.
function cancelPaintiong(){
    isPainting = false;
    
}

// input 에 있는 색상 변경 로직 
// 하나 알아야 할껀 색에 대해 선을 그어주고 그리고 객을 채워준다.
function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
    
}

// 유저가 해당 옵션 색 클릭하면 실행되는 함수 
/*
function onColorClick(event){
    console.log(event.target);
}

console.log는 요소를 HTML과 같은 트리 구조로 출력 하고,
DOM 요소에 대해 특별한 처리를 제공.
console.dir은 요소를 JSON과 같은 트리 구조로 출력 하고,
DOM JS 객체의 전체 표현을 보려고 할 때 유용.
객체는 dir, 나머지는 log로 로깅하면 편하다.
아래를 참고하면 console.log의 경우 해당 body의 요소가 출력 되고,
console.dir의 경우 전체 요소가 출력된다.
*/

// 콘솔창에 확인해보면 html에서 정해준 optioncolor를 database 에서 찾아볼수 있다.
// 객체 값으로 가져올수 있음.
// 🤔 유저가 색클릭하면 옆에잇는input 창에 이색을 나타나게 하고픔
/*
function onColorClick(event){
    console.dir(event.target.dataset.color);
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
}
*/
// 🔥해볼것 > 두개가 동시에 실행되는 함수 1개를 만들어보자

// 🤔 생각해보기 : input색상 바뀌게 하기
function onColorClick(event){
    console.dir(event.target.dataset.color);
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue; // 사용자에게 선택한 색을 알려주기 위한 로직
}

// 이렇게 로직을 작성하면 linewidth 를 조절해 줄때마다 바뀌는 이벤트 value 값이출력이 된다
// 하지만 문제점이 생김. witd 값을 높여주고 선을 그어주면 이전에 그린 얇은선도 같이 두껍게 바뀜. 
// 이유는? path, 경로가 같기 때문에 이전의 값들을 끊어줘야 한다. 새로운 경로로 작성.33번
function onLineWidthChange(event){
    console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

// 캔버스 배경색이 모드 바꾸는 함수 작성. isFilling일때 버튼을 클릭하면 텍스트를 바꾸고 싶다는 의미. 
function onModeClick(){
 if(isFilling){
    isFilling = false;
    backChange.innerText = "Fill";
    // false 일대 버튼 덱스트는 fill이 된다. 
 } else {
    isFilling = true;
    backChange.innerText = "Draw";
 }  // 아닐때 버튼을 누르게 되면, 채우기 모드로 바꾸고 싶다는 의미.
}
// 이 이후는 , draw 일때 캔버스 색상이 채워지게 되고, 마우스를 누르면 채워진다.. 마우스를 누르는 로직은 있다 현재.


// 색을 클릭하면 캔버스에 색상이 채워지는 함수 로직.
function onCanvasaClick(){
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

// 그려진 것들을 다 지울수는 없고, 하얀색 색상을 그 위에 채울수는 있다. 이 로직이 중복되니 상수로 지정해주자.
function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}


// 선을 지우는 로직. 흰색 선으로 지울수가 있는거임. 그니까 이전걸 아예 지우는게 아니라 속이는거. 흰색을 칠하면서 지워진척
function onEraserClick(){
    ctx.strokeStyle = "white"
    isFilling = false;
    backChange.innerText = "Fill";
}

// 이미지 삽입에 대한 로직. 
/*📢❔📢📢📢😮📢 자바스크립트가 우리 파일을 읽을수는 없지만, 유저가 선택한 파일은 읽을수가 있다.  file에 나오는 
정보를 보고 파일에 접근하기 위해 이 사진을 URL을 이용해서 볼수 있게 하고픔. 사진을 선택하면 이 사진은 브라우저에 
메모리에 저장되있는것임으로 이 사진을 얼마든 이용할수 있음. 
이 이미지에 대한 url을 만들고 싶으면 아래와 같이 만들면 url을 받을수 있고 이미지 브라우저에만 유효한 주소이다. 
*/
function onFileChange(event){
    //console.dir(event.target)
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
    const image = new Image(); 
    image.src = url; // <img src=""/> 이 html이랑 같은뜻.
    image.onload = function(){
        ctx.drawImage(image, 0, 0 ,CANVAS_WIDTH, CANVAS_HEIGHT)  // draw이미지를 필요요하지만 이미지가 존재함. 
        fileInput.value = null; // 이미지를 그릴때 file 을 지우고 싶음. 
    }
}

// text를 더블 클릭햇을때의 변화 값 상태로직 
function onDoubleClick(event) {
    const text = textInput.value;
    ctx.lineWidth = 1;   // 나타나기 전에 굵기 값 변경 
    ctx.strokeText(text, event.offsetX, event.offsetY)
    console.log(event.offsetX, event.offsetY); // 더블클릭의 좌표값을 알아볼수 있음.  
    // 결과 기존에 설정되어 있던 글씨 기본값 굵기 때문에 잘 나오지 않음. 따라 . 텍스트가 나타나기전에 텍스트 크기조절
}




// 텍스트 입력 값에 대한 로직, 기본 : mouseup - mousedown 이 빠르게 클릭될때 
canvas.addEventListener("dblclick", onDoubleClick);

// 아래것들 먼저 작성후 함수 선언. -> 또다른 방법
// canvas.onmousemove = function(){  }  / onMove
canvas.addEventListener("mousemove", onMove);

canvas.addEventListener("mousedown", startPainting);
// click 은 마우스를 눌렀다가 뗄때 작동하는것이고, 마우스를 누르고 있을땐 mousedown
canvas.addEventListener("mouseup", cancelPaintiong);
// 마우스를 땠을 때는 mouseup 그리고 mouseup 이라는 함수를 실행.

// 원하는 색상을 선택하고 마우스를 눌렀다 땠들때 캔버스 배경색이 채워져야 하는 함수. 
canvas.addEventListener("click", onCanvasaClick);

// 첫번째 방법. mouseleave 에 대한 함수를 만들어 준후, 캔버스 안으로 들어올때 onMOuseup.
 canvas.addEventListener("mouseleave", cancelPaintiong);

// 두번째 방법. 앞에 doument로 해줄수 있다. 그리고 해당 함수의 
 // document.addEventListener("mouseup", onMouseup);

// input의 value 값의 변화를 감지 하는 이벤트 로직.
lineWidth.addEventListener("change", onLineWidthChange);

// input color의 색상 변화 값에 대한 로직
color.addEventListener("change", onColorChange)

// 예쁜 색을 html에 지정해서 보여주고 유저가 클릭하면 바로 그 색으로 변경값에 대한 함수 출력
// 아래 처럼 작성하면 forEach()는 colorOptions의 함수가 아니라함
//이유는? colorOptions는 html이지 Array(객체)는 아님.
// 따라 , 위에 선언 함수를 다시 수정해준다.  수정해 주면 오류가 나지 않음 .
/*
colorOptions.forEach()
*/

// 색의 옵션을 누를때마다 각각의 색 옵션이 호출되어야 한다 
colorOptions.forEach(color => color.addEventListener("click",
onColorClick))

// 유저클릭시 캔버스 배경 에 색상이 입히는 이벤트 로직
backChange.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click",onDestroyClick)
eraserBtn.addEventListener("click", onEraserClick);

// 이미지 file에 대한 로직 
fileInput.addEventListener("change", onFileChange);


//ctx = context