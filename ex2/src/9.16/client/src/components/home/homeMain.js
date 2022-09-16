import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { LOAD_ALLPOSTS_REQUEST } from '../../reducer/post';
import userSaga from '../../saga/user';
import Post from "./post/post";
import PostForm from "./post/postForm";



const HomeMain = () => {
    // action과 데이터값 전달 = 비둘기 , 무조건 완벽하게 파악하기!!!!!!!!!!!!!
    // 🔥이제 백엔드에서 받아온 데이터를 나타내야 한다!
    const dispacth = useDispatch();
    const {allPost} = useSelector((state)=> state.post);
    // post reducer 에서 allPost 라는 비구조화 할당값 가지고옴.

    useEffect( ()=> {
        dispacth({
            type: LOAD_ALLPOSTS_REQUEST,
        });    
    },[]);

    return (
        <StyledWrap>
            <PostForm />
            {/* map 을 쓰면 무조건 key 값을 넣어주어야 한다. 그리고 props 로 v 객체를 전달해줌. */}
            {allPost.length>0 && allPost.map((v) => <Post key={v.id} post={v}/>)}
        </StyledWrap>
    );
};
export default HomeMain;

const StyledWrap = styled.div`
    box-sizing: border-box;
    max-width: 50rem;
    min-width: 18.75rem;
    width: 80%;
    height: 100%;
    margin: 0 auto;
`;
