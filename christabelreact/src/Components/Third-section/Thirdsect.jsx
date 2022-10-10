import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";



const Third = styled.div`
text-align:center;
margin-top:30px;
background-color:whitesmoke;
padding:30px;
`






const Thirdsect = () => {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
  return (
    <Third >
        <h1><strong>Upcoming Events</strong></h1>
        <div className="cal">
        <Calendar showWeekNumbers onChange={onChange} value={date}/>
        {/* {date.toString()} */}
        </div>
    </Third>
  )
}

export default Thirdsect;


