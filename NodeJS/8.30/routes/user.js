// 라우터 연결 로직 

import  express  from 'express';
import UserService from '../service/user.js';

const router = express.Router(); 


router.post("/signup", UserService.signUp); // 회원가입 
// 서비스의 서비스 계층을 만들어 분리할것 왜? 라우터에는 어떤 주소의 라우커들이 있는지만 확인할수 있는 로직을 분리 할것
// 어떤 로그인 로직들이 있는지 쉽게 알수 있다. 
// 미들웨어 정의 
// 매개 변수 전달 안해도 자동 전달됨. 멀터랑 똑같다  /

export default router;