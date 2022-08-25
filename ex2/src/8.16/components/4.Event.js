import { useState } from 'react';
// 1. 두개의 input 값에 이벤트 값을 출력해주는 로직 
// 2. 확인의 버튼을 눌렀을 때 alert 창에 메세지가 뜨는 로직 


/*
const Event = () => {

const [username, setUsername] = useState("")
const [message , setMessage] = useState("")

const ChangeUserName = (e) => setUsername(e.target.value)
const ChangeMessage = (e) => setMessage(e.target.value)

const click = () => {
  alert("값이 추가되었습니다")
  setUsername('')
  setMessage('')
}

const Cangekey = (e) => {
  if(e.click === 'Enter'){
    click();
  }
}
   return (
    <div>
      <input
       type="text"
       name='mesagge'
       value={username}
       onChange={ChangeUserName}
       placeholder="입력해주세용!"
       />

       <input
        type="text"
        name="message"
        value={message}
        onChange={ChangeMessage}
        placeholder="입력해달라궁"
        onKeyPress={Cangekey}
        />
        <button onClick={click}>입력</button>
        


    </div>
  )
}
*/

// 하지만 input 의 갯수가 많아지면 어떻게 하는게 가독성이 좋을까? 객체값으로 가져와보자.

const Event = () => {
  const[form, setForm] = useState ({
    username: "",
    message: ""
  });

  // 비구조화 할당으로 = form 객체  기본값을 가지고옴 . 
  const { username , message} = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]:e.target.value
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert("값이 추가 되었습니다");
    setForm({
      username : '',
      message : ''
    });
  };

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onClick();
    }
  }

  return(
    <div>
      <h1>이벤트 연습</h1>
      <input
      type="text"
      name='username'
      value={username}
      placeholder="입력해주세요"
      onChange={onChange}
      />

      <input 
        type="text"
        name="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="닉네임을 입력해주세요"
        />
        <button onClick={onClick}>확인</button>
    </div>
  )
  }


export default Event