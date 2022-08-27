/*
http 로 서버도 만들수 있고 요청의 값을 만들수 있음. 
하지만, http 모듈로 개발을 하지 않는다. http기반으로 해서 조금더 편리하고 다양하게 지원하는 모듈 "express"
express 라는 모듈때문에 nodeJS 라는 백엔드가 생긴것임. 
http 라는 모듈로만 사용해서 웹 서버를 구성하면 직접 많은 기능을 구현하고 코드가 지저분.
웹 서버의 기능을 대부분 혼자서 구현 가능한 express

이와 비슷한 : nestJS 모듈 -> 객체지향 개발이 가능, 의존성 부여
*/

// npm i morgan
// npm i express -> express 서버설정

import express from "express"; // import
import morgan from "morgan";
import path from "path";

const app = express();
app.set("port", 3000); // 변수 설정

//미들웨어 ( 중간통로 사이에서 조율)

/* 
morgan (log)
로그를 찍어줌
모드로는 dev, combined, common, short, tiny
보통 개발용은 dev, 배포용은 combined를 사용
*/
app.use(morgan("combined"));

/*
body-parser
express 4.16.0부터 기본 내장
데이터 형식 허용 여부와, req message로 전달받은 body의 데이터의 해석 
*/
app.use(express.json()); // json 데이터를 읽는 것을 허용
app.use(express.urlencoded({ extended: false }));
// url에 있는 정보를 express 내에 있는 해석툴로 읽을 것이냐

/*
: 만약 해석 툴로 되어 있어으면 어떻게 될까? 
extended => false일때 (nodeJS에 내장된 qureystring 모듈)
extended => true일때  (추가로 설치하여 외부 해석툴 qs로 해석)
*/

/* 
static
express 탑재, 정적인 파일을 제공
*/
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "public")));

/*
원래 우리 서버에 이쓴 파일에 접속하려면 
localhost:3000/public/style/style.css 이런식으로 접근해줘야함.
이제는 그렇지 않고 얘내들의 기본 경로를 만들어 줘서 
처음에 public 이라고 치면 우리들의 기본 경로를 그대로 받아와서 쓸수 있다
-> public/style/style.css 이런식으로 바꿔서 써줄수 있다 
원래는 경로를 절대적으로 지정해서 가져왔어야 하는데 앞에있는 경로를 바꿔줄수 있다. 

:: localhost:3000/public/style/style.css -> 이런식으로의 입력은 너무 길다 
:: 따라, (path.join(__dirname, "public")) 기본 경로를 "public" 이라고 정해놓은 상태


웹서버에 있는 정적인 파일에 접근하기 위해 사용
이미지 파일이 1000개가 있으면 그 주소를 일일히 써줄수가 없음. 
프론드 엔드에는 파일이 없고 , 서버에 있어서 그 해당 주소만 입력하면 바로 찾을수 잇게
백에 저장되어 있는 이미지를 밖으로 내보내야한다. 따라 편하게 쓰기위하여 경로자체를 설정



*/
// 사용자가 https://www.백엔드주소.com/ ---> public 폴더로 접근이 가능
// https://www.백엔드주소.com/_body.html ---> public 폴더의 _body.html로 접근

app.listen(app.get("port"), () => {
    // 서버 구동
    console.log(`${app.get("port")}번으로 서버 실행 중`);
});

app.get("/", (req, res) => {
    res.send("Hello express");
});

app.get("/body", (req, res) => {
    res.sendFile("./public/_body.html");
});