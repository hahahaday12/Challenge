import { useState } from "react";

const AddState = ({onClickEvent, stateId}) => {
    const [name, setName] = useState('');

    const onChangeInput = (e) => {
      setName(e.target.value);
    }

    const onAddStateHandler = () => {
        onClickEvent(stateId + 1, name);
        setName('');
    }

    return (
      <>
        <input 
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={onChangeInput}
            //onChage = {() => onChangeInput()}
        />
        <button onClick={onAddStateHandler}>추가</button>
        <button>초기화</button>
      </> 
    );
}
export default AddState