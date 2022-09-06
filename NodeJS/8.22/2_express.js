/*
  listen() : 서버를 실행하고 클라이언트를 기다림.

  배포를 하려면 
  웹서버를 띄울수 있어야함. 통신가능( 아파치, 엔진x, WAS)
  빈 공간에 서버를 띄우기 위해 한가지 운영체제를 사용해야함. 
  "유닉스(유료)"
  "리눅스(무료)" > 배포판중 하나인 우분투 
  서버를 띄우기 위한 운영체제 
  이것들을 빈공간에다가 설치하고 , 그 리눅스의 명령어를 이용해서 웹 서버를 띄우는것.  
*/

/*
express = 미들웨어 

middle ware?
> HTTP 통신간, 요청(req) 그리고 응답(res) 중간에 위치하여 미들웨어임.
중간에서 요청 응답을 조작하여 기능을 추가하기도, 나쁜 요청을 걸러내는 역할도 하고 있으며 express 의 대부분의 기능이 
미들웨어로 컨트롤 하기 때문에 express의 전부라고 할수 있음.

사용법: 
app.use( 미들웨어) : 모든 요청에서 미들웨어 실행
app.use('/abc', 미들웨어 ) : /abc로 시작하는 요청에서만 실행
app.post('/abc',미들웨어 ) : /abc로 시작하는 post 메소드의 요청에서만 실행
*/
import express from 'express';

const app = express();
app.set("port", 3100);

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")} 번 포트에서 실행 중..`);
});

