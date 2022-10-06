import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';





const Nav = styled.nav`
width:100%;
height:55px;
border-bottom: 2px solid #f1f1f1;
padding: 0 20px;
display:flex;
justify-content:space-between;

.logo{
    padding: 15px 0;
}
`
const Img = styled.img`
height:25px;
width:25px;
margin-right: 5px;
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
            <div className='nav-brand'>
                    <Img src="/images/logogo.png" alt=""/> Christabel Achiever's Summit
            </div>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar

