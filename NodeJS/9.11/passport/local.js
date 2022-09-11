// 진짜 로그인 전략을 짠다 . 
import passport from 'passport';
import passportLocal from "passport-local";
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const LocalStrategy = passportLocal.Strategy;

const passportConfig = {
    usernameField: "email",
    passwordField: "password",
    // 라이브러리라 이름은 고정으로 해야함. 
};

//3째 인자로 받는 done 이라고 한것들이 성공하면 index.js로 보내고 실패하면 로그인 로직으로 다시 보낸다. 내재되어 있는 값임.
// 매개변수 안에 들어오는것들은 이름을 어떻게 하든 상관없지만 index 번호로 들어오기 때문에 순서는 꼭 지켜줘야한다. 
const passportVerify = async (email, password, done) => {
    try {
        const user = await User.findOne({ where: { email }});
        if(!user){ 
                return done(null, false,{
                    message: "failure",
                    error: "가입된 이메일이 없습니다."
                });
            }
                                             // (사용자 값, db 저장된값) 비교할 password
            const result = await bcrypt.compare(password, user.password);
            // return boolean
            if(result){
                return done(null, user);
            } else{
                return done(null, false,{
                    message: "failure",
                    error: "비밀번호가 올바르지 않습니다."
                });
            }
    
    } catch (err){
        console.log(err);
        return done(err);
    }
};

// 로그인을 등록 한것. 
export default () => {
    passport.uer('local', new LocalStrategy(passportConfig , passportVerify));
};

//passport 를 쓰지 않을 것이면, 로그인 오직에 19-27 번의 로직만 가져가서 쓰면 된다 
// done 대신 res.state 로 바꿔주면 됨. 
