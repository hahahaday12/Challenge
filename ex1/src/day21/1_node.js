import fs from "fs";
let text = null;

try{
  text = fs.readFileSync("./text1.txt", "utf-8");
  console.log(text);
} catch (error) {
  console.log("파일읽기 실패");
} finally {
  console.log("결과 값과 상관없이 실행");
}

fs.readFile("./text2.txt", "utf-8", (err,data) => {
  if (data) {
    console.log(data)
  } else {
    console.log(err)
  }
});

fsPromise
.readFile("./day01.txt", "utf-8")
.then( (result) => console.log(result))
.catch( (error) => {
  console.log(error); // 실패시 실행할 내용.
});