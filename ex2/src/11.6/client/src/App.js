import React from 'react';
import { Routes, Route} from 'react-router-dom';
import ThirdPage from './3Page';
import Onepage from './1Page';
import TwoPage from './2Page'
import axios from 'axios';
import PrivateRoute from "./privateRoute";
import Fourpage from './4Page';


var access;

function App() {

  // 
   access = localStorage.getItem("token");
   let check = false;

   if(access){
   check = true;
    //토큰 유효값에 대한. 어떤 api서버가 와줘야 한다.
       var data = {
         'accessToken' : access
       }
    
    axios.post("/token", {
      data,
    })
    .then((response) => {
      
    });
}
   return (
     <div className="App">
       <>
        <Routes>
          <Route path="/" element={<PrivateRoute authenticated={check}
          component={<ThirdPage/>} status={<Onepage/>}
          />}/>

          <Route path="/twopage" element={<TwoPage/>}/>
          <Route path="/thirdpage" element={<PrivateRoute authenticated={check}
          component={<ThirdPage/>}
          />}/>
          <Route path="/fourpage" element={<PrivateRoute authenticated={check}
          component={<Fourpage/>}
          />}/>
        </Routes>
        </>
     </div>
   )
};
export default App;