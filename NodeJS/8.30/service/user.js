import bcrypt from "bcrypt";
import User from '../models/user.js';

export default  class UserService {
    static async signUp(req,res, next){ // 매개변수
        try{
            console.log(req.body);

            // 지금 입력한 이메일이 user 라는 테이블에 존재 하는지 찾고 , 이미 있는 아이디 이면 return에 알려준다.
            const exUser = await User.findOne({ // 하나를 검색해서 찾는다는 시퀄라이즈 orm문법, 여러개는  all
                where: {
                    email: req.body.email,
                },
            });

            if(exUser){
                    return res.status(403).send('이미 사용중인 이메일 입니다.')
            }

            // 받아온 비밀번호 암호화 , 단방향 암호와 
            const hashedPassword = await bcrypt.hash(req.body.password, 12); 
            
            // create 데이터 저장 
            await User.create({
                email: req.body.email,
                password: hashedPassword,
            });
            res.status(200).send("ok");
         } catch (err) {
            console.error(err); // 에러가 나면 끝나는게 아니라 다음으로 처리, 진행 하기 위해 다음 로직을 짜야함.
            next(err);  // 에러를 처리할수 있는곳으로 떠 넘겨 버림. 에러 핸들링 하는곳 . 에러 상위로 보냄. 
            // 이렇게 되면 에러가 나도 프로그램이 정지하지 않음. 에러가 나는 부분에 try, catch문 미리 써야함. 
         }
    }
}                          

// 단방향 암호와를 진행하기 위해 설치함. npm i bcrypt . (라이브러리) 크립토, 디 크립토 와 함께 크립토가 돈이 덜나감.