// 이벤트 버튼을 만들어 todo 추가하기 
import { useCallback, useState } from 'react';
import styled from "styled-components";


const TodoForm = ({ onAddHandler, id }) => {
  const [todo, setTodo] = useState("");

  const onAddState = useCallback( () => {
    onAddHandler(id + 1,todo);
    setTodo("");
  },[id, todo, setTodo, onAddHandler]);
       
const onChangeTodo = (e) => {
  setTodo(e.target.value);
};

  
  
  return (
    <div>
      <TodoaddInput 
      type="text"
      value={todo}
      onChange={onChangeTodo} 
      placeholder="할 일을 적어주세요"/>
      <TodoButton onClick={onAddState}>추가</TodoButton>
    </div>
  )}