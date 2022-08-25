import express from "express";
import morgan from "morgan";
import multer from 'multer';

import fs from "fs";
import path from "path";

const app = express();
app.set("port", 3003);


// dirname  새롭게 다시 해주어야함.
const __dirname = path.resolve();
app.use(morgan("dev"), express.json(), express.urlencoded({ extended: false}));
// 
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// uploads 라는 주소로 사용자가 접속하게 되면, 어떤 폴더에 접근할수 있게 할것인가, "uploads" 라는 폴더에 접속할수 있게
app.use("/", express.static(path.join(__dirname,"public")));
//일반 / 를 쳤을때 public 폴더로 접근되고, public 폴더로 접근되면 폴더 안에 있는 multer.html 파일에 접근


// 지금은 여기 안에다가 multer 을 세팅하지만, 원래는 router 로 빼야한다. 
    const upload = multer({
/*멀터 저장소 세팅*/        storage: multer.diskStorage({
       /*도착지*/ destination(req, file, done) {
        /*도착지 설정 done(error,폴더명)*/ done(null, "uploads");
       },
/*이 3개순서는 꼭 지켜야함*/ filename(req, file, done){
            const ext = path.extname(file.originalname); /* 파일 확장자명, 파일이름의 확장자명 가지고옴 */
            done(
                null,
                path.basename(file.originalname, ext) + Date.now() + ext
            );
            // 확장자를 제외한 파일명(순수파일명)+ 현재시간 + 확장자명 Data > 기본으로 제공해주는것. 
       },
        }),
        /* 디스크 스토리지가 끝나는 마지막 가로 위에 파일용량 제한  */
        limits: { fileSize: 5 * 1024 * 1024},
        // 기준은 byte 5MB
    });
/* >
 이 과정은 파일을 설정해주는 과정이다. 
1. 업로드된 파일이 어디로 도착하는지
2. 어떤 이름으로 저장 되는지 
3. 얼만큼의 용량 제한이 있는지 
 */

try{
        fs.readdirSync("uploads");
    } catch (error){
        fs.mkdirSync("uploads/");
    }

//파일 전송 버튼을 클릭했을때  파일 저장 되는 로직 , 원래는 밖으로 빼야함
app.post("/upload", upload.single("image"), (req,res) => {
    /* 지금 경로에 업로드 폴더가 있냐 없으면 업로드 폴더를 만들어라 
    single 이미지 한개를 뜻한다. */
    console.log(req.file);
});

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")} 번 포트에서 실행중`);
});
