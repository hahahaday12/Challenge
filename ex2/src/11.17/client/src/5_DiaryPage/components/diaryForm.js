import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, forwardRef} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DiaryForm = () => {
  const [ViewData, setViewData] = useState({
    id:"",
    title:"",
    content:"",
    date:new Date(),
    color:""
  })

  //const [startDate, setStartDate] = useState(new Date());
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
    }).then(() => {
      alert('완료');
    })
  };

  return (
    <>
      <ContainerOutBox>
        <PostTitle>
      <Datebox>
      <DatePicker
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
            />
        </PostForm>
      </WriteInnerBox>
      </ContainerOutBox>
    </>
  );
}

export default DiaryForm;

const ContainerOutBox = styled.div`
  max-width: 676px;
  max-height: 400PX;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #7A90E2;
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
`
const Datebox = styled.div`
  width: 140px;
  height: 40px;
  //background-color: yellow;
  position: relative;
  display: flex;
  right: 80px;
`