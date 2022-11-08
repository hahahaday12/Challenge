import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import ThirdPage from './3Page';
import Onepage from './1Page';
import TwoPage from './2Page'
import axios from 'axios';
import PrivateRoute from "./privateRoute";
import Fourpage from './4Page';
import AuthService from './service/auth.service';


function App() {


 let access = AuthService.getCurrentUser();
 let check = false;

 console.log(access);
  if(access){
    check = true;
    //토큰 유효값에 대한. 어떤 api서버가 와줘야 한다.
    const data = {
      'accessToken' : access
      }
    axios.post(AuthService.API_URL + "/api", {
      data,
    })
    .then((response) => {
       check = true; 
    })
    
}
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
        </Routes>
      </>
    </div>
   )
};
export default App;