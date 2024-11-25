import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>YourCompany</h5>
            <p>1234 Street Name, City, State, Country</p>
            <p>Email: info@yourcompany.com</p>
          </Col>
          <Col md={6} className="text-md-right">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" className="text-white mr-3">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-white mr-3">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/" className="text-white">
              <FaLinkedinIn />
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
