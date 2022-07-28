/* 
useReducer 은 useState 보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른값으로 
업데이트 해주고 싶을때. 

Reducer: 현재상태, 업데이트를 위해 필요한 정보를 담은 action 값을 전달받아 
새로운 상태를 반환하는 함수. 반드시! "불변성"을 지켜주어야 한다. 

function reducer(state, action) {
  return { ... };
}

액션값
{
  type: 'INCREMENT',
}
*/

// useReducer 의 가장큰 장접은 컴포넌트 업테이트 로직을 컴포넌트 바깥으로 빼내 쓸수 있음. 
import { useReducer } from 'react';
function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value:state.value + 1};
    case 'DECREMENT':
      return { value: state.value - 1};
    default:
      //아무것도 해당되지 않을 때 기존 상태 반환 .
     return state;
  }
}

const Counter = () => {           
//[현재 상태, 액션발생 함수]        //(리듀서 함수, {리듀서 기본값})
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={ () => dispatch( { type: 'INCREMENT'})}>+1</button>
      <button onClick={ () => dispatch( {type: 'DECREMENT'})}>-1</button>
    </div>
  );
};

export default Counter;