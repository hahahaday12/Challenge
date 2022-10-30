import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import './diary.css'

const DiaryButton = () => {
  return(
    <>  
    <DrContainer>
      <DrButton>
        <FontAwesomeIcon icon={faBook}/>  
        <DP>DiaryBook</DP>
      </DrButton>
    </DrContainer>
    </>
  )
}
export default DiaryButton;

const DrContainer = styled.div`
  top: 40px;
  width: 254px;
  position: relative;
  height: 70px;
  position: flex;
  /* background-color: brown; */
  margin-left: 20px;
`


const DrButton = styled.button`
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
const DP = styled.div`
  font-size: 23px;
  margin-top: 18px;
  margin-left: 17px;
  color: #3F4E4F;
`
