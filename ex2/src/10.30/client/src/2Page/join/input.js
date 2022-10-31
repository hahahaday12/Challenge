import styled from 'styled-components';
import { useInput } from "../../hook/useInput";
import {useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import axios from 'axios'
import { useState, useCallback } from 'react';
import { useRef } from 'react';
import { renderChunkContent } from '@fullcalendar/react';



const Joininput = () => {
  const [email, onChangeUserEmail, setEmail] = useState("");
  const [name, onChangeUserName] = useState("");
  const [password, onChangeUserPasswrod] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordCheck, setPasswordCheck] = useState(false);
  const navigator = useNavigate();

  //   const onChangeConfirmPassword = useCallback(
  //   (e) => {
  //     setConfirmPassword(e.target.value);
  //     setPasswordCheck(e.target.value !== password);
  //   },
  //   [password]
  // );

   const pwExp = useRef(
     /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
   );

   const emailExp = useRef(
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    );


    const onSignHandler = useCallback(
      (e) => {
        e.preventDefault();
        if (!pwExp.current.test(pw)){
            if (!alert('비밀번호 형식이 일치하지 않습니다.(대문자, 소문자, 특수문자 포함)')) {
               setPasswordCheck('');
               return;
            }
        }
        if (!emailExp.current.test(email)) {
          if (!alert('이메일 형식이 일치하지 않습니다')) {
                    setEmail('');
                    return;
          }
      }

      const data = {

      }

    },
    );




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
            onChange={setConfirmPassword}
            />
          </div>
          {confirmPassword && passwordCheck && (
            <CheckMessage>비밀번호가 일치하지 않습니다.</CheckMessage> )} 

        {/* <Link to="/thirdpage"> */}
        <button
          type="submit"
           onClick={
            // () => {
            // alert('가입되었습니다.')
            // navigator("/")
          onSignHandler
           }
            >
          <It>가입하기</It>
          </button>



        {/* </Link>*/}

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
    font-size: 0.875rem;
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



