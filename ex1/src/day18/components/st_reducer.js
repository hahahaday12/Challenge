import { useReducer, useCallback } from 'react';
import { reducer } from '../reducer/st_index';
// 3. 따로 빼둔 로직을 import 시킨다. 

/*
 Reducer, 는 현재 상태를 바꾸는 업데이트 하는 로직을 밖으로 빼내서 관리하는것. 
 일일히 다 바꿔줄수 없으니 하나의 store 로 관리하며 변경된 값을 알려준다. 
 중요한 키포인트는 "전달" 이다. 전달에 대해 잘 생각해보자. 
*/

const Reducer = () => {
/*기본값*/ const ducerState = 0;

const [ number, dispatch ]=useReducer(reducer,ducerState); 
//4. 리액트의 기능 useReducer 통해 안에 인자로 전달
//5. export 한 reducer 로직자체, 첫번째 매개 변수로 넣어준다.
//6. 두번째 매개 변수로 , reducer 에 있는 state 값전달. 상태관리 로직, ducerState 를 넣어준다.
//7. 일반 함수는 버츄얼 돔이 인지를 못하기 때문에 , 인지할수 있는 state상태로 만들어준다. 
//8. action 값을 전달해주기 위해, action 값을 전달해줄수 있는 상태인, dispatch 상태를 이용해서 변화를 해줌. 
//9. dispatch를 이용해 , 이벤트를 넣어주자! 함수 선언해서. 함수 안에다가 타입을 다 넣움.

const onUp = useCallback ( () => {
  dispatch(
    {
      type: "INCREMENT",
    }
  );
},[]);

const onDown = useCallback( ()=> {
    dispatch(
      {
        type: "DECREMENT",
      }
    )
},[]);



  return(
    <div>
        <p>{number}</p>
        <button onClick={onUp}>+</button>
        <button onClick={onDown}>-</button>
    </div>
  )



}

export default Reducer

/*
useReducer(내가 만든 reducer로직, 밖에 로직을 관리할 변수) => 
dispatch = 전달 매개체 action 값 ( reducer에 데이터) 전달
변수를 스테이트로 변환. 

리턴값으로 
[변환받을 스테이트 명,dispatch]
dispatch = 전달 매개체 action 값(reducer에 데이터) 전달. 
*/