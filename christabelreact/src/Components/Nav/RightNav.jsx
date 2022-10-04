import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    list-style:none;
    display:flex;
    flex-flow: row no wrap;
    

    li{
        padding: 18px 10px;
    }


    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: #002538;
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

const RightNav = ({open}) => {
  return (
    <Ul open = {open}>
        <li>Home</li>
        <li>Events</li>
        <li>Login</li>
        <li>Register</li>
   </Ul>
  )
}

export default RightNav
