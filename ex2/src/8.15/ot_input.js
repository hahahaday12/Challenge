/*
 하나의 input 값이 아니라 여러개의 input 값이면 
 여러개의 input 창에 대한 로직을 써야하는게 아니라 input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것입니다.
그리고, useState 에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 합니다.
그리고 값에 대한 추가나, 수정은. 객체 형태로 작성해주어야 한다.
 */

import React, { useState } from 'react';

  const Input1 = () => {
    const [input , setInput] = useState([
      {
        id:'',
        todo: ''
    }
  ]);

    // 비구조화 할당으로 가져오기

    const {id, todo} = input;

    const New = (e) => {
      const { value, id }  = e.target;
      setInput({
        ...input,
        [id]:value
      });
    };

    /* 버튼 클릭시 초기화 하는 로직, 근데 이것도 초기화가..
    다 초기화 되야 하는거니까 로직을 객체 자체로 가져와야하는가?*/
    const Reset = () => {
      setInput({
        id: '',
        todo: '',
      })
    };


    return(
      <div>
        {/* input 안에 넣어지는 건  똑같지만 , 
        다른 input안에 다르게 입력이 들어갈것이기 때문에 
        value 값만 다르게 넣어주었다 . */}
        <input name="id" placeholder="이름" onChange={New} value={id}/>
        <input name="todo" placeholder="닉네임" onChange={New} value={todo}/>
        <button onClick={Reset}>초기화</button>      

        <div>
          <b>값: </b>
          {id} ({todo})
        </div>
      </div> 
        
    );
  }
  export default Input1;