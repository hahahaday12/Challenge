import { useState } from "react";
import styled from "styled-components";
//import DiaryForm from './diaryForm';
const ColorForm = () => {


// 현재는 임시로
// 공통으로 쓰일 color 데이터는 recoil로 전역으로 관리할 예정
  const [color,setColor] = useState([
    {
      id: 10,
      data: "pink",
      color: "#FFCCCC",
      text: "설렘",
    },
    {
      id: 11,
      data: "blue",
      color: "#7A90E2",
      text: "슬픔",
    },
    {
      id: 12,
      data: "yellow",
      color: "#FFDF78",
      text: "기쁨",
    },
    {
      id: 13,
      data: "red",
      color: "#E5636F",
      text: "화남",
    },
    {
      id: 14,
      data: "gray",
      color: "#C4C4C4",
      text: "무기력",
    },
  ])

  return (
    <>
      <WhiteContainer>
        <p className="titleText">오늘의 기분을 색으로 표현해 주세요!</p>
        <div className="colorWrap">
          {color.map((item) => (
            <ColorBox key={item.id}>
              <div style={{backgroundColor: item.color}}/> {item.text}
            </ColorBox>
          ))}
        </div>
      </WhiteContainer>
    </>
  )
}

export default ColorForm;

const WhiteContainer = styled.div`
  width: 560px;
  height: 126px;
  position: relative;
  background-color: #CED0E9;
  text-align: center;
  display: inline-block;
  margin-left: 130px;
  margin-bottom: 50px;
  font-family: 'SB 어그로 L';

  & .colorWrap {
    background-color: #CED0E9;
    width: 560px;
    height: 80px;
    display: flex;
    justify-content: space-between;
  }

  &.titleText{
    text-align: center;
    margin-top: 25px;
    margin-left: 30px;
    position: absolute;
    display: block;
    color: white;

  }
`

const ColorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  
  & div {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`