import Layout from '../Layout/layout';
import styled from 'styled-components';
import Full from './Calendar';
import Cbutton from './Listbutton/calendar';
import Ckbutton from './Listbutton/checklist';
import DiaryButton from './Listbutton/diary';


const ThirdPage = () => {
  return(
    <>
    <Layout>
      <Full></Full>
      <CalendarBox>
        <Cbutton/>
        <Ckbutton/>
        <DiaryButton/>
      </CalendarBox>
    </Layout>
    </>
  )
};

export default ThirdPage;

const CalendarBox = styled.div`
  width: 315px;
  height: 600px;
  background-color: blueviolet;
  right: 820px;
  position: relative;
  bottom: 600px;
`