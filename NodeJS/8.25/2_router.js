import express from "express";
import post from "./routers/post/post.js"
import comment from "./routers/post/comment.js";
import user from "./routers/user.js"

const app = express();
app.set("port",3003);

// API 아래 api들은 어떤것을 가르키고 있을까? get 뒤에 있는 백엔드 주소는 무슨 기능할까 

// app.get("/post", (req,res) => {
//     // 게시글 조회 
// });  
// app.post("/post", (req, res) => {
//     // 게시글 작성
// });
// app.delete("/post", (req, res) => {
//     // 게시글 삭제
// });
// app.put("/post", (req, res) => {
//     // 게시글 수정
// });

// // ex2)
// app.get("/comment", (req,res) => {
//     // 댓글 조회 
// });  
// app.post("/comment", (req, res) => {
//     // 댓글 작성
// });
// app.delete("/comment", (req, res) => {
//     // 댓글 삭제
// });
// app.put("/comment", (req, res) => {
//     // 댓글 수정
// });

// //ex3) 
// app.get("/user", (req,res) => {
//     // 회원가입 조회 
// });  
// app.post("/comment", (req, res) => {
//     // 회원가입 작성
// });


// 이런것들이 restAPI 에 대한 형식. 자원의 이름만 봐도 뭘 나타내는지 알수있다. 
/* 실제로 데이터들은 이것보다 훨씬더 많고 길게 가져올것이다. 이렇게 한페이지에 
많은 데이터가 있으면 유지보수는 어떻게 할것인가? 
얘내들을 리액트 라우터 처럼 주소마다 구분지을수 있다면? 
routers 라는 폴더들을 만들고 안에 각각의 로직을 만들어 주자
*/

// *앞문자: 기본경로, 내가정한명: router"
// <"/" => "/post"> 
// 기본경로명, router "/" === "/post" */
app.use("/post", post);
app.use("/comment", comment);
app.use("/user", user);


app.listen(app.get("port"), () => {
    console.log(`${app.get("port")}번 포트에서 실행중`);
});


//포인트!! 주소만 봤을때 어떤 역할을 하는지 유추가 가능하면 이것을 restAPI라고 한다. 
// 철저하게 잘 지켜진 restAPI 를 restfullAPI 라고한다.