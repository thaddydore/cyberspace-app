import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" collapseOnSelect>
      <Navbar.Brand href="#home" >Cyberpay</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Integration</Nav.Link>
          <Nav.Link href="#link">Documentation</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <Nav.Link href="#link" className='login-link'>Log In</Nav.Link>
          <Nav.Link href="#link" className='signup-link'>SignUp</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
