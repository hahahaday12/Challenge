import { useCallback, useEffect, useState } from 'react';

const Effect = () => {
  
  const[color, setColor] = useState("red")

  const onChangeColor= useCallback(()=>{
    if(color==="red"){
        setColor("blue")
    } else {
      setColor("red")
    }
  },[color])

  useEffect( ()=> {
    console.log("페이지가 열렸습니다.")
  },[])

  useEffect( ()=> {
    console.log("색이 바뀌었습니다.")
},[color])

// 페이지가 열렸을 때와 닫혔을때, 그리고 안에 의존성 배열이 바뀌었을때 안에있는 실행문 시켜줄수 있음. 
  return (
    <>
        <div>Effect</div>
        <input type="text" readOnly value={color} style={{color}}/>
      <button onClick={onChangeColor}>변경</button>
    </>
  )
}
export default Effect;