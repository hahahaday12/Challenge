import { useState, useCallback } from 'react';
import TodoFrom from '../components/todoFrom';
import TodoList from '../components/todoList';
import TodoTitle from '../components/todoTitle';

const Todo = () => {
  const [state, setState] = useState([
    {
      id: 1,
      Todo: "밥먹기",
    },
    {
      id: 2, 
      Todo: "잠자기",
    },
    {
      id:3,
      Todo: "공부하기",
    },
  ]);

  

// 값 추가하기
const onAddHandler = useCallback(
  (id, todo) => {
    setState([...state,{id:id,Todo: todo}]);
  },
  [state]
);


// 삭제 버튼 이벤트 있음.
const onRemoveHandler = useCallback(
  (id) => {
    const removeState = state.filter( (item) => item.id !== id);
    setState(removeState);
    },[state]);
  

 




  return (
    <>
    {/* 타이틀을 보여주는곳 */}
    <TodoTitle state = {state}/>

    {/* 추가버튼 */}
    <TodoFrom 
      onAddHandler={onAddHandler}
      id={state.length > 0 && state[state.length - 1].id}
      />
    {state.map ((v) => (

 /* 투두리스트에 있는 리스트내용 보여주는곳 */
    <TodoList 
      key={v.id}
      onRemoveHandler={onRemoveHandler}
      state={v}
    />
    ))}
  </>
  );
};

export default Todo;