import express from "express";
const app = express();
app.set("port", 3000);

app.listen(app.get('port'), () => {
    console.log(`${app.get("port")}번으로 서버 실행중`)
});