import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CommentForm from "./commentForm";
import Comment from "./comment";
import { useInput } from '../../../hooks/useInput';

// homemain.js 에서 전달 받은 props 를 비구조화 할당으로 가져온 다음 ({state})
const Post = ({ post }) => {
    
    // 🖐🖐🖐밖에 다가 해보는것은 놉! console.log(post); 만약 이 post 들의 값을 보고 싶을땐,
    
    /*
    useEffect( ()=> {
        console.log(post);
    },[post]);
    ->  보면 각 게시물이 잘 전달된것을 볼수 있다. */

    
    /*추가*/ 
    const [content, onChangeContent] = useInput(post.content);
    const [editPost, setEditPost] = useState(false);
    const [commentBox, setCommentBox] = useState(false); // 댓긓
    


    const onEditPostHandler = useCallback(() => {
        setEditPost((prev) => !prev);
        // setState ( (state) => !state )
        // true => false
        // false => true
    }, []);
 const onCommentBoxHandler = useCallback(() => {
        setCommentBox((prev) => !prev);
    }, []);

    return (
        <StyledPost>
            <div className="info">
                <div className="inner">
                    <StyledAvatar src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
                    <div className="name-date">
                        <div className="name">{post.User.name}</div>
                        <div className="date">{new Date().toLocaleDateString()}</div>
                    </div>
                </div>
                <div>
                    <button className="editBtn" onClick={onEditPostHandler}>
                        수정
                    </button>
                    <button className="editBtn">삭제</button>
                </div>
            </div>
            <>
                {editPost ? (
                    <>
                        <textarea cols="80" row="5" value={content} onChange={onChangeContent} />
                        <button className="editBtn updateBtn">수정하기</button>
                    </>
                ) : (
                    <div className="content">{post.content}</div>
                )}
            </>
            <div className="content"></div>

            <div className="comment" onClick={onCommentBoxHandler}>
                <div className="total">댓글 {post.Comments.length}개</div>
                <div className="commentBtn">댓글 달기</div>
            </div>
            {commentBox && (
                <>
                    <CommentForm />
                    {post.Comments.length > 0 &&
                        post.Comments.map((v) => <Comment key={v.id} comment={v} />)}
                </>
            )}
        </StyledPost>
    );
};
export default Post;

const StyledAvatar = styled.img`
    box-sizing: border-box;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    text-align: center;
`;

const StyledPost = styled.div`
    box-sizing: border-box;
    max-width: 50rem;
    min-width: 18.75rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    border: 1px solid #ddd;
    padding: 1rem;

    & .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.6rem;
    }

    & .inner {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    & textarea {
        box-sizing: border-box;
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        resize: none;
        font-size: 0.875rem;
        color: #666;
    }

    & .name-date {
        display: inline-block;
        padding-left: 0.5rem;

        & .name {
            font-size: 0.875rem;
            color: #666;
        }

        & .date {
            font-size: 0.75rem;
            color: #999;
        }
    }

    & .editBtn {
        border: none;
        font-size: 0.75rem;
        color: #666;
        background: none;
        cursor: pointer;

        :hover {
            color: #000;
        }
    }

    & .updateBtn {
        width: 100%;
        text-align: right;
        padding-top: 0.7rem;
        font-weight: bold;
    }

    & .content {
        box-sizing: border-box;
        padding: 1rem 0;
        font-size: 0.875rem;
        color: #666;
    }

    & .comment {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #ddd;
        padding-top: 0.6rem;
        cursor: pointer;
        font-size: 0.75rem;
        color: #999;
    }
`;
