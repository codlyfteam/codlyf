import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navbar2() {
  return (
    
     
      // <Navbar className='navbar' bg="white" variant="light">
      //   <Container>
      //     <Navbar.Brand className='nav-home' href="#home">Codlyf</Navbar.Brand>
      //     <Nav className="">
      //       <Nav.Link className='' href="#home">Home</Nav.Link>
      //       <Nav.Link className='nav-link' href="#pricing">About</Nav.Link>
      //       <Nav.Link className='nav-link' href="#home">Services</Nav.Link>
      //       <Nav.Link className='nav-link' href="#features">Contact</Nav.Link>
      //     </Nav>
      //     </Container>
      // </Navbar>

      <Navbar collapseOnSelect expand="lg" bg="White" variant="light">
      <Container>
        <Navbar.Brand href="#home">Codlyf</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
        <Nav>
          <Nav.Link className='' href="#home">Home</Nav.Link>
             <Nav.Link className='nav-link' href="#pricing">About</Nav.Link>
             <Nav.Link className='nav-link' href="#home">Services</Nav.Link>
            <Nav.Link className='nav-link' href="#features">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}

export default Navbar2