import express from "express";
import PostService from '../service/post.js';
import { isLoggedin } from "../middleware/auth.js";


const router = express.Router();
// 앞으로 이것들을 만들것. 게시판 crud
router.post("/", isLoggedin, PostService.create);
/* 🔥 ex)
  "https://localhost:3000/post?idx=3000" 프론트엔드가 백엔드 에게 이런식으로 보냄
   그럼 백엔드가 받는 정보는 req.query.idx = 3000; 이렇게 자동으로 찍힘
*/


router.put("/", isLoggedin, PostService.update);

router.get("/all", PostService.readAll);
router.get("/:postId", PostService.read);
/*🔥 ex)
"https://localhost:3000/post/35" -> 프론트엔드가 백엔드에게 보내는 주소 
req.params.postId = 35  -> 백엔드가 받는 주소 
그럼 프론트 엔드는 위의 3000을 도출할수 있어야 하고, 35를 도출할수 있어야 한다. 
*/

// 자신만 지울수 있음. 로그인이 된사람. 그 로그인이 쓴 글이여야만 지워짐. 
router.delete("/:postId", PostService.delete);



export default router;