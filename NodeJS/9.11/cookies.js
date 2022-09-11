import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
app.set("port", 3000);
app.use(cookieParser("secret"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();

/* 기본 쿠키설정 */
app.post("/setcookie", (req,res,next) => {
    try{
        res.cookie(
            "token", 
            { token:"token", expired: 5 * 60000},
             {
                signed: true, //인증된 암호화 된 쿠키, cookieParser()안에 암호화 키 등록
                // secure: https에서만 가능
                // httpOnly: 웹 서버를 통해서만 사용이 가능 
                maxAge: 5 * 60000,
                httpOnly: true,  // 읽지 못하게 통신에서만 가능하게, 파일에 대한 변조가 불가능하게 
        });
        res.send({ message: "success" });
    } catch(err){
        console.log(err);
        next(err); // 에러 핸들링 
    }
})

 // 쿠키 조회 
 app.get("/showcookie", (req, res) => {
     console.log(req.cookies.token);
     // res.send(req.signedCookies.token) signed: true의 경우
     res.send(req.cookies.token); // 보통 가지고 오는것 
 });

// // 쿠키 지워짐. 
  app.post("/clearcookie", (req,res) => {
      res.clearCookie("token");
      res.send({ message: "success" });
  });

  /* jwt token */
  app.post("/jwtSetcookie", (req, res, next ) => {
      try{
          const token = jwt.sign(
              {email: req.body.email}, //jwt를 암호화 하기위한 값. value, 암호화시키고 싶은 값 그 자체 , 객체, 숫자 상관없음. 
              process.env.SECRET_JWT_TOKEN_KEY
          );
         res.cookie("access_token", token, { httpOnly:true });
         //res.header("authorize", token);
          res.send({ message: "success "});   // 암호화 시키고 싶은 키:값
      } catch (err) {
          console.log(err);
          next(err);
      }
  });

  app.get("/jwtShowcookie", (req, res) => {
      const token = req.cookies.access_token; // access token 이 파기되었음. 그럼 값이 오지 않음 
      //console.log(jwt.verify(token, 복호화키));
        console.log(jwt.verify(token, process.env.SECRET_JWT_TOKEN_KEY)); //인증정보 확인하기 위해 복호화.
      //console.log(jwt.decode(token)).// 이렇게 되면 복호화될 키가 없음. 복호화가 안됨. 
      res.send(req.cookies.access_token);  // 값이 일치해야만, 다름 로직으로 넘어갈수 있게 하면 인증이완료 되는것. 
  });

/* server */
app.listen(app.get('port'), () => {
    console.log(`${app.get("port")}번으로 서버 실행중`);
});