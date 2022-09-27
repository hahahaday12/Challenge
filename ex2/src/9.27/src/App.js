import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import "./style.css";

export default function App() {
 //const apiKey = process.env.key;
    return (
      <div className='App'>
      <FullCalendar 
      plugins={[dayGridPlugin, googleCalendarPlugin]} 
      initialView="dayGridMonth"
      googleCalendarApiKey= 'AIzaSyCBynef_3WI2mwrmjcWsvMQKBJQR4kgh_M'
      events={{googleCalendarId: '324a962c2c7a0238f7d956d08b98901c5baa9784f69e992d6ad1e22246916167@group.calendar.google.com'}}
      contentHeight='auto' />
      
      </div>
    );
  }


