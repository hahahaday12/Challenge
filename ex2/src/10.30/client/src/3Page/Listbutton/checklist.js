import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import './checklist.css'


const Ckbutton = () => {
  return(
    <>
      <CheckContainer>
      <CheckButton>
        <FontAwesomeIcon icon={faListCheck}/>
        <CLP>Checklist</CLP>
      </CheckButton>
      </CheckContainer>
    </>
  )
}
export default Ckbutton;

const CheckContainer = styled.div`
  top: 25px;
  width: 254px;
  position: relative;
  height: 70px;
  position: flex;
  /* background-color: brown; */
  margin-left: 20px;
  margin-bottom: 20px;


`  


const CheckButton = styled.button`
  display: flex;
  position: absolute;
  width: 254px;
  height: 65px;
  border-radius: 20px;
  border: 0;
  outline: 0;
  background-color: white;

  :hover{
    background-color: #FF7C7C;
    color: white;
  }
`

const CLP = styled.div`
  font-size: 23px;
  margin-top: 18px;
  margin-left: 17px;
  color: #3F4E4F;
`