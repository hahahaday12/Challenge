import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import "./index.css";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// export default function App() {

const Full = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)
    return (
      <div className="CalendarBox">
        <div className='container'>

        <div className='App'>
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          googleCalendarApiKey={apiKey}
          initialView="dayGridMonth"
          events=
            {{googleCalendarId: 'ko.south_korea#holiday@group.v.calendar.google.com'}}/>
        </div>

        </div>

      </div>
            );
      };

        {/* <div className="btnWrap">
          <div className="listWrap">  */}


      {/* <div className="todoBox">
        <Link to="/fourpage" style={{width: "410px", height: "70px"}}>
                <button>todolist</button>
        </Link>
      </div> */}
      
            {/* <div className="burketBox"> 
              <p className="btnText">Burket List</p>
            </div> */}
          
        {/* </div> */}
          {/* <div className="iconBox"></div> */}
           

        {/* </div> */}
      // </div>
  
  
  export default Full;

  const CalendarBox = styled.div`
  
  
  
  `