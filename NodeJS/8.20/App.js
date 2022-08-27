const express = require("express");


const App = express();

//const port = App.listen("127.0.0.1:3005");

/*
request 는 요청객체 > 클라이언트
response 는 응답객체

response 주요 메서드 
1. send([body])
-> 
클라이언트에 응답 데이터를 보낸다. 전달할 수 있는 데이터엔 HTML 문자열, Buffer 객체, JSON 객체, JSON 배열 등이 있다.

request 주요 메서드 
1. query
클라이언트에서 GET 방식으로 전송한 요청 파라미터를 확인한다.

2. get(field), header(field)
헤더를 확인한다.

*/


/* 
html 파일의 컨텐츠를 표시할때는 res.sndFile의 함수를 사용하며,
전체 경로를 포함해야 하기 때문에 parameter로 __dirname 현재경로 + 파일이름 넘겨줘야한다. 클릭했을때 응답할 페이지가 보여져야 하기 때문에 
res.sendFile. 

그럼 App.get과 , APP.use 의 차이점은? 
app.use는 모든 요청에서 이것을 실행한다.
app.get는 주어진 URL에 대해 GET 요청에서 이것을 실행 한다.





*/
App.get('/', function(req,res){
    res.sendFile(__dirname + '/public/Fi.html')
})

App.get('/se', function(req,res){
    res.sendFile(__dirname + '/public/se.html')
})

App.get('/th', function(req,res){
  res.sendFile(__dirname + '/public/third.html')
 })

 App.get('/fo', function(req,res){
  res.sendFile(__dirname + '/public/fourth.html')
 })

App.use(express.static('public'))

App.listen(3000, () => {
     console.log('start!');
 })

