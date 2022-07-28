// 여러개의 useState를 사용하여 클릭시 색 바꾸기.

import { useState } from 'react';

const Saye = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하슈');
  const onClickLeave = () => setMessage(' 안녕히가슈 ');

const [color, setColor] = useState('black');

return (
  <div>
    <button onClick={onClickEnter}>입장</button>
    <button onClick={onClickLeave}>퇴장</button>
    <h1 style = {{color}}> {message} </h1>
    <button style= {{ color: 'red'}} onClick={()=> setColor('pink')}>핑크색</button>
    <button style= {{ color: 'green'}} onClick= {()=> setColor('brown')}>브라운</button>
    <button style={{ color: 'black'}} onClick= { ()=> setColor('yellow')}>노랑</button>
  </div>
  );
};

export default Saye;