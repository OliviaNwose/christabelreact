import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';


const Footer = styled.div`
text-align: center;
// margin-top: 100vh;
background-color:green;
color:white;
padding-top:20px;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 25px;
`;

const Footicons = styled.div`
display:flex;
justify-content:center;
`;




export default function Footersect() {
  return (
    <Footer>
      <Container>
                <div><h2><b>Contact Us</b></h2></div>
                <Footicons>
                    <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
                </Footicons>
                <div>No 11 Emeuwa street Aba, Abia State. ||  +234 (0) 7068080509</div>        
            <div className='text-center p-3' >
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='https://ChristabelAchieversSummit.com/'> Christabel Achiever's Summit.com </a>
            </div>
      </Container>
    </Footer>

  )
}
