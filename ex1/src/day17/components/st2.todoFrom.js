import { useState, useCallback } from 'react';
import styled from 'styled-components';

const TodoFrom = ({onAddHandler, id}) => {
  const [todo, setTodo] = useState("");


const onAddState = useCallback( () => {
  onAddHandler(id + 1, todo);
  setTodo("");
},[id, todo, setTodo, onAddHandler]);


/*
입력값이 바뀔때마다, 이벤트가 일어남으로 
그 이벤트가 일어나는 값들을 받아서 보여준다. 
따라, e객체를 받고 setTodo에 값으로 value 값. 
set
*/
const onChangeTodo = useCallback( 
  (e) => {
    setTodo(e.target.value);
  },[setTodo]);


  return (
    <div>
      <TodoaddInput
        type="text"
        value={todo}
        onChange={onChangeTodo}
        placeholder="당신의 하루를 응원합니다."
        />
      <TodoButton onClick={onAddState}>추가</TodoButton>


    

    </div>
  );
};

export default TodoFrom;

const TodoaddInput = styled.input`
    margin-top: 10px;
    margin-left: 500px;
    border-radius: 10px;
    width: 300px;
    font-size: 22px;
    position: relative;
    padding-left: 20px;
`;

const TodoButton = styled.button`
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 5px;
      width: 45px;
      height: 30px;
      position: absolute;
      background-color: beige;
`;