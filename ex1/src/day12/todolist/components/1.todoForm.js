//강의를 다시 처음 부터 듣기로 했다. 
// 맨처음 리액트를 시작했던 때부터 다시 복습중이다. 
import styled from 'styled-components';
const TodoForm = () => {
  return(
    <div>
      <TodoaddInput type="text" placeholder='할 일을 적어주세요'/>
      <TodoButton>추가</TodoButton>
    </div>
  )

  
}
export default TodoForm;

const TodoaddInput = styled.input`
    border-radius: 5px;
    width: 500px;
    font-size: 32px;
    position: relative;
    padding-left: 20px;
`

const TodoButton= styled.button`
  border-radius: 5px;
  width: 53px;
  height: 43px;
  position: absolute;
 
`