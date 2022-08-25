// input 을 통해 상태 관리 해보는 예시 
import React,{ useState } from 'react'

const Put = () => {
    const [putt, setPut] = useState("");

// input창에 입력에 대한 이벤트가 일어났을때, 일어나는 이벤트를 그대로
// 보여주는역할을 한다. 
const onChangeInput = (e) => {
  setPut(e.target.value);
};

// 입력한 값을 초기화 하는 상태에 대한 로직. 
const onChangereset = () => {
  setPut("");
};


  return(
    <div>
    <input 
    // 이 onchange의 이벤트 값에 대한 이름이 바뀌면 안됨. 
    onChange={onChangeInput}
    value={putt}
    placeholder="할 일을 적어주세요"/>
    <button 
    onClick={onChangereset}>초기화</button>
    <div>
      <b> 값: {putt}</b>
    </div>
  </div>
  
  )
};

export default Put;