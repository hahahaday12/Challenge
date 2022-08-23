import { useState, useRef } from 'react';
import styled from 'styled-components';

const TodoList = ({onRemoveHandler, state}) => {
  
  
  const onRemoveClick = () => {
    onRemoveHandler(state.id);
  };


const TodoListe = ({ todos, setTodos }) => {
    const editInputRef = useRef(null);
  
  
    const onChange = (event, id) => {
    const [todo, setTodo] = useState("");
    // 수정 input value값이 todos data에 입력
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          item.data = event.target.value;
        }
        return item;
      })
    );
  };


  const editBtn = (id) => {
    // 수정 버튼 클릭시 isEdit 실행
    IsEdit(id);
  };

  const IsEdit = (id) => {
    setTodos(
     todos.map((item) => {
        if (item.id === id) {
          item.isEdit = !item.isEdit;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <List>
      {state.id}.{state.Todo}
      </List>
     <button onClick={onRemoveClick}>삭제</button>
     <button onClick={() => editBtn(item.id)}>수정</button>
     <input
                // 수정시 입력 부분 (item.isEdi이 True 일때)
                  className={`listInput ${item.isComplete ? "complete" : ""}`} // 완료 버튼 클릭시 클래스 바뀜
                  type="text"
                  defaultValue={item.data} // todos의 data
                  onKeyPress={(event) => pressEnterKey(event, item.id)} // 키를 누를 경우 이벤트 발생
                  ref={editInputRef}
                  autoFocus="autofocus" // 자동적으로 input에 포커스 됨
                  onChange={(event) => onChange(event, item.id)}
                />
    
    </div>


  );
};


export default TodoList;

const List = styled.div`
  margin-top: 10px;
  margin-left: 600px;
`;
