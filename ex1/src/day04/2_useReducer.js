import { useReducer } from 'react';

function reducer(state, action){
  return{
    ...state,
    [action.name]:action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer,{
    name: '',
    NickName: '',
    PhoneNumber:''
});

const { name, NickName, PhoneNumber } = state;
const HandleChange = e => {
console.log(e.target);
  dispatch(e.target);
};

return(
  <div>

    <div>
      <input name='name' value={name} onChange={HandleChange} />
      <input name='NickName' value={NickName} onChange={HandleChange} />
      <input name='PhoneNumber'  value={PhoneNumber} onChange={HandleChange} />
    </div>
 

  <div>
   <div>
      <b>이름:</b> {name}
    </div>

    <div>
      <b>닉네임: </b>
      {NickName}
    </div>

{/* 오류 : INPUT 창에는 번호가 입력이 되는데 아래에서는 입력 번호를 받아오지 못함. 
ㅡㅡ 문제가 소문자였음..  */}
    <div>
      <b>전화번호: </b>
     {PhoneNumber}
     
    </div>

  </div>
</div>
);
};

export default Info;