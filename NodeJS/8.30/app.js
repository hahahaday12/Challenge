import express from "express";
import db from "./models/index.js";
import user from './routes/user.js';

const app = express();
app.set("port", 3000);


// db연결에 대한 로직. 
db.sequelize.sync()
            .then(()=> {
                    console.log("DB연결에 성공하였습니다.");
    })
    .catch( (err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use('/user', user);

    

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")}번 서버 실행중`);
});

// 서버 만들때 숨쉬는 듯이 만들어야함. 