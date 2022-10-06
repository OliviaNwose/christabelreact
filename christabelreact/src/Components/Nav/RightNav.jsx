import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Ul = styled.ul`
    list-style:none;
    display:flex;
    flex-flow: row no wrap;
    

    li{
        padding: 18px 10px;
    }


    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: rgb(153, 190, 153);
        position:fixed;
        transform: ${({ open }) => open ? 'tanslateX(0)' : 'translateX(100%)'};
        top:0;
        right:0;
        height:100vh;
        width:300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li{
            color:#ffff;
        }
    }
`
        const Button = styled.button`
                /* Adapt the colors based on primary prop */
                background: ${props => props.primary ? "green" : "white"};
                color: ${props => props.primary ? "white" : "green"};

                font-size: 1rem;
                margin: 1em;
                padding: 0em 1em 1.5em 1em;
                border: 2px solid green;
                border-radius: 5px;

                @media (max-width: 768px){
                    margin: 1em 1.5em 0.5em 0.5em;
                    padding: 0.5em 0em 0.5em 0em;
                    border: 2px solid green;
                    border-radius: 5px; 
                } 
        `;

const RightNav = ({open}) => {
  return (
    <Ul open = {open}>
        <li>Home</li>
        <li>Admissions</li>
        <li>Programs</li>
            <Button>Login</Button>
            <Button primary>Register</Button>
   </Ul>
  )
}

export default RightNav
