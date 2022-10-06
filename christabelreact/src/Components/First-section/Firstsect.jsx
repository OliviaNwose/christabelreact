import React from "react";
import styled from "styled-components";


const First = styled.div`
height:100%;
width:100%;
background-image:url(/images/school.jpg);
background-size: cover;
padding-top: 20%;
padding-bottom: 5%;
color:black;
`
const Container = styled.div`
max-width:100%;
margin: 0 25px;
`

const Button = styled.button`
// /* Adapt the colors based on primary prop */
// background: ${props => props.primary ? "green" : "white"};
// color: ${props => props.primary ? "white" : "green"};

font-size: 1rem;
padding: 0.5em 0.5em 0.5em 0.5em;
background-color:green;
color:white;
border:1px solid green;
border-radius: 5px;

// @media (max-width: 768px){
//     margin: 1em 1.5em 0.5em 0.5em;
//     padding: 0Em 0em 0em 0em;
//     background-color:green;
//     color:white;
//     border:1px solid green;
//     border-radius: 5px; 
// } 
`;

export default function Firstsect(){
    return(
        <First>
            <Container>
            <p>Divine parteners in grooming  destined achievers.</p>
            <Button>Enroll Today</Button>
            </Container>
        </First>
    )
}