import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
//import { faBadgecheck } from '@fortawesome/free-duotone-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Year from "react-live-clock";
import Minidate from './MiniDate/index';



const DiaryForm = () => {

  const [ViewData, setViewData] = useState({
    id:"",
    title:"",
    content:"",
    date:"",
    color:""
  })


  const getValue = e => {
    const{name, value} = e.target;
    console.log(name,value);
    setViewData({
      ...ViewData,
      [name]: value
    })
    console.log('제목이 쓰입니다');
  };


  const submit = () => {
    axios.post('http://kai.dahyeon.us:10200/diary', {
      title: ViewData.title,
      content: ViewData.content,
      date: "2022-11-16",
      color:'#FFCCCC'

    }).then(() => {
      alert('완료');
    })
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

  return (
    <>
      <ContainerOutBox>
        
        <PostTitle>
        <Minidate/>
          {/* <p>
              <Year
              id="Year"
              //format=""
              format={"YYYY-MM-DD"}
              ticking={false}
              timezone={"Asia/Seoul"}
              />           
            </p> */}

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
        
      
        {/* <button className='submit-button'
         onClick={submit} 
        >등록</button> */}

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
  //background-color: #C4C4C4;
  background-color: #8D9EFF;
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
    width: 520px;
    height: 40px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    position: relative;
    align-items: center;
    padding: 0 20px;
    margin-right: 10px;
    right: 80px;

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
