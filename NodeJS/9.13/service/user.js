import bcrypt from "bcrypt";
import User from "../models/user.js";

export default class UserService {
    static async signUp(req, res, next) {
        try {
            console.log(req.body);

            // findOne 검색된 최상단 데이터 한가지 가지고온다 (객체형)
            // findAll 검색된 데이터 모두 가지고온다 (배열형태)
            const exUser = await User.findOne({
                where: {
                    email: req.body.email,
                },
            });

            if (exUser) {
                return res.status(403).send("이미 사용중인 이메일입니다.");
            }
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            // 단방향 암호화

            // create 데이터 저장
            await User.create({
                email: req.body.email,
                password: hashedPassword,
            });
            res.status(200).send("ok");
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    static async login(req, res, next) {
        // 인증,실행 ("키 값")
        // 내가 등록한 local login전략을 인증하겠다 
        //                        (에러값, 유저값, 에러내용값)
        passport.authenticate("local", (err, user, message) => {
            if (err) {
                console.error(err); // 에러가 있다면 err로 보냄
                return next(err); // next err로 아래내용 못읽게
            }

            if (message) {
                // 만약 실패 내용이 있다면, 비밀틀림 등등 에러 핸들링으로 401에 메세지 내용을 보내줄것이다.
                return res.status(401).send(message);
            }

            // login 실행 함수, passport에서 주입
            //           (받아온 유저값,..(callback함수))
            return req.login(user, async (loginErr) => {
                if (loginErr) {
                    console.error(err);
                    return next(err);
                }

                // 없다 라고하면. 유저를 찾는다. id가 user.id일때
                /* enclude -> 걔내들만 보여주겠다 , exclude -> 제외해주겠다.*/
                const fullUser = await User.findOne({
                    where: { id: user.id },
                    attributes: {
                    exclude: ["password"],
                    },
                });
                // 성공했으면 200에 user의 값을 보내주겠다. 
                return res.status(200).json(fullUser);
            });
        })(req, res, next);
    }
}





