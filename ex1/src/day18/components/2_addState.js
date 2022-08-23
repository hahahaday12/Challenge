/*
addState 로 연습해보자 .  일단, input 창 만들어주고 
input창에 적을수 있는 코드 로직을 적고, 입력되는 순간의 
이벤트를 받아 창에 나타낼수 있게끔의 로직을 같이 적어놓음
*/
import { useState} from "react";

const AddState = () => {
    const [name, setName] = useState("");
    const onChangeInput = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={onChangeInput}
            />
            <button>추가</button>
            <button>초기화</button>
        </>
    );
};
export default AddState;
