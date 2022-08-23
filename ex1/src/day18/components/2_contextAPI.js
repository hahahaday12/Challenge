import { useContext, useEffect } from 'react';
import { Context } from '../reducer/2_context';
import AddState from './2.1addState';

// context 는 전역 상태 관리를 위한 도구 [redux가 context 기반으로 제작]
// 조금더 편하게 가져올수 있게 끔 state 로 예시 
//addState.js 로 예시를 들어보자. 

/*
이거 똑같이 addState 만들어보기. contextAPI를 addState처럼 만들어보기.

힌트! 
dispatch({
    type:
    id:
    name:
})
이런식..
*/

const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);

  useEffect ( () => {
        console.log(state);
  },[state]);

  return (
      <>

        
          <div>
              <button>삭제</button>
          </div>
          <AddState />
      </>
  );
};
export default ContextAPI;