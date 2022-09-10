import express from "express";
import session from "express-session";
const app = express();
app.set("port",3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "node-secret", // 암호키 이름 백엔드에서 적어주는 것이지만, 되도록 다댐브 를 이용하는게 맞음?
    resave:false, // 세션이 값이 똑같으면 다시 저장하지 않겠다
    saveUninitialized: false, 
    // req 메시지가 들어 왔을 떄 session에 아무런 작업이 이루어지지 않을때 
    // 보통은  false , 만약 true시 아무내용이 없는 session이 계속 저장될수 있음. false 로 함으로써 저장시키지 않음
    cookie: {
        httpOnly: true,
        maxAge: 5 * 6000,

    },
})
);


// 임시 로그인 로직
app.post("/login", (req,res) => {
    const {email, password} = req.body;
    if(email = '1234' && password === "1234"){
        req.session.member = {
            email,
            password,
        };
        res.status(201).send({ message: "success" });
    } else {
        req.status(403).send({ 
        message: "failure", 
        error: " 아이디 혹은 비밀번호가 클렸습니다."
    });
    }
})




app.listen(app.get("port"), () => {
    console.log(`${app.get("port")}번으로 서버 실행중`);
});