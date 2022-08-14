// useState 를 이용해서 상태값 바꿔주기 예제연습
// 추가를 클릭시 화면에 추가될 문장을 보이게 한다 
// 색상 버튼을 클릭시 화면에 나온 문장이 > 변경값의 색으로 바꾸게 한다. 

/* 
1. 생각의방❔  
> "완료" 를 눌렀을때 현재 나온 문장이 없어지는 로직을 구현하고 싶다. 
> 그럼 애초에 처음부터 문장이 보여졌다가 , 클릭 이벤트를 넣었을때 문장이 없어지는 매직. 
*/

import { useState } from 'react';
import styled from 'styled-components'


const Plus = () => {
  const [message, setMessage] = useState("");

  const onClickEvent = () => setMessage("나타났다😮")

// 1번 생각의방 해답 ✔ > 상태 변화 업테이트 로직의 기본값을 써주지 않아 아무것도 나오지 않게 . 
  const Clear = () => setMessage("")


  
  
  // 색상 변경에 대한 로직
  const [color, setColor] = useState("blak");

  

  return (
    <div>
      <button onClick={onClickEvent}>추가</button>
      <button onClick={Clear}>완료</button>
     

      <h1 style={{ color }}>{message}</h1>

      <button style = {{ color: 'orange'}} onClick={ () => setColor('orange')}>ORANGE</button>
      <button style= {{  color: 'blue' }} onClick={ () => setColor('blue')}>BLUE</button>
      <button style={{ color: 'yellow'}} onClick={ () => setColor('yellow')}>YELLOW</button>
    
      </div>
  );
}
;
export default Plus

// 하지만 이렇게 비구조 할당으로 일일히 객체 값을 넣어주는게..  코드가 지저분. 그럼 한곳에다가 적고 전달을 하면 어떻게


