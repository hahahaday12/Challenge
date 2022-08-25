/*
한페이지 안에  api 가 여러개 있으면, 유지보수가 힘들어 따로 분리해주자
 */

import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("글 조회 완료");
})

router.post("/", (req,res) => {
    res.send("글 등록 완료");
});

router.delete("/", (req,res) => {
    res.send("글 삭제 완료");
});

router.patch("/", (req,res) => {
    res.send("글 수정 완료")
})

export default router;