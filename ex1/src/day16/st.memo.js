/*  useMemo : 연산된 값(결과)를 반환하여 랜더링 되었을 때 재사용할 수 있도록 해주는 Hooks 함수
    처음에 계산된 결과값을 메모리에 저장해서 컴포넌트가 반복적으로 렌더링이  되어도 
    계속 호출하지 않고 이전 계산된 결과값을 메모리에 꺼내와서 재사용이 가능
*/

/*  (1) 첫번째로-> 콜백함수 , 두번째로 -> 의존성 배열 
    (2) 두번째 인자인 배열의 요소 값이 업뎃될때만 콜백함수 다시 호출해서 memoization 된 값을 업뎃 해줘서 다시 memoization 해줌. 
    만약 빈배열([])을 넘겨 주면 맨 처음 컴포넌트가 마운트 되었을 때만 값을 계산하고 이후에는 항상 memoization된 값을 꺼내와서 사용
    (3) 단점 !! 값을 재활용해서 메모리를 소비해서 저장해놓은 것이라, 불필요한 memoization을 하게 되면 성능이 나빠질수 있으므로 필요할때만!
*/

import { useMemo, useState } from 'react'

const Memo = () => {

  const [color, setColor] = useState("red");
  const [text, setText] = useState("");

  const getColor = useMemo( ()=> console.log(`색은${color} 입니다`),[color]);
   /*
    useMemo에는 함수를 잘 담지 않고
    값이 바로 선언되기 때문에 변수를 담습니다. 
    즉 해당 값이 의존성 배열에 있는 값이 바뀌어야만 랜더링 시 재 호출되기 때문에
    [메모이제이션]을 실현할 수 있다.
    안바뀌면 실행되지 않음 선언하지 않음. 
    */
  const getText = useMemo( ()=> console.log(`텍스트는 실행하지 않습니다`),[text])
  // getText(); -> 원래 이렇게 적어야 함수가 실행되지만, 적지 않아도 실행된다. 콘솔적은곳에다 함수 적으면 실행.보통 값넣음
  // usememo 는 바로 실행되기 때문에 함수를 담는것은 부적합 하다.
  
  const onChangeColor = () => {
    if(color === "red"){
      setColor("blue")
    } else {
      setColor("red")
    }
  }

  return(
    <>
    <div>Memo</div>
    <input type="text" readOnly value={color} style={{color}}/>
    <button onClick={onChangeColor}>변경</button>
    </>
  )

}
export default Memo; 