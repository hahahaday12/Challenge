import express from "express";
import session from "express-session";
const app = express();
app.set("port",3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
    secret: "node-secret", // 암호키 이름 백엔드에서 적어주는 것.
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
    if(email === '1234' && password === "1234"){
        req.session.member = {
            email,
            password,
        };
        // 부여된 세션 id 삭제x , 세션 id 내의 데이터 삭제 
        res.status(201).send({ message: "success" });
    } else {
        res.status(403).send({ 
        message: "failure", 
        error: " 아이디 혹은 비밀번호가 틀렸습니다."
    });
    }
});

app.post("/logout", (req, res) => {
    console.log(req.session.member);
    req.session.destroy( ()=> {
        console.log("로그 아웃이 실행되었습니다");
    });
    res.status(200).send({message:"success"});
});


app.listen(app.get("port"), () => {
    console.log(`${app.get("port")}번으로 서버 실행중`);
});