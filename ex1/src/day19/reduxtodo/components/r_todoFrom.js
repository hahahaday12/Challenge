import { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { INSERT_TODO } from '../reducer/r_todo';

const TodoForm = ( ) => {
    
    const dispatch = useDispatch();
    const state = useSelector ( (state) => state.todo )

  /*
  useSelector가 선택하는거. 어디에서? _index.js 에서 모든 state의 
  값을 가져오되 .todo에 있는 state의 값을 가져와라.
  rootReducer 설정 (reducer들을 combine)
  => 리덕스 설정에서 store에 매개변수로 전달 (저장소에 저장)
  => useSelector ( () 결과값이 reducer에서 만든 모든 state들 중에서 
  내가 원하는 reducer의 state들이 전달되고 그정에서 하위선택자들
  이용. 내가 원하는 reducer의 state를 가지고 올수 있다. 

## 이제 전역적으로 관리해주던 로직을 이용해, addState와 removetodo 구현하기 
  */

//📍input창에 입력하는 로직. 이벤트가 일어나는 즉시 보여주는. 
    const[todo, setTodo] = useState("");
    const onChangeTodo = useCallback(
        (e) => {
            setTodo(e.target.value);
        },
        [setTodo]
    );

    //📍 추가 누르면 값을 추가 하는 로직. 
    const onAddState = useCallback(()=> {
        dispatch({
            type:INSERT_TODO,
            data: {
                id: state[state.length -1].id + 1, 
                todo: todo,
            },
        })
        setTodo("")
    }, [state, todo, dispatch]);

// 이제 pages todo 에 들어가서 todo 값, onAddHandler의 값지워줌.
    return (
        <div>
            <TodoaddInput
                type="text"
                value={todo}
                onChange={onChangeTodo}
                placeholder="할 일을 적어주세요"
            />
            <TodoButton onClick={onAddState}>추가</TodoButton>
        </div>
    );
};
export default TodoForm;

const TodoaddInput = styled.input`
    border-radius: 5px;
    width: 500px;
    font-size: 32px;
    position: relative;
    padding-left: 20px;
`;
const TodoButton = styled.button`
    border-radius: 5px;
    width: 53px;
    height: 43px;
    position: absolute;
`;