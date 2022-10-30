import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import './calendar.css'

const Cbutton = () => {
  return(
    <>
    <CalBox>
      <Calbutton>
        <FontAwesomeIcon icon={faCalendar} />
        <CP>Calendar</CP>
      </Calbutton>
    </CalBox>
    </>
  );
};

export default Cbutton;

const CalBox = styled.div`
  width: 254px;
  position: relative;
  height: 70px;
  position: flex;
  /* background-color: brown; */
  top: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
`



const Calbutton = styled.button`
  width: 254px;
  height: 70px;
  background-color: white;
  display: flex;
  position: absolute;
  border-radius: 20px;
  border: 0;
  outline: 0;

  :hover{
    background-color: #FF7C7C;
    color: white;
  }
`
const CP = styled.div`
  font-size: 23px;
  margin-top: 18px;
  margin-left: 17px;
  color: #3F4E4F;
`

