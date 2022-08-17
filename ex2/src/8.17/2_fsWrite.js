import fs from "fs";


//const fs = require("fs"); //nodeJS 기본지원 라이브러리 (모듈) 설치 필요 X
const fsPromise = fs.promises;
const data = "아니 코딩 너 밀당 그만. Hello NodeJs!";

fs.writeFile("./text1.txt", data, "utf-8", (err) => {
  if(err){
    console.log(err);
  } else {
    console.log("파일이 정상적으로 저장되었습니다")
  }
});

//

fsPromise
  .writeFile("./text2.txt", data, "utf-8")
  .then( ()=> {
  console.log("파일이 정상적으로 저장되었습니다.")
})
.catch((error) => {
  console.log(error);
});

//

try {
  fs.writeFileSync("./text3/txt", data, "utf-8");
} catch (error) {
  console.log(error);
}