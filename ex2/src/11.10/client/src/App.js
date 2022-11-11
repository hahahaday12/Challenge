import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from "./privateRoute";
import AuthService from './service/auth.service';
import Onepage from './1Page';
import TwoPage from './2Page'
import ThirdPage from './3Page';
import Fourpage from './4Page';
import Fivepage from './5Page';


 let check = false;

function App() {

 let access = AuthService.getCurrentUser();

  if(access){
     check = true; 
    axios.defaults.headers.common['Authorization'] = `Bearer ${access}`
    //헤더에 토큰값 지정 
    //토큰 유효값에 대한. 어떤 api서버가 와줘야 한다.
  
    axios.get("http://kai.dahyeon.us:10200/user")
    .then(response => {
       if (response.data.message === "successful") {
        console.log(response.data.data.user.name);
        console.log(check);
       }
    // 에러 처리 부분에 대한 토큰 지워주는 로직 작성. 
    })
};

  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={
            <PrivateRoute authenticated={check} component={<ThirdPage/>} status={<Onepage/>}/>
          }/>
          <Route path="/twopage" element={<TwoPage/>}/>
          <Route path="/thirdpage" element={
            <PrivateRoute authenticated={check} component={<ThirdPage/>}/>
          }/>
          <Route path="/fourpage" element={
            <PrivateRoute authenticated={check} component={<Fourpage/>}/>
          }/>
          <Route path="/fivepage" element={
            <PrivateRoute authenticated={check} component={<Fivepage/>}/>
          }/>


        </Routes>
      </>
    </div>
   )
};
export default App;