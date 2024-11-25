// src/components/Hero.js

import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container className="text-center text-white">
        <h1 className="display-4">Welcome to YourProduct</h1>
        <p className="lead">
          Discover the amazing features that make your life easier.
        </p>
        <Button variant="primary" size="lg">Get Started</Button>
      </Container>
    </div>
  );
}

export default Hero;
