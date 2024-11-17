import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../smwlogo.png'; // Import the logo image

function NavbarComponent() {
  return (
      <Navbar bg="light" variant="light" expand="lg" className="custom-navbar sticky-top">

      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Library Logo"
            width="218" // Set desired width
            height="auto" // Set desired height
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/facilities" className="nav-link">
              Facilities
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
