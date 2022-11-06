
import React from 'react';
 import { Navigate} from 'react-router-dom';


function PrivateRoute  ({ authenticated, component:Component, status:Status})  {
    let result;

    if(authenticated){
      result = Component;
    }
    if(!authenticated){
      if(!Status){ 
        result = <Navigate to='/'  />;
      }else{
        result = Status;
      }
    }
   
   return result;
 }
 export default PrivateRoute;



