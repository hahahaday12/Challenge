import styled from "styled-components";

const TodoTitle = ({state}) => {
  return (
    <div>
      <Title>
      🐾오늘의 할일 <span> {state.length} </span>개
      </Title>
      
    </div>
  );
};

export default TodoTitle;

const Title = styled.div`
  border-radius: 30px;
  width: 500px;
  margin-left: 25rem;
  font-size: 2rem;
  padding: 1rem;
  color: #fff;
  background-color: orange;
  text-align: center;
 align-items: center;


  `;