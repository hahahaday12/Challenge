import express from "express";
import morgan from "morgan";
import multer from 'multer';

import fs from "fs";
import path from "path";

const app = express();
app.set("port", 3004);


// dirname  새롭게 다시 해주어야함.
const__dirname = path.resolve();
app.use(morgan("dev"), express.json(), express.urlencoded({ extended: false}));
// 
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// uploads 라는 주소로 사용자가 접속하게 되면, 어떤 폴더에 접근할수 있게 할것인가, "uploads" 라는 폴더에 접속할수 있게
app.use("/", express.static(path.join(__dirname,"public")));
//일반 / 를 쳤을때 public 폴더로 접근되고, public 폴더로 접근되면 폴더 안에 있는 multer.html 파일에 접근


// 지금은 여기 안에다가 multer 을 세팅하지만, 원래는 router 로 빼야한다. 
    const uploads = multer({
        storage: multer.diskStorage({
       /* 도착지 */ destination(req, file, done) {
                    done(null, "uploads"); // 도착지 설정 
       },
       filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + extend
            );
            // 확장자를 제외한 파일명+ 현재시간 + 확장자명 Data > 기본으로 제공해주는것. 
       },
        }),
    });

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")} 번`);
});
