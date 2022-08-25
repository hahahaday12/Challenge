import { useState } from 'react';
import './Vaildation.css';

const Vaildation = () => {
  const[Word, setWord] = useState ({
    passWord: "",
    clicked: false,
    Vaildated: false
  });

  const {passWord, clicked, Vaildated } = Word;

  const handleChange = (e) => {
      const nextForm = {
        ...Word,
        [e.target.passWord]:e.target.value
      };
      setWord(nextForm);
    };
  
    // 문제점 : 0000 을입력하고 검증하기 누르면 클릭이 먹히지 않음.. 
    
  const ButtonClick = (e) => {
      const Click = {
          clicked: true,
          Vaildated: passWord === "0000"
      }
    }

  return (
  <div>
    <input
    type="text"
    name='passWord'
    value={passWord}
    placeholder="비밀번호를 입력해주세요"
    onChange={handleChange}
    className={clicked ? (Vaildated ? 'success' : 'failure') : ''} 
    />
    <button onClick={ButtonClick}>검증하기</button>
  </div>
  );
}

export default Vaildation;