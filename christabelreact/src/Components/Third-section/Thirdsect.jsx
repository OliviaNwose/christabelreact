import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";



const Third = styled.div`
text-align:center;
margin-top:30px;
background-color:whitesmoke;
padding-top:25px;
`


const Container = styled.div`
  max-width: 100%;
  margin: 0 25px;
`;



const Thirdsect = () => {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
  return (
    <Third >
        <Container>
        <h1><strong>Upcoming Events</strong></h1>
        <div className="Cards">
            <div className="Card">
                <div className="card-image-top"><h5>14 <br></br>OCT</h5></div>
                <img className="card-image" src="/images/school.jpg" alt=""/>
                <div className="card-body">
                    <h4>WEEKLY SOCIAL GATHERING</h4>
                </div>
            </div>
            <div className="Card">
            <div className="card-image-top"><h5>17<br></br>Dec</h5></div>
                <img className="card-image" src="/images/school.jpg" alt=""/>
                <div className="card-body">
                   <h4>CHRISTMAS PARTY</h4>
                </div>
            </div>
            <div className="Card">
            <div className="card-image-top"><h5>20<br></br>Dec</h5></div>
                <img className="card-image" src="/images/school.jpg" alt=""/>
                <div className="card-body">
                    <h4>RESULT COLLECTION</h4>
                </div>
            </div>
            <div className="Card">
            <div className="card-image-top"><h5>21<br></br>Dec</h5></div>
                <img className="card-image" src="/images/school.jpg" alt=""/>
                <div className="card-body">
                   <h4>CHRISTMAS BREAK</h4>
                </div>
            </div>    
        </div>
        <div className="Scard">
            <div className="Card">
                <div className="card-image-top"><h6>14 <br></br>OCT</h6></div>
                <img className="card-image" src="/images/school.jpg" alt=""/>
                <div className="card-body">
                    <h6>WEEKLY SOCIAL GATHERING</h6>
                </div>
            </div>
            <div className="Card">
            <div className="card-image-top"><h6>17<br></br>Dec</h6></div>
                <img className="card-image" src="/images/school.jpg" alt=""/>
                <div className="card-body">
                   <h6>CHRISTMAS PARTY</h6>
                </div>
            </div>
        </div>   
        <div className="Scard">
        <div className="Card">
            <div className="card-image-top"><h6>20<br></br>Dec</h6></div>
                <img className="card-image" src="/images/school.jpg" alt=""/>
                <div className="card-body">
                    <h6>RESULT COLLECTION</h6>
                </div>
            </div>
            <div className="Card">
            <div className="card-image-top"><h6>21<br></br>Dec</h6></div>
                <img className="card-image" src="/images/school.jpg" alt=""/>
                <div className="card-body">
                   <h6>CHRISTMAS BREAK</h6>
                </div>
            </div> 
        </div>
        <div className="cal">
        <Calendar showWeekNumbers onChange={onChange} value={date}/>
        {/* {date.toString()} */}
        </div>
        </Container>
    </Third>
  )
}

export default Thirdsect;


