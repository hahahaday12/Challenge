import { useState } from 'react';

const AddState = ({onClickEvent, stateId}) => {

  
const [name, setName] = useState('');

const onChangeInput = (e) => {
  setName(e.target.vlaue);
  console.log(name)
}

// {onClickEvent} 이 함수를 실행시켜주는 함수를 만든다. 
/*  아이디 밸류, 네임밸류 에서 어떤 값을 가져올까나?  
> 답 : input 의 아이디 밸류를 가져옴. 어떻게? 마지막 인덱스 + 1 */
const onAddStateHandler = () => {
  onClickEvent(stateId + 1, name);    //(idValue)
}         /*이전에 length -1 로 해서 마지막 인덱스 번호를 2로 맞춰주었고 그 이후 에 추가버튼을 눌러 새로운 인덱스
번호를  추가 하고 싶으니까, 다음 숫자로 넘어가야 하니까Id + 1  로 쓸수가 있다. */

  return(
    <>
    <input
      type="text"
      placeholder='이름을 입력하세요'
      value={name}
      onChange={onChangeInput}

      />              {/*onClickEvent*/}
      <button onClick={onAddStateHandler}>추가</button>
      <button>초기화</button>
      </>
  );
}
export default AddState