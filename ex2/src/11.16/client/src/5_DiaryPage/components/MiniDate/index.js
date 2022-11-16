import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';


const Minidate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Datebox>
    <Datebutton className='custom-btn'
    onClick={onClick} ref={ref}>
      {value}
    </Datebutton>
    </Datebox>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default Minidate;

const Datebox = styled.div`
  width: 200px;
  height: 40px;
  //background-color: yellow;
`

const Datebutton = styled.button`
 width: 120px;
 height: 40px;
 background-color: #EDEDED;
 margin-left: 50px;
 color: navy;
 border-radius: 20px;
 &.custom-btn{
  background: #EDEDED;
  border: none;
&.custom-btn:hover{
  background-color: aliceblue;
}
}
`