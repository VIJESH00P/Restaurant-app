import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <i className='fa-solid fa-uteensils fa-shake'></i>
           {' '}
            Restro Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header