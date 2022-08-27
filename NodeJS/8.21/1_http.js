/*
<용어정리>
HTTP 모듈 
  HTTP 웹 서버를 생성하는 것과 관련된 모든 기능을 담담. 
  createServer() : server 객체를 생성 
  writeHead(): http res message(응답메시지) header를 구성
  end() : https res message(응갑 메세지) body를 작성
  listen() : 서버를 실행하고 클라이언트를 기다림.
listen
  >  createServer 로 서버를 생성하고 > writeHead로 헤더를 구성하고 > end로 body를 구성하고 > listen으로 서버를 실행

  */

  import http from "http";

  const server = http.createServer( (request, response) => {
    
    response.writeHead(200,{"content-type": "text/html" });
  response.end(
    `백엔드에서 받아올 파일 현재는 없으니 html로 예시 ( 200번으로 성공했으니까 성공했으면 아래 내용 표시/)
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>두번째 페이지</title>
        <link rel="stylesheet" href="./fourth.css">
      </head>
      <body>
        <h2>HTTP 모듈 테스트</h2>
        <p>처름으로 실행하는 node.js http 서버</p>
      </body>
    </html>
    `
  );
  });

  // 3002번 포트로 서버가 실행되면 터미널 창에 console.log 내용이 나옴.
  server.listen(3002,() => {
    console.log("3000번 포트로 실행중")
  })

  


