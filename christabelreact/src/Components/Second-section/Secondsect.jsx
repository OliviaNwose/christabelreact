import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faPersonChalkboard, faHandshake, faLeaf} from '@fortawesome/free-solid-svg-icons';

const Second = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 25px;
`;
const Cards = styled.div`
display:flex;
justify-content:center;
margin-top:60px;


@media (max-width: 768px){
display:block;
} 
`;
const Card = styled.div`
width:20%;
height:160px;
background-color: rgb(153, 190, 153);
margin:auto;
padding-top:2%;
&:hover,
&:focus {
  background-color:rgb(2, 49, 2);
  color:white;
}



@media (max-width: 768px){
  width:90%;
  height:150px;
  margin-bottom:30px;
  padding-top:20px
  } 
`; 

export default function Secondsect() {
  return (
    <Second>
      <Container>
        <h1><strong>Welcome to <br></br>Christabel Achiever's Summit</strong></h1>
        <p>
          Christabel Achiever's Summit schools is group of schools consisting of
          creche, nursery, primary, junior and senior secondary schools, located
          at No 11 Emeuwa street Aba, Abia State, Nigeria.
        </p>
        <p>The creche, nuirsery and primary schools were founded in 2010, </p>
        <Cards>
          <Card>
          <FontAwesomeIcon icon={faBookOpenReader} size="5x"/>
          <h2>Enroll</h2>
          </Card>
          <Card>
          <FontAwesomeIcon icon={faPersonChalkboard} size="5x"/>
          <h2>Teach</h2>
          </Card>
          <Card>
          <FontAwesomeIcon icon={faHandshake} size="5x"/>
          <h2>Support</h2>
          </Card>
          <Card>
          <FontAwesomeIcon icon={faLeaf} size="5x"/>
          <h2>Grow</h2>
          </Card>
        </Cards>
      </Container>
    </Second>
  );
}
