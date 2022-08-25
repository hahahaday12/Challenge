import { useState } from 'react';

const AddState = ({onClickEvent, stateId}) => {
  
  const[name, setName] = useState('');

  const onChangeInput = (e) => {
    setName(e.target.value);
    console.log(name)
  }
  
  const onAddStateHandler = () => {
    onClickEvent(stateId + 1, name)
  }
  

  return(
    <>
    <input
        placeholder='입력해주세요'
        type="text"
        value={name}
        /*
        name을 ㄱ으로 적으면, 가지고와서 setName 바꿔줌. name값이 ㄱ으로 바뀌고 Value 가 ㄱ 값으로 변함.
        setName을 이용해 변함.
        */
        onChange={onChangeInput}
        // 매개변수 없는 상태에서 매개변수 받게 되면, 이벤트 일어난 객체 자체 가져옴 html태그를 가져옴. 
    />
    <button onClick={onAddStateHandler}>추가</button>
    <button>초기화</button>
    </>
  );
}

export default AddState