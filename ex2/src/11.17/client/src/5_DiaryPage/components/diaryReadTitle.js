import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Axios from 'axios';

const DiaryReadTitle = () => {

  const [list, setData] = useState([]);

  // 데이터가 보여지는곳 
  useEffect( ()=> {
    Axios.get('http://kai.dahyeon.us:10200/diary').then((response) => {
      setData(response.data.data);
    })
  },[])

  const settings = {
    dots: true,
    arrow: true,
    speed: 700,
    infinite: true,
    rows: 2,
    slidesPerRow: 2,
  }

  return (
    <>
      <WhiteContainer>
        <div className="sliderWrap">
          <Slider {...settings}>
            {list.map((item) => (
              <DiaryBoxContainer key={item._id}>
                <div className="diaryWrap">
                  <div 
                    className="dateBox" 
                    style={{color: item.color, borderColor: item.color}}
                  >
                    {item.date.substr(0,10)}
                    <FontAwesomeIcon className="XIcon" icon={faXmark}/>
                  </div>
                  <div 
                    className="titleBox"
                    style={{backgroundColor: item.color}}
                  >
                    <div>
                      {item.title}
                    </div>
                  </div>
                </div>
              </DiaryBoxContainer>
            ))}
          </Slider>
        </div>
      </WhiteContainer>
    </>
  );
 
}

export default DiaryReadTitle;

const WhiteContainer = styled.div`
  width: 676px;
  height: 310px;
  margin: 0 auto;
  background-color: #CED0E9;
  overflow: hidden;
  margin-top: 50px;

  & .sliderWrap {
    margin: 0 auto;
    padding-top: 10px;
  }
`

const DiaryBoxContainer = styled.div`
  font-family: 'SB 어그로 M';
  
  & .diaryWrap {
    margin: 20px 0;
  }

  & .dateBox {
    width: 261px;
    height: 30px;
    border-radius: 10px 10px 0 0;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 0 auto;

    & .XIcon {
      color: black;
      position: relative;
      left:20px;
      bottom: 2px;
    }
  }

  & .titleBox {
    width: 265px;
    height: 55px;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
