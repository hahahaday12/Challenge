// state 를 알아보기. 

import { useState } from 'react';
import AddState from './st.addstate';

const State = () => {
  const [state, setState] = useState ('state 처음시작')

    /*
{
  id: 1,
  name: 연필 
},
{
  id: 2,
  name: 지우개
},
{
  id: 3,
  name: 볼펜
},
])

// 여기서 객체를 추가 하고 싶으면? 
// 원본 데이터는 그대로 보존! 하되 값만 추가 하고 싶음. (불변성)

방법 : setState([...state,{id:4, name: 형광펜}])
setState 를 이용해 값을 추가 할수 있음. 

*/

const [userList, setUserList] = useState([
  {
    id:1,
    name: "연필"
  },
  {
    id:2,
    name: "지우개"
  },
  {
    id:3,
    name: "볼펜"
  }
])

const onClickEvent = (idValue, nameValue) => {
  setUserList([...userList, {id:idValue, name:nameValue}])
  }

return (
  <>
  {userList.map((item) => (
      <div>
        {item.id}. {item.name}
      <button>삭제</button>
      </div>
 
  ))}
  <AddState onClickEvent={onClickEvent}
    stateId={ userList.lenght > 0 && userList[userList.length-1].id}
  />
  </>
  );
};

export default State