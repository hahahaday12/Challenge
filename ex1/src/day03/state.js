import {useState} from "react";
import AddState from "./addState";

const State = () => {
    const[state, setState] = useState("state 처음 시작")

    const [userList, setUserList] = useState([
      {
          id:1,
          name: "김성용"
      },
      {
          id:2,
          name: "김사과"
      },
      {
          id:3,
          name: "김하은"
      },
  ])

  const onClickEvent = (idValue, nameValue) => {
      setUserList([...userList, {id: idValue, name: nameValue}])
  }
  return(
    <>
        {userList.map((item)=> (
            <div>
                {item.id}. {item.name}
                <button>삭제</button>
            </div>
        ))}
        <AddState 
            onClickEvent={onClickEvent}
            stateId={ userList.length > 0 && userList[userList.length-1].id}
        />
    </>
);
};
export default State;