import { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const LoginInput = () =>{
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
       const navigator = useNavigate();

    const onClickEvent = () => {
      //console.log(email,password);
    var data = {
    id: email,
    password: password
  }
  console.log(data);
  axios.post('http://kai.dahyeon.us:10200/user/signin', 
    data
  )
  .then((response) => {
    // Handle success.
    console.log(response.data);
    if(response.data.message === "successful"){
      //로컬 스토리지에 저장 
      localStorage.setItem('token', response.data.token);
      alert("로그인 되었습니다.");
      navigator("/thirdpage")
    }
    
     }).catch(error => {
  // Handle error.
    console.log('An error occurred:', error.response);
    alert(error.response.data.errorMessage);
  });
};

    return(
      <>
        <Inputbox>
          <div>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              autoComplete="on"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)}}
              />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              autoComplete="on"
              value={password}
              onChange={(e) => {
              setPassword(e.target.value)}}
              />
          </div>

        </Inputbox>

        <Link to="" style={{width: "410px", height: "70px"}}>
                <InerButton
                    onClick={onClickEvent}>
                    로그인
                </InerButton>
            </Link>
            </>
        
    )
}
export default LoginInput;

const Inputbox = styled.div`
  width: 410px;
  height: 150px;
  margin-bottom: 30px;
`

const LoInput = styled.input`
  width: 405px;
  height: 65px;
  border: none;
  border-bottom: 4px solid #afafaf;
  background-color: rgba(0, 0, 0, 0);
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 30px;
  }
  &:focus {
    outline: none;
    ::placeholder {
      display: none;
    }
  }
`

const TwoInput = styled.input`
  width: 405px;
  height: 65px;
  border: none;
  border-bottom: 4px solid #afafaf;
  background-color: rgba(0, 0, 0, 0);
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 30px;
  }
  &:focus {
    outline: none;
    ::placeholder {
      display: none;
    }
  }
`
const InerButton = styled.button`
    width: 410px;
    height: 70px;
    border-radius: 15px;
    background-color: #545454;
    border: none;
    color: white;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    margin: 0 auto;
`