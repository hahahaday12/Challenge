const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

function onclick(event) {
    console.log(event)  // 클릭했을때의 이벤트 값 x,y좌표  
    // 클릭하고 콘솔창을 보면 offsetX , offsetY 로 값이 나타난다. 
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke()
}
canvas.addEventListener("click", onclick);