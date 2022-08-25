// usememo 는 함수 사용을 못함. 무한 반복이기 때문에 useCallback 을 사용하는게 좋다. (변수처럼 사용가능, useRef)
// usecallack 은 함수 처럼 선언 가능.   useCallback은 함수 만들때 무조건 필수!!!!! 

import { useCallback, useState } from 'react';

const Callback = () => {

const [color, setColor] = useState("red");

// 콜백이 의존성 배열이 바뀔때만 값이 재선언 된다.
// 얘는 지금 color가  바뀔때마자 재선언. 레드에서 블루로 될때마다 재선언. 
// [color] 을 넣지 않았을때는 , 처음 한번만 인식되고, 변하는 값들을 인식하지 못한다. 
const onChangeColor = useCallback( ()=> {
  if(color === "red"){
      setColor("blue")
  } else {
    setColor("red")
  }
},[color])
  // 두번째로 받아오는 인자값. 
  return(
    <>
      <div>useCallack</div>
      <input type="text" readOnly value={color} style={{color}}/>
      <button onClick={onChangeColor}>변경</button>
    </>
  )
}
export default Callback
