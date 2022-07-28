import { useState } from "react";
import AddState from './s.addState';

const State = () => {
  const[state, setState] = useState("state 처음 시작")

  const [userList, setUserList] = useState([
    {
      id:1,
      name:"사과"
    },
    {
     id:2,
     name:"바나나" 
    },
    {
      id:3,
      name:"자두"
    }
  ])

  const onClickEvent = (idValue, nameValue) => {
    setUserList([...userList,{id: idValue, name:nameValue}])
  }

  return(
<>

  {userList.map((item) => ( // map은 한줄한줄 데이터를 읽는거고, 그 데이터틑 (item)이라는 이름으로 받아옴. 성공한 결과값

        <div>
          {item.id}. {item.name}
          <button>삭제</button>
        </div>
      ))}
      <AddState
        onClickEvent={onClickEvent}    //이렇게만 쓰면 length 가 0일때 못읽음.
        stateId={userList.length > 0 && [userList.length-1].id}
        // stateId 라는 값을 전달 : userList 에 userList.length 길이의 - 1 . 지금 현재 랭쓰의 길이는 3
        // 근데 -1 하면 2가됨. 2는 뭐? 마지막 인덱스임. [0,1,2] 해서 마지막 인덱스 2. 거기있는 속성의 id 값
        // 따라 length 0 보다 큰 경우라고 식을 써주어야 함. 
        />
</>

  );
};
  export default State;

  /*

  ? : 백엔드 받아오는 데이터 형식은 배열인 경우가 많음.
   => 배열로만 받아올때 쓰일수 있는것.,  

  리액트에서 많이 쓰이는 3대장
  1.map (해당 배열을 하나씩 가져와서 읽을수 있는 함수)

  2.find / findIndex
  [검색, 조건에 맞는 데이터를 읽어오는것]
  => 주로 배열 내에서 조건식을 만족하는 값/ 인덱스를 찾아올 때 사용 ..

  ex) 
  (1). 배열명. find( (결과값 변수명) => 조건식)


  > userList.find( (item) => item.id === 1).name // 사과 > 아이디가 1인 객체 전체를 찾아옴. 

  (2) findIndex

  > userList.findIndex((item) => item.id === 1)  // 여기서 내가 인덱스 번호를 이용해 사과를 가져오고 싶다. 
    답 : userList[0].name

  3.filter 
      [거름망, 조건에 맞는 데이터를 제외하는 읽어오는것]
      => 삭제시 백엔드에서 받아오는 데이터가 있음. 

      ex) 
      배열명.filter( (결과값 변수명) => 조건식)
  */