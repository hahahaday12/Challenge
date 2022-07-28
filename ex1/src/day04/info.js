import { useState, useEffect } from 'react';

const Info = () => {
  const[name, setName] = useState('');
  const[nickname, setNickname] = useState('');
// 여러개의 useState로 각각의 상태관리를 할수 있다.


//name, nickname을 입력할때마다 , 랜더링 될때마다 작업이 일어남. 콘솔에 찍힘.  
   useEffect( ()=> {
   console.log('랜더링이 완료되었습니다!');
   console.log({
     name,
     nickname
      });
});


// 맨처음만 실행되고 , 그 이후에는 실행되지 않게. 두번째 파라미터값으로 빈배열 넣으면된다. 
// name, nickname 창에 입력해도. 맨처음만 실행후,  콘솔에 찍히지 않음 
useEffect( ()=> {
  console.log('마운트될 때만 실행됩니다.');
},[]);

// 그럼 특정 값이 변경될때만, 작업을 수행하고 싶을때\
// 두번째 파라미터 값안에 검사하고 싶은 값을 넣어주면 된다.  
useEffect( () => {
  console.log(name);
},[name])




  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e =>{
    setNickname(e.target.value);
  };

  return(
    <div>
      <div>
        <input 
        value={name} 
        onChange={onChangeName} 
        />
       
       <input 
       value={nickname}
        onChange={onChangeNickname} />
    </div>
    <div>
      <div>
        <b>이름:</b> {name} {/* input 창에 입력한 name값이 그대로 출력*/}
      </div>
      <div>
        <b>닉네임:</b> {nickname} {/* input 창에 입력한 nickname값이 그대로 출력*/}
    </div>
    </div>
    </div>
  );
};

export default Info;