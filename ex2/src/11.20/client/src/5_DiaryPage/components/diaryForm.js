import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, forwardRef, useEffect} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './diary.css'
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const DiaryForm = () => {

  const [ViewData, setViewData] = useState({
    id:"",
    title:"",
    content:"",
    date:"", 
    color:""
  })
  const {id, title, content, date, color } = ViewData;

  const [list, setData] = useState([]);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Datebutton className='custom-btn'
    onClick={onClick} ref={ref}>
      {value}
    </Datebutton> ));

  const getValue = e => {
    const{name, value} = e.target;
    console.log(name,value);
    setViewData({
      ...ViewData,
      [name]: value
    })
    console.log('제목이 쓰입니다');
  };

  const Content = e => {
    const{name, value} = e.target;
    console.log(name, value);
    setViewData({
      ...ViewData,
      [name]: value
    })
    console.log('내용이 쓰이고 있습니다.')
  }
  
  const submit = () => {
    axios.post('http://kai.dahyeon.us:10200/diary', {
      title: ViewData.title,
      content: ViewData.content,
      date: ViewData.date,
      color:'#FFCCCC'
    }).then((response) => {
      alert('완료');
      search();
    })
  };

  useEffect(()=> {
    //페이지 처음 들어올때 기본 날짜 설정 
    setViewData({
        date : new Date()
        ,color : "#7A90E2"
    })
    search();
  },[])

  const search = () => {
    axios.get('http://kai.dahyeon.us:10200/diary').then((response) => {
      setData(response.data.data);
      // console.log(JSON.stringify(response.data.data));
    })
  }

const Removediary = (idx, e) => {
  console.log(idx);
  let result = window.confirm("삭제하시겠습니까?");
}

const Viewdiary = (item) => {
  console.log("박스클릭" + JSON.stringify(item));
  // title = item.title;
  // id = item._id;
  // content = item.content;

  
  if(ViewData.id !== item._id){
    if(ViewData.id !== null || ViewData.id !== "") {
      let result = window.confirm("수정할래?");
      if(result){
        console.log(result);
      }else{
        return false;
      }
    }
  }

  let newDate = new Date(item.date);
  setViewData({
      title : item.title
    , content : item.content
    , color : item.color
    , id : item._id
    , date : newDate
  })

}
// 슬라이드 세팅값
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
    <AllDiaryBox>
      <DiaryContainer style={{backgroundColor: ViewData.color}}>
        <PostTitle>
          <Datebox>
            <DatePicker
              value={date}
              dateFormat="yyyy-MM-dd"
              selected={ViewData.date}
              onChange={(date) => setViewData({
              ...ViewData,
              'date': date
            })}
              customInput={<ExampleCustomInput />}
            />
          </Datebox>

          <div className='inputBox'>
            <input
              type="text"
              placeholder="제목을 작성해주세요"
              onChange={getValue}
              name='title'
              value={title}
             />
          </div>

      <FontAwesomeIcon
        type='button'
        className="CheckIcon" 
        icon={faCircleCheck}
        onClick={submit}
      />
      
      </PostTitle>
      <WriteInnerBox>
        <PostForm>
          <textarea
            type="text"
            placeholder="일기내용을 작성해주세요"
            onChange={Content}
            name='content'
            value={content}
            />
        </PostForm>
      </WriteInnerBox>
      </DiaryContainer>

        <WhiteContainer>
        <div className="sliderWrap">
          <Slider {...settings}>
            {list.map((item) => (
              <DiaryBoxContainer key={item._id}>
                <div className="diaryWrap"
                 onClick={() => Viewdiary(item)}>
                  <div 
                    className="dateBox" 
                    style={{color: item.color, borderColor: item.color}}
                  >
                    {item.date.substr(0,10)}

                    <FontAwesomeIcon 
                    className="XIcon" 
                    icon={faXmark}
                    onClick={(e) => Removediary(item._id, e)}/>

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
    </AllDiaryBox>
    </>
  );
}
export default DiaryForm;

const DiaryContainer = styled.div`
  max-width: 676px;
  max-height: 400PX;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #7A90E2;
  //background-color: red;
  //background-color: ${(props) => props.color};
  justify-content: center;
  padding: 27px;
`
const PostTitle = styled.div`
  width: 630px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
  //background-color: blue;
  left: 20px;

  & p {
    margin-right: 30px;
    text-align: center;
    font-size: 18px;
    color: white;
    font-family: 'SB 어그로 M';
  }

  & .inputBox{
    width: 300px;
    height: 40px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    position: relative;
    align-items: center;
    padding: 0 20px;
    margin-right: 10px;
    right: 60px;

    & input {
      width: 100%;
      font-family: 'SB 어그로 L';
      border: none;
      :focus {
        outline: none;
      }
    }
  }

  & .CheckIcon {
    width: 50px;
    height: 35px;
    color: white;
    position: relative;
    display: flex;
    //background-color: aliceblue;
    right: 50px;
  }
`

const WriteInnerBox = styled.div`
  width: 100%;
  height: 260px;
  /* background-color: black; */
  border-radius: 10px;
  margin: 0 auto;
`
const PostForm = styled.form`
  width: auto;
  height: auto;
  margin: 0 auto;
  padding: 20px;

  & textarea {
    resize: none;
    width: 95%;
    height: 190px;
    font-family: 'SB 어그로 L';
    border: none;
    padding: 15px 15px;
    ::-webkit-scrollbar {
      width: 8px;
      background-color: #F4F4F4;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      width: 8px;
      background-color: #c4c4c4;
      border-radius: 10px;
    }
    :focus {
      outline: none;
    }
  }
`
const Datebutton = styled.button`
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-color: #8D72E1;
  color: white;

  :hover{
    background-color: #8D9EFF;
  }
`
const Datebox = styled.div`
  width: 140px;
  height: 40px;
  //background-color: yellow;
  position: relative;
  display: flex;
  right: 80px;
`
const AllDiaryBox = styled.div`
  width: 800px;
  position: relative;
  height: 800px;
  //background-color: blueviolet;
  z-index: 10;
`

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