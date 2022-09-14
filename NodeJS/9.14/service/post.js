import Post from "../models/post.js";
import User from "../models/user.js";


export default class PostService {
    static async create(req, res, next) {
        try{
            const post = await Post.create({
                content: req.body.content,
                userIdx: req.user.id
                // 받은 content 내용과 , 로그인 한사람의 userIdx. db에 값을 넣겠다.
            });

           // s내가 방금 등록한 post.id 값으로 (select * from where) 한것이랑 같음
           // 그중에서 user.idx는 id랑 email을 가지고 오겠다. 
           // user.idx 연관된 아이를 자동으로 들고온다.
            const fullPost = await Post.findOne({
                where: {id: post.id},
                include: [
                    {
                        model: User,
                        attributes: ["id", "email"]
                    }
                ]
            });    
            // 성공했으면 200으로 json형태의 fullpost를 보내준다.
            res.status(200).json(fullPost);
        }catch(err){
            console.error(err);
            next(err)
        }
    }

    static async readAll(req, res, next) {
        try{
            const posts = await Post.findAll({
                // where: {userIdx: req.user.id},
                order: [["createdAt", 'DESC']],
                limit: 2, // 2개만 + 스케줄러
                include:  [
                    {
                        ////attributes 에 추가한 컬럼 값과 user값이 나온다. 
                        model: User,
                        attributes: ["id", "email"]
                    }
                ]
            });
            res.status(200).json(posts);
        }catch(err){
            console.error(err);
            next(err)
        }
    }
    

    static async read(req, res, next) {
        // params -> routes> post 에 있는 "/:postId" 로 파람의 아이디 값을 가져와서 담겨 있음. 
        // postId 에 지금 주소로 전달된 params 값이 담겨져 있음. 
        try{
            const postId = req.params.postId;
        // 하나만 가지고 올것이기 때문에 findOne
            const fullPost = await Post.findOne({
                where: {id: postId},
        //  지우고 싶은 컬럼명 주소. 이 컬럼명을 제외하고 가져온다. 
                attributes: {exclude: "updatedAt"},
                include:  [
                    {
                        model: User,
                        attributes: ["id", "email"]
                    },
                ]
            });
            // 
            res.status(200).json(fullPost);
        }catch(err){
            console.error(err);
            next(err)
        }
    }

    static async update(req, res, next) {
        try{
            const postId = req.qurey.postId;
            await Post.update({
                content: req.body.content
                },
                {
                    where: {
                    id: postId,
                    userIdx: req.user.id
                    }
                }
            );
            res.status(200).json({
                postId: postId,
                content: req.body.content
            })
        }catch(err){
            console.error(err);
            next(err)
        }
    }

    static async delete(req, res, next) {
        try{
            // 재사용 되는 건 변수로.
            const postId = req.params.postId;
            await Post.destroy({
                where: {
                    id: postId,
                    userIdx: req.user.id
                }
            });
            res.status(200).json({PostId: postId})
        }catch(err){
            console.error(err);
            next(err)
        }
    }
}
