import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Container} from 'react-bootstrap'
function Header() {     
  return (
  <header>
    <Navbar bg="primary" variant='dark'>
      <Container>
      <LinkContainer to='/'> 
      <Navbar.Brand className='mx-4 py-4'>Product lists</Navbar.Brand>
       </LinkContainer>
     </Container>
   </Navbar>
  </header>
)
}

export default Header

