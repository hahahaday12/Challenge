import { useEffect, useContext, useCallback }from "react"
import { Context } from '../reducer/2_context';
import AddState from './2.1addState';

const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);


 

const OnDown = useCallback((id) => {
  dispatch({
    type: "REMOVE_STATE", // 이거 action 명이 한글자라도 틀리면, 에러가 난다. 
    id: id,
  });
},[]);

  return (
    <>  
        {state.map( (v) => (
          <div key={v.id}>
            {v.id}. {v.name}
          <button onClick={() => OnDown(v.id)}>삭제</button>
      </div>
        ))}
        <AddState />
    </>
);
};
export default ContextAPI;