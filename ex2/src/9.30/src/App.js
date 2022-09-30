import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import  interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid"
//import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { useState, useCallback } from "react"
import "./style.css";

export default function App() {
 class App extends React.Component {
 /*  
 const Todo = () => {
   const[state, setState] = useState([
    {
     id: "userId2",
      title: "event 2",
      contents: "",
      allDay: true,
      start: "2022-09-29",
      end: "2019-9-30"
    },
    {
      id: "userId3",
      title: "event 3",
      contents: "",
      allDay: true,
      date: "2022-09-29"
    },
    {
     id: "userId4",
      title: "event 4",
      contents: "",
      allDay: true,
      date: "2022-09-29"
    },
  ]);
  */
  
 calendarComponentRef = React.createRef();
  state = {
    events: [
      { id: 1, title: "event 1", date: "2022-09-29" },
      {
      id: "userId2",
      title: "event 2",
      contents: "",
      allDay: true,
      start: "2022-09-29",
      end: "2019-9-30"
      },
      {
     id: "userId3",
      title: "event 3",
      contents: "",
      allDay: true,
      date: "2022-09-29"
      },
      {
        id: "userId4",
      title: "event 4",
      contents: "",
      allDay: true,
      date: "2022-09-29"
      },
      {
        id: "userId5",
      title: "event 5",
      contents: "",
      allDay: true,
      date: "2022-09-29"
      },
      {
       id: "userId6",
      title: "event 6",
      contents: "",
      allDay: true,
      date: "2022-09-29"
      }
    ]
  };
 



 handleDateClick = (arg) => {
  alert(arg.dateStr);
 }
 
 
 
  handleSelectedDates= (info) => {
   alert("selected" + info.startStr + " to " + info.endStr);
    const title = prompt("추가할 일정을 적어주세요");
    console.log(info);
    if (title != null){
      
      const newEvent = {
        title,
        contents: info.starStr,
        end: info.endStr
      };

      
      const data = [...this.state.events, newEvent];
      this.setState( { events: data });
      console.log("here", data);
      

      const data = useCallback((id,title) => {
  setState([...state , { id: id, title:title}]);
 },[state]);

    } else {
      console.log("nothing")
    }
    };
    

   render() {
 return (
      <div className='App'>
      <FullCalendar 
      schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
      ref={this.calendarComponentRef}
      defaultView="dayGridMonth"
      dateClick={this.handleDataClick}
      displayEventTime={true}
      header={{
        left: "prev, next today",
        center: "title",
        right: "dayGridMonth, timeGridWeek, timeGridDay,listWeek"
      }}
      selectable={true}

      plugins={[
        dayGridPlugin,
        interactionPlugin,
        timeGridPlugin,
        resourceTimeGridPlugin
      ]}

      eventClick={(event) =>{
        console.log(event.event._def.publicId);
      }}

      events={this.state.events}
      select={this.handleSelectedDates}
      eventLimit={10}
      />
      </div> 
    );
  }
//}
export default App;

