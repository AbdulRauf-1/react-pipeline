import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#">YourLogo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="hero" smooth={true} duration={500}>Home</Nav.Link>
          <Nav.Link as={Link} to="features" smooth={true} duration={500}>Features</Nav.Link>
          <Nav.Link as={Link} to="testimonials" smooth={true} duration={500}>Testimonials</Nav.Link>
          <Nav.Link as={Link} to="cta" smooth={true} duration={500}>Get Started</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
