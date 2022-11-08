
import React from 'react';
import {Navigate} from 'react-router-dom';

function PrivateRoute({authenticated, component:Component, status:Status}){
    let result;
    if(authenticated){ //토큰값이 있을때
        result = Component; // 상태값을 담아줌. 
    }else{
        result = !Status ? result = <Navigate to='/'/> : result = Status;
    }
    return result;
}
export default PrivateRoute;



