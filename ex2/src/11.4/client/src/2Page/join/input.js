import styled from 'styled-components';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import { useState, useCallback } from 'react';
import { useRef } from 'react';

const Joininput = () => {
  // 이름 , 비밀번호, 이메일 , 비밀번호 확인 
const [email, onChangeUserEmail] = useState("");
const [name, onChangeUserName] = useState("");
const [password, onChangeUserPasswrod] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");


//비밀번호 유효성 검사 
const [passwordCheck, setPasswordCheck] = useState(false);

// 페이지 이동. 
const navigator = useNavigate();

const onChangeConfirmPassword = useCallback((e) => {
  setConfirmPassword(e.target.value);
  setPasswordCheck(e.target.value !== password);
},[password]);

const register = (e) => {
  //입력값 체크 함수를 만들어서 체크하던지  하나씩 아래처럼 체크하던지       

if(!onSignHandler()){ 
      return; 
  };

const data = {
  id: email,
  name: name,
  password: password
  }
  console.log(data);
  axios.post('http://kai.dahyeon.us:10200/user', 
    data
  )
  .then((response) => {
    // Handle success.
  console.log('Well done!');
  console.log('User profile', response.data.user);

    // 토큰값이 유효한지에 대한 유무를, 프론트엔드에서 할껀지 백엔드에서 할껀지.
    // 화면에 처음 들어왔을때 localStorage에 토큰값이 있는지 체크후 
    // 있으면 해당 토큰값을 get이든 post든 데이터 담아서 
    // 백엔드에게 전송후 유효한값이면 로그인시켜주고 () 
    // 유효하지않으면 로그인하는 화면에 보여주면 된다.
  alert('가입되었습니다.')
  navigator("/")
  }).catch(error => {
  console.log('An error occurred:', error.response);
  alert(error.response.data.message);
  });
};

const pwExp = useRef(
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
);
const emailExp = useRef(
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
);

const onSignHandler = useCallback((e) => {
const statusCheck = false;

if (!emailExp.current.test(email)) {
if (!alert('이메일 형식이 일치하지 않습니다')) {
    onChangeUserEmail('');
    return statusCheck;     
    }
  }

  if (name == null || name === "") {
    alert("이름을 입력해주세요.");
    return statusCheck;
  }

  if (!pwExp.current.test(password)) {
    if (!alert('비밀번호 형식이 일치하지 않습니다.(대문자, 소문자, 특수문자 포함)')) {
        setPasswordCheck('');
        return statusCheck;
    }
  }
    return true;
});
   return(
    <JoinFrom>
        <div>
          <input
              type="email"
              placeholder="이메일을 입력하세요"
              autoComplete="off"
              value={email}
              onChange={(e) => {
              onChangeUserEmail(e.target.value)}}
              />
          </div>
          <div>
            <input
              type="text"
              placeholder="이름을 입력하세요"
              autoComplete="off"
              value={name}
              onChange={(e) => {
              onChangeUserName(e.target.value)}}
              />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              autoComplete="off"
              value={password}
              onChange={(e) => {onChangeUserPasswrod(e.target.value)}}
              />
          </div>
          <div>
            <input
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            autoComplete="off"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            />
          </div>
          {confirmPassword && passwordCheck && (
          <CheckMessage>비밀번호가 일치하지 않습니다.</CheckMessage>)} 
  
          <button
          type="submit"
          onClick={() => {            
          register();
          }}>
          <It>가입하기</It>
          </button>
       
          <Linkbox>
            <Link to="/"><Pt>돌아가기</Pt></Link>
          </Linkbox>
    </JoinFrom>
  );
};
export default Joininput;

const JoinFrom = styled.div`
  box-sizing: border-box;
  max-width: 56rem;
  max-height: 18.75rem;
  width: 600px;
  height: 300px;
  margin: 30px;
  text-align: center;

  & input {
    box-sizing: border-box;
    width: 410px;
    margin-bottom: 30px ;
    border: none;
    border-bottom: 4px solid #afafaf;
    font-size: 0.875rem;
   
    top:200px;
    height: 65px;
  }

  & input::placeholder {
    font-size: 25px;
    color: #ccc;
  }

  & input:focus {
    outline: none;
    border: 1px solid #7784cc;
    box-shadow: 0 0 0 0.1rem rgb(59 65 99 / 25%);
  }

  & button {
    box-sizing: border-box;
    width: 410px;
    height: 70px;
    margin: 0.2rem;
    padding: 0.3rem 0;
    border: none;
    font-size: 0.875rem;
    color: #fff;
    background: #545454;
    border-radius: 15px;
    cursor: pointer;
  }
  & button:hover {
    background: #B2B2B2;
  }
  & a {
    display: block;
    font-size: 0.775rem;
    color: #666;
  }
`;

const CheckMessage = styled.p`
  width: 50%;
  margin: 0 auto;
  font-size: 0.875rem;
  color: red;
  text-align: left;
`;

const Linkbox = styled.div`
  margin-left: 150px;
  width: 150px;
  height: 100px;
  background-color: white;
  text-decoration: none;
  display: flex;
  position: absolute;
  margin-top: 20px;
`
const It = styled.div`
  font-size: 30px;
  margin-bottom: 2px;
`
const Pt = styled.div`
  font-size: 30px;
  text-decoration: none;
`



