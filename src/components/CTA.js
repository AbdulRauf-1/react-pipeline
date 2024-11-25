import React, { useState } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';
import './CTA.css';

function CTA() {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send to API)
    console.log('Email submitted:', email);
    setShowAlert(true);
    setEmail('');
  };

  return (
    <div id="cta" className="cta-section">
      <Container className="text-center">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest news and offers.</p>
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ maxWidth: '400px' }}
          />
          <Button variant="success" type="submit" className="ml-2">
            Subscribe
          </Button>
        </Form>
        {showAlert && (
          <Alert variant="success" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
            Thank you for subscribing!
          </Alert>
        )}
      </Container>
    </div>
  );
}

export default CTA;
