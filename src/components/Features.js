import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Features() {
  const featuresData = [
    {
      title: 'Feature One',
      description: 'Description for feature one.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Feature Two',
      description: 'Description for feature two.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Feature Three',
      description: 'Description for feature three.',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <Container id="features" className="my-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row>
        {featuresData.map((feature, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={feature.image} alt={feature.title} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Features;
