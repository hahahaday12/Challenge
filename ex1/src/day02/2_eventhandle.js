/* 외부에다가 선언된 onChange 를 더 간단하게 하기 위해 
e.target.name 을 활용하여 만듬 , "useState"를 통해 문자열이 아닌 객채로 넣음. */

import { useState } from 'react';

const EventPractice = () => {
  const [from,setForm] = useState({
    username:'',
    message:''
  });
  const { username, message } = from;
  const onChange = e => {
    const nextFrom = {
      ...from,
      [e.target.name]: e.target.value
    };
    setForm(nextFrom);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username:'',
      message:''
    });
  };
  const onkeyPress = e => {
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
        onChange={onChange}
        />
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요'
          value={message}
          onChange={onChange}
          onkeyPress={onkeyPress}
          />
          <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;