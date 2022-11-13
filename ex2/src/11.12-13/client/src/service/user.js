import styled from 'styled-components';
import {React} from 'react';
//import {useName} from '../_state/index';
//import UserObject from '../_state/index';
import { useRecoilState} from 'recoil';
import axios from 'axios';
import { useEffect } from 'react';
import UserName from '../Layout/user'
import {userState} from '../recoil/user';
import AuthService from '../service/auth.service'
import { useNavigate } from 'react-router-dom';


const Usertitle = () => {
const navigate = useNavigate();
  const [users, setUsers] = useRecoilState(userState);
        axios.get("http://kai.dahyeon.us:10200/user")
          .then(response => {
          console.log(response.data)
          setUsers(response.data.data.user.name);
            },(error) => {
              AuthService.logout();
              // alert(" 잘못 접근하셨습니다.");
              //navigate('/');
         });
  
      return(
          <>
            <UserName users={users}/>
          </>       
        )
      };
export default Usertitle;

