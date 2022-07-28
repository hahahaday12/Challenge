// input 박스 입력으로 이벤트 핸들링 익히기 
// onChange 에 관한 함수 두개를 밖에다가 입력 
// 단점: input의 개수가 많아지면 코드가 복잡해질수 있음. 

import { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ':' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = e => {
    if (e.key === 'Enter'){
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type='text'
        name='username'
        placeholder='사용자명'
        value={username}
        onChange={onChangeUsername}
        />
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해보세요'
          value={username}
          onChange={onChangeMessage}
          onkeyPress={onKeyPress}
          />
         <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;