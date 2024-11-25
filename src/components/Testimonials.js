import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Testimonials.css';

function Testimonials() {
  const testimonialsData = [
    {
      name: 'John Doe',
      feedback: 'This product changed my life!',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Jane Smith',
      feedback: 'Excellent customer service and great value.',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Mike Johnson',
      feedback: 'Highly recommend to everyone looking for quality.',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <Container id="testimonials" className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Carousel>
        {testimonialsData.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="testimonial-item text-center">
              <img
                className="rounded-circle mb-3"
                src={testimonial.image}
                alt={testimonial.name}
                width="100"
                height="100"
              />
              <h5>{testimonial.name}</h5>
              <p className="font-italic">"{testimonial.feedback}"</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Testimonials;
