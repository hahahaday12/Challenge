//  앞에 있는 input 에 대한 value 를 js에서 작성해 줄수 있다.
const lineWidth = document.getElementById("line-width");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
// 맨처음 지정 : ctx.lineWidth = 2;

ctx.lineWidth = lineWidth.value;  // input의 value 값을 가져와 초기값으로 5를 넣어주게함.

let isPainting = false;


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

// 이렇게 로직을 작성하면 linewidth 를 조절해 줄때마다 바뀌는 이벤트 value 값이출력이 된다
// 하지만 문제점이 생김. witd 값을 높여주고 선을 그어주면 이전에 그린 얇은선도 같이 두껍게 바뀜. 
// 이유는? path, 경로가 같기 때문에 이전의 값들을 끊어줘야 한다. 새로운 경로로 작성.33번
function onLineWidthChange(event){
    console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

// 아래것들 먼저 작성후 함수 선언.
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
// click 은 마우스를 눌렀다가 뗄때 작동하는것이고, 마우스를 누르고 있을땐 mousedown
canvas.addEventListener("mouseup", cancelPaintiong);
// 마우스를 땠을 때는 mouseup 그리고 mouseup 이라는 함수를 실행.

// 첫번째 방법. mouseleave 에 대한 함수를 만들어 준후, 캔버스 안으로 들어올때 onMOuseup.
 canvas.addEventListener("mouseleave", cancelPaintiong);

// 두번째 방법. 앞에 doument로 해줄수 있다. 그리고 해당 함수의 
 // document.addEventListener("mouseup", onMouseup);


// input의 value 값의 변화를 감지 하는 이벤트 로직.
lineWidth.addEventListener("change", onLineWidthChange);


