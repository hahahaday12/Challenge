// 세션을 받아오고 그 세션을 해석한뒤 req.user 하는 데이터 공간에 정보를 자동적으로 저장해준다. 
// 세션 해석 밑, passport 설정 
import passport from 'passport';
import local from "./local.js";

export default () => {
    // 세션 생성 
    passport.deserializeUser( (user, done) => {
        // user. id 로 세션을 만드는 함수 이름. 
        done(null, user.id);
    });

    passport.deserializeUser(async(id, done) => {
         try {
            const user = await user.findOne({ where: { id } });
            done(null, user);
        } catch (err) {
            console.log(err);
            done(err);
        }
    });
    local();
};
   

